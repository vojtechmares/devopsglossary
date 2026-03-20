---
title: Traces
slug: traces
description: "Records of requests as they flow through distributed systems, showing the path and timing across services."
relatedTerms:
  - observability
  - logs
  - metrics
  - opentelemetry
tags:
  - observability
  - distributed-systems
  - debugging
category: concept
dateAdded: 2026-03-20
---

Traces follow a single request on its journey through your microservices architecture, capturing every hop, every database call, and every queue wait along the way. Think of them as a detective's case file for a specific transaction — they show you exactly which service took 400ms to respond and which one added an unnecessary round trip to a cache that wasn't even caching anything.

Each trace is made up of spans, where a span represents a unit of work in a single service. Spans link together via context propagation, forming a tree that visualizes the entire request lifecycle. When your user reports that "the checkout page is slow," traces let you pinpoint whether the bottleneck is in the payment service, the inventory check, or that one legacy service nobody wants to touch. Distributed tracing went from a luxury to a necessity the moment teams started splitting monoliths into dozens of services.

**Why it matters:** In a world of microservices, no single service owns the full picture. Traces connect the dots across service boundaries, turning "it's slow somewhere" into "it's slow right here, in this exact function call." They're the third pillar of observability and the one that makes distributed debugging actually possible.
