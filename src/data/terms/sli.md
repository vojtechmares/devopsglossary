---
title: Service Level Indicator
slug: sli
abbreviation: SLI
description: "A quantitative measure of a specific aspect of service reliability, like latency, availability, or error rate."
relatedTerms:
  - slo
  - sla
  - sre
  - metrics
  - prometheus
tags:
  - reliability
  - metrics
  - sre
category: concept
dateAdded: 2026-03-20
---

An SLI is the actual number that tells you how your service is doing right now — the measured reality behind your reliability promises. It's the ratio of good events to total events: the percentage of requests served under 200ms, the fraction of successful API calls, or the proportion of time your service was reachable. If SLOs are the target on the wall, SLIs are where the dart actually landed.

Choosing the right SLIs is an art form. You want indicators that reflect what users actually experience, not just what's easy to measure. CPU utilization might be convenient to track, but it tells you nothing about whether checkout flows are completing successfully. The best SLIs are derived from real user interactions — request success rates at the load balancer, end-to-end latency as measured by synthetic probes, or error rates from client-side telemetry. Tools like Prometheus make collecting and computing these ratios straightforward, turning raw metrics into meaningful reliability signals.

**Why it matters:** SLIs ground your reliability conversations in data instead of gut feelings. They're the foundation that SLOs and SLAs are built on — without accurate indicators, your objectives are just wishful thinking and your agreements are just vibes with a signature.
