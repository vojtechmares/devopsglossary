---
title: WebSockets
slug: web-sockets
description: "A protocol providing full-duplex, persistent communication channels over a single TCP connection between client and server."
relatedTerms:
  - http
  - sse
  - tcp
tags:
  - protocol
  - real-time
  - networking
category: concept
dateAdded: 2026-03-20
---

The protocol that finally let the server talk back without being asked. Traditional HTTP follows a strict "you ask, I answer" pattern, which is fine for loading web pages but terrible for real-time applications. WebSockets flip that model on its head by establishing a persistent, full-duplex connection where both client and server can send messages whenever they want. It starts with a polite HTTP handshake (an upgrade request, if you will), and then the protocol switches to a lightweight framing format that keeps the conversation going indefinitely.

WebSockets are the backbone of anything that needs real-time communication: chat applications, live dashboards, multiplayer games, collaborative editors, and those stock tickers that make your heart rate spike. The protocol is refreshingly simple once the connection is established -- just send frames back and forth without the overhead of HTTP headers on every message. The catch? WebSocket connections are stateful and long-lived, which means your load balancers, proxies, and firewalls all need to know how to handle them. Many an ops engineer has learned this the hard way when sticky sessions and connection draining suddenly became very relevant topics.

**Why it matters:** In a world of real-time dashboards, live monitoring, and event-driven architectures, WebSockets are a critical tool. For DevOps engineers, understanding WebSockets matters when configuring reverse proxies, debugging connectivity issues through load balancers, and architecting systems that need to push updates to clients instantly rather than waiting for them to poll.
