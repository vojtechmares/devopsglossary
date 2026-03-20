---
title: QUIC
slug: quic
abbreviation: QUIC
description: "A modern transport protocol built on UDP that provides multiplexed, encrypted connections and powers HTTP/3."
relatedTerms:
  - http
  - tcp
  - udp
  - tls
tags:
  - protocol
  - networking
  - performance
category: concept
dateAdded: 2026-03-20
---

The protocol that looked at TCP's decades of reliable service and said, "I can do better, and I'll use UDP to prove it." QUIC (originally "Quick UDP Internet Connections," though the acronym was later dropped) was born at Google, standardized by the IETF, and now serves as the foundation for HTTP/3. It takes everything good about TCP -- reliable delivery, congestion control, flow control -- and rebuilds it in userspace on top of UDP, while baking in TLS 1.3 encryption from the start. No more negotiating security as an afterthought.

QUIC's party trick is solving the head-of-line blocking problem that plagued HTTP/2 over TCP. When a single TCP packet is lost, every stream on that connection has to wait for retransmission. QUIC handles each stream independently, so a dropped packet only stalls the affected stream while the others keep flowing. It also dramatically speeds up connection establishment -- a QUIC handshake combines transport and cryptographic setup into a single round trip, and returning clients can often send data with zero round trips. For mobile users bouncing between Wi-Fi and cellular, QUIC supports connection migration so your session survives the network switch.

**Why it matters:** QUIC and HTTP/3 are rapidly becoming the default for web traffic, with major browsers and CDNs already supporting it. As a DevOps engineer, you'll need to understand QUIC when configuring load balancers, debugging network issues, tuning firewall rules (remember, it's UDP now), and explaining to your security team why blocking all UDP traffic is no longer a viable strategy.
