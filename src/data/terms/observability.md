---
title: Observability
slug: observability
abbreviation: o11y
description: "The ability to understand a system's internal state from its external outputs: logs, metrics, and traces."
relatedTerms:
  - prometheus
  - grafana
tags:
  - monitoring
  - debugging
  - sre
category: concept
dateAdded: 2026-03-20
---

Monitoring tells you *when* something is broken. Observability tells you *why*. It's the holy trinity of system understanding: **logs** (what happened), **metrics** (how much), and **traces** (where it went).

Observability (o11y, because DevOps loves numeronyms) is about instrumenting your systems so that when the inevitable 3 AM page comes, you can actually diagnose the problem without resorting to `kubectl exec` and `grep`.

**Why it matters:** In distributed systems, you can't predict every failure mode. Observability lets you ask new questions about your system without deploying new code.
