---
title: UDP
slug: udp
abbreviation: UDP
description: "A connectionless transport protocol that sends datagrams without guarantees of delivery, ordering, or duplicate protection."
relatedTerms:
  - tcp
  - quic
tags:
  - networking
  - protocol
  - transport
category: concept
dateAdded: 2026-03-20
---

The "send it and forget it" protocol that trades reliability for raw speed. User Datagram Protocol is TCP's carefree sibling -- no handshakes, no connection state, no retransmissions, no apologies. You fire off a datagram and hope for the best. This might sound reckless, but it's exactly what you want when low latency matters more than guaranteed delivery. Video calls, online gaming, DNS lookups, and streaming media all rely on UDP because waiting for a retransmission of a dropped frame is worse than just skipping it and moving on.

UDP's simplicity is its superpower. The header is just 8 bytes (compared to TCP's minimum of 20), there's no connection setup overhead, and the kernel has far less work to do per packet. This makes UDP the go-to choice for high-throughput, latency-sensitive applications and protocols that want to implement their own reliability logic on top. QUIC is the most prominent example -- it builds TCP-like reliability over UDP while avoiding TCP's head-of-line blocking. DNS, DHCP, NTP, and most VPN protocols also run over UDP because sometimes you just need to get packets out the door fast.

**Why it matters:** For DevOps engineers, UDP shows up more often than you might expect. DNS resolution, container networking, service discovery, QUIC-based HTTP/3 traffic, and many monitoring protocols all use UDP. Understanding when and why UDP is chosen over TCP helps you configure firewalls correctly (don't block UDP 443 anymore), debug DNS issues, and make informed decisions about protocol selection in your architecture.
