# Hostinger Process and Resource Audit

Audited July 12, 2026 against the complete repository.

## Findings

### Confirmed: unbounded contact rate-limit state

`src/app/api/contact/route.ts` previously retained one map entry for every observed IP address for the lifetime of the server process. Entries expired logically but were never removed, so distributed traffic could steadily increase memory use. The map is now capped at 500 entries and pruned opportunistically without a timer or background task.

### Preventative: simultaneous SMTP delivery

Each valid contact request creates one short-lived SMTP transport. Distributed requests could previously open many simultaneous sockets. Delivery is now limited to two concurrent operations per application instance. Excess work receives a temporary 503 response instead of opening another connection.

### Preventative: SMTP operations without explicit time limits

SMTP connection, greeting, and socket operations now have 10, 5, and 15 second limits. The non-pooled transport is explicitly closed in `finally`, including after errors. File and URL access from message content are disabled.

### Preventative: request-body memory limit

The contact endpoint now rejects declared or actual request bodies above 16 KiB before schema validation. This is above the permitted form payload and prevents oversized JSON bodies from consuming unnecessary memory.

### Preventative: build worker count

The site has 23 prerendered routes. Next.js previously selected static-generation workers based on the build machine CPU count. The build now uses one CPU and one static-generation task at a time, with a high minimum page count per worker. This reduces temporary deployment processes and peak build memory on shared hosting. These settings affect builds, not the production request server.

## Patterns not present

- No database, ORM, database pool, Redis client, or persistent external storage connection.
- No custom HTTP server, Express server, WebSocket server, Socket.IO server, or extra listening port.
- No PM2, cluster mode, Docker process manager, ecosystem file, or nested process manager.
- No cron job, scheduler, queue worker, background worker, polling interval, or import-time timer.
- No child process, worker thread, Python, FFmpeg, browser automation, image processing, uploads, or temporary-file pipeline.
- No postinstall, prepare, prestart, watcher, Nodemon, or deployment script that starts the site twice.
- No server-side external fetch loop or retry loop.
- The mobile navigation listener is browser-only and removes itself in its React effect cleanup.

## Persistent process model

Hostinger should run exactly one application instance using its built-in Node.js process manager:

```text
Install: npm ci
Build: npm run build
Start: node node_modules/next/dist/bin/next start
Node.js: 22.x
Application root: repository root
Instances: 1
```

Do not install or launch PM2. Do not use `npm run dev`, `next dev`, `nohup`, or a preview server. For Hostinger, prefer the direct `node node_modules/next/dist/bin/next start` command. It retains only the Next.js Node process instead of keeping an additional npm Node launcher alive. The command automatically reads Hostinger's `PORT` environment variable. `npm run start` remains available for ordinary local use.

The standard Next.js server owns shutdown behavior. This repository intentionally does not add competing signal, exception, or forced-exit listeners. Hostinger's manager should send a normal termination signal and wait for Next.js to close before starting its replacement.

## Runtime resources

The production process serves static prerendered pages and two small route handlers. `/api/health/` returns constant JSON. `/api/contact/` performs bounded, on-demand SMTP delivery only. There are no always-open application database, worker, cron, or queue resources.

## Local diagnostics

Run `npm run diagnose:handles`. The one-time script prints its PID and active Node.js handle/request types, then exits naturally. It exposes no public endpoint.

With Hostinger terminal access, use the process manager or `pgrep -af node` if permitted. One production application instance is expected. Temporary deployment build processes are normal but must end when `npm run build` completes.

## Deployment verification

1. Stop any manually created PM2, `nohup`, development, or duplicate application process.
2. Configure the repository root and Node.js 22.x in hPanel.
3. Set production environment variables in hPanel.
4. Deploy with `npm ci`, `npm run build`, and `node node_modules/next/dist/bin/next start`.
5. Confirm `/api/health/` returns `{"status":"ok"}`.
6. Submit repeated health and invalid contact requests and confirm one server PID remains.
7. Trigger one hPanel restart and confirm the old instance disappears before the replacement remains active.

## Limitations

The local environment cannot inspect Hostinger's Linux process table, hPanel restart implementation, reverse-proxy timeout, SMTP server behavior, or production credentials. SMTP success and termination under a real Hostinger shutdown signal must be confirmed after deployment.
