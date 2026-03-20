---
title: TCP
slug: tcp
abbreviation: TCP
description: "A connection-oriented transport protocol that provides reliable, ordered delivery of data between applications over IP networks."
relatedTerms:
  - udp
  - http
  - tls
tags:
  - networking
  - protocol
  - transport
category: concept
dateAdded: 2026-03-20
---

The reliable friend who always makes sure your message got through, even if it takes a few tries. Transmission Control Protocol is the workhorse of the internet, sitting at the transport layer and ensuring that data arrives complete, in order, and without corruption. It does this through a beautiful (if somewhat chatty) system of sequence numbers, acknowledgments, and retransmissions. The famous three-way handshake -- SYN, SYN-ACK, ACK -- is networking's equivalent of "Hey," "Hey back," "Cool, let's talk."

TCP is what makes the internet feel dependable. Every HTTP request, database query, SSH session, and email transfer relies on TCP to handle the messy reality of packet loss, network congestion, and out-of-order delivery. It implements flow control so a fast sender doesn't overwhelm a slow receiver, and congestion control so the entire network doesn't collapse under load. These are genuinely brilliant algorithms (shoutout to Van Jacobson) that most developers never think about, which is exactly the point. The downside? All that reliability comes with latency costs. The handshake adds round trips, head-of-line blocking can stall multiplexed streams, and the protocol's conservatism can underutilize fast networks -- which is exactly why QUIC showed up to shake things up.

**Why it matters:** TCP is foundational to virtually everything in DevOps. From configuring health checks and connection timeouts, to debugging network issues with tcpdump, to understanding why your service mesh adds latency, TCP knowledge is essential. When something goes wrong at the network level, understanding TCP flags, window sizes, and connection states is often the difference between a five-minute fix and a five-hour mystery.
