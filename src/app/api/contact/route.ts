import { NextResponse } from "next/server";
import { z } from "zod";

const MAX_BODY_BYTES = 16_384;
const RATE_WINDOW_MS = 15 * 60_000;
const MAX_ATTEMPTS = 5;
const MAX_RATE_ENTRIES = 500;
const MAX_CONCURRENT_DELIVERIES = 2;

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.email().max(254),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0).optional(),
});

const attempts = new Map<string, { count: number; until: number }>();
let activeDeliveries = 0;

function pruneRateEntries(now: number) {
  if (attempts.size < MAX_RATE_ENTRIES) return;
  for (const [key, value] of attempts) {
    if (value.until <= now) attempts.delete(key);
  }
  while (attempts.size >= MAX_RATE_ENTRIES) {
    const oldest = attempts.keys().next().value as string | undefined;
    if (!oldest) break;
    attempts.delete(oldest);
  }
}

function headerSafe(value: string) {
  return value.replace(/[\r\n]/g, " ");
}

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ message: "The message is too large." }, { status: 413 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  pruneRateEntries(now);
  const entry = attempts.get(ip);
  if (entry && entry.until > now && entry.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ message: "Too many attempts. Please try again later." }, { status: 429 });
  }
  attempts.set(ip, entry && entry.until > now ? { ...entry, count: entry.count + 1 } : { count: 1, until: now + RATE_WINDOW_MS });

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
      return NextResponse.json({ message: "The message is too large." }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ message: "Check the form and try again." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: "Check each field and try again." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM) {
    return NextResponse.json({ message: "Email delivery is not configured yet. Please email admin@chaldeannumerology.online." }, { status: 503 });
  }
  if (activeDeliveries >= MAX_CONCURRENT_DELIVERIES) {
    return NextResponse.json({ message: "The message service is busy. Please try again shortly." }, { status: 503 });
  }

  activeDeliveries += 1;
  let closeTransport: (() => void) | undefined;

  try {
    const { default: nodemailer } = await import("nodemailer");
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      connectionTimeout: 10_000,
      greetingTimeout: 5_000,
      socketTimeout: 15_000,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });
    closeTransport = () => transport.close();
    await transport.sendMail({
      from: headerSafe(SMTP_FROM),
      to: "admin@chaldeannumerology.online",
      replyTo: headerSafe(parsed.data.email),
      subject: `Website message: ${headerSafe(parsed.data.subject)}`,
      text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
    return NextResponse.json({ message: "Thanks. Your message was sent." });
  } catch {
    return NextResponse.json({ message: "The message could not be delivered. Please email admin@chaldeannumerology.online." }, { status: 502 });
  } finally {
    closeTransport?.();
    activeDeliveries -= 1;
  }
}
