---
title: Protocol Buffers
slug: protobuf
description: "A language-neutral, platform-neutral binary serialization format developed by Google for structured data."
relatedTerms:
  - grpc
  - json
  - xml
tags:
  - serialization
  - grpc
  - performance
category: concept
dateAdded: 2026-03-20
---

Google's answer to "JSON is great, but what if we cared about bytes?" Protocol Buffers (protobuf) is a binary serialization format that takes your structured data, squashes it down to a fraction of its JSON equivalent, and ships it across the wire faster than you can say "content-type: application/json." You define your data structures in `.proto` files, run them through the protobuf compiler, and out pops strongly typed code in your language of choice — Go, Java, Python, C++, and many more.

The trade-off is human readability. You can't just pipe a protobuf message through `jq` and see what's inside — you need the schema to decode it. But what you lose in debuggability, you gain in performance, type safety, and backward compatibility. Protobuf's field numbering system means you can evolve your schemas without breaking existing consumers, which is a luxury that JSON APIs can only dream of. It's the serialization backbone of gRPC and is used internally at Google for virtually everything, from storing data to inter-service communication.

**Why it matters:** In high-throughput systems where every byte and millisecond counts, protobuf's compact binary format and schema evolution capabilities make it a critical tool. It enforces contracts between services and catches data shape mismatches before they become production incidents.
