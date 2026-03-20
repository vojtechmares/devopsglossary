---
title: gRPC
slug: grpc
abbreviation: gRPC
description: "A high-performance, open-source RPC framework that uses HTTP/2 and Protocol Buffers for efficient communication."
relatedTerms:
  - rpc
  - protobuf
  - http
  - rest
tags:
  - api
  - rpc
  - performance
category: concept
dateAdded: 2026-03-20
---

Google's answer to "what if APIs were fast?" gRPC takes the remote procedure call concept and supercharges it with HTTP/2 multiplexing, Protocol Buffers for compact binary serialization, and built-in support for streaming in both directions. While REST is over there sending human-readable JSON back and forth like postcards, gRPC is firing binary payloads through a firehose. It's not as easy to debug with curl, but your microservices will thank you when they're handling thousands of calls per second.

The "g" in gRPC officially stands for something different in every release (seriously, check the docs), but the value proposition is constant: strongly typed contracts via .proto files, automatic code generation for dozens of languages, and performance that makes REST look like it's sending data by carrier pigeon. It supports unary calls, server streaming, client streaming, and bidirectional streaming — making it perfect for real-time communication between services. The trade-off is complexity: you'll need proto compilation pipelines, and browser support requires a proxy like gRPC-Web or Envoy.

**Why it matters:** In microservice architectures where services chatter constantly, gRPC's efficiency and type safety dramatically reduce latency and catch integration bugs at compile time. It's become the go-to choice for high-throughput internal service communication.
