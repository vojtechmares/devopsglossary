---
title: OpenTelemetry Protocol
slug: otlp
abbreviation: OTLP
description: "The native protocol for transmitting telemetry data between OpenTelemetry components and backends."
relatedTerms:
  - opentelemetry
  - logs
  - metrics
  - traces
tags:
  - observability
  - protocol
  - telemetry
category: concept
dateAdded: 2026-03-20
---

OTLP is the wire protocol that carries your logs, metrics, and traces from where they're generated to where they need to go. It's the lingua franca of the OpenTelemetry ecosystem — a standardized way to encode and transmit telemetry data so that every component in the pipeline speaks the same language. No more proprietary formats, no more custom exporters for every vendor.

The protocol supports both gRPC and HTTP/protobuf transports, so you can pick whichever fits your infrastructure. OTLP defines a clean schema for all three signal types, making it possible for a single collector endpoint to ingest traces, metrics, and logs without needing separate receivers for each. It's designed for efficiency too — binary protobuf encoding keeps payloads small and serialization fast, which matters when you're shipping millions of spans per minute.

**Why it matters:** OTLP removes the translation layer between your applications and your observability backend. By standardizing how telemetry data moves through the pipeline, it simplifies architecture, reduces integration headaches, and makes the promise of vendor-neutral observability actually achievable.
