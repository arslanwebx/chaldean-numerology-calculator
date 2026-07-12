/* Local one-time diagnostic. This file is never imported by the web application. */
await new Promise((resolve) => setImmediate(resolve));

const getActiveHandles = process._getActiveHandles;
const getActiveRequests = process._getActiveRequests;
const handles = typeof getActiveHandles === "function" ? getActiveHandles.call(process) : [];
const requests = typeof getActiveRequests === "function" ? getActiveRequests.call(process) : [];
const names = handles.map((handle) => handle?.constructor?.name || "Unknown");

console.log(JSON.stringify({
  pid: process.pid,
  activeHandleCount: handles.length,
  activeHandleTypes: names,
  activeRequestCount: requests.length,
}, null, 2));

// No forced exit is used. A healthy diagnostic process exits naturally.
