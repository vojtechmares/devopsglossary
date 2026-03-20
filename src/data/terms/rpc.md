---
title: Remote Procedure Call
slug: rpc
abbreviation: RPC
description: "A protocol that allows a program to execute a procedure on a remote server as if it were a local function call."
relatedTerms:
  - grpc
  - json-rpc
  - api
tags:
  - networking
  - protocols
  - distributed-systems
category: concept
dateAdded: 2026-03-20
---

The OG distributed computing abstraction: call a function on another machine and pretend it's running locally. RPC has been around since the 1980s, and the core idea is beautifully simple — your code calls `doSomething(args)`, and under the hood, the arguments get serialized, shipped across the network, executed on a remote server, and the result comes back as if nothing unusual happened. It's the magician's trick that made distributed systems feel almost manageable.

Of course, the devil is in the "almost." The network is not reliable, latency is not zero, and that remote call can fail in ways a local function never would. The fallacies of distributed computing have humbled every RPC framework ever built. But the pattern endures because it maps so naturally to how developers think. Modern incarnations like gRPC, JSON-RPC, and various language-specific frameworks have refined the concept with better serialization, error handling, and streaming support — but the fundamental promise remains the same: make the network disappear (and then deal with it when it doesn't).

**Why it matters:** RPC is the foundational pattern behind most service-to-service communication in distributed systems. Understanding it helps you reason about trade-offs in latency, failure modes, and serialization that affect every microservice architecture.
