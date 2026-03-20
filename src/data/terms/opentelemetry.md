---
title: OpenTelemetry
slug: opentelemetry
abbreviation: OTel
description: "A vendor-neutral, open-source observability framework for generating, collecting, and exporting telemetry data."
relatedTerms:
  - logs
  - metrics
  - traces
  - otlp
  - prometheus
tags:
  - observability
  - telemetry
  - cloud-native
category: tool
dateAdded: 2026-03-20
---

OpenTelemetry is the grand unification project of the observability world — a single, vendor-neutral framework that handles logs, metrics, and traces so you don't have to wire up three different libraries and pray they play nicely together. Born from the merger of OpenTracing and OpenCensus, OTel gives you SDKs for virtually every language and a collector that can route your telemetry data to whatever backend your team (or your budget) prefers.

The beauty of OTel is that you instrument your code once and can switch observability vendors without rewriting a single line. Auto-instrumentation libraries handle the common stuff — HTTP calls, database queries, gRPC requests — while the SDK lets you add custom spans and metrics where it matters. The OpenTelemetry Collector acts as a pipeline, receiving data via OTLP, processing it (sampling, filtering, enriching), and exporting it to one or more destinations. It's the Swiss Army knife of telemetry plumbing.

**Why it matters:** OpenTelemetry is rapidly becoming the industry standard for observability instrumentation. By decoupling telemetry generation from telemetry backends, it frees teams from vendor lock-in and brings consistency to how we collect signals across the entire stack.
