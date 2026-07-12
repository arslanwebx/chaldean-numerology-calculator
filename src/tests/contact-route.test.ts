import { describe, expect, it } from "vitest";
import { POST } from "@/app/api/contact/route";

describe("contact route resource limits", () => {
  it("rejects a declared oversized body before parsing", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", "content-length": "20000" },
      body: "{}",
    });
    const response = await POST(request);
    expect(response.status).toBe(413);
  });

  it("rejects malformed JSON without opening an SMTP connection", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "not-json",
    });
    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});
