---
title: Server-Sent Events
slug: sse
abbreviation: SSE
description: "A server push technology enabling a client to receive automatic updates from a server over a single, long-lived HTTP connection."
relatedTerms:
  - http
  - web-sockets
  - stream
tags:
  - protocol
  - real-time
  - streaming
category: concept
dateAdded: 2026-03-20
---

The chill, one-way alternative to WebSockets that doesn't try to do too much. Server-Sent Events let a server push data to a client over a plain HTTP connection using a dead-simple text-based format. No special protocol upgrade, no binary framing, no handshake dance -- just set the content type to `text/event-stream` and start sending lines of text. The browser (or any HTTP client) handles reconnection automatically, tracks the last event ID, and generally stays out of your way.

SSE shines in scenarios where the communication is naturally one-directional from server to client: live log streaming, deployment progress updates, notification feeds, real-time metrics dashboards, and CI/CD build outputs. You don't need the full-duplex complexity of WebSockets when the client just needs to sit there and listen. The format is so simple you can test it with curl, which is a refreshing change from protocols that require specialized tooling. The main limitations? No binary data (it's text-only), and some older proxies might buffer the responses, but in most modern setups, SSE just works.

**Why it matters:** SSE has found a renaissance in the age of AI streaming responses and real-time DevOps dashboards. When you need to stream logs, push deployment status updates, or build a live monitoring feed, SSE offers a simpler, more HTTP-native approach than WebSockets. It works with existing infrastructure, plays nicely with load balancers, and requires zero special configuration on most reverse proxies.
