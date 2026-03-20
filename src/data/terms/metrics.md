---
title: Metrics
slug: metrics
description: "Numerical measurements collected over time that quantify the behavior and performance of systems."
relatedTerms:
  - observability
  - logs
  - traces
  - prometheus
  - sli
tags:
  - observability
  - monitoring
  - performance
category: concept
dateAdded: 2026-03-20
---

Metrics are the vital signs of your infrastructure — numbers like CPU usage, request latency, error rates, and memory consumption that get collected at regular intervals and plotted on dashboards everyone stares at during incidents. They're the reason engineers can say things like "p99 latency spiked to 800ms" instead of "it feels kinda slow, I guess."

Unlike logs, which capture individual events, metrics aggregate behavior into time-series data that's cheap to store and fast to query. Counters go up, gauges go up and down, and histograms give you distribution buckets. Combine them with alerting rules, and you've got a system that wakes you up before your users start complaining on social media. Tools like Prometheus have made metrics collection almost effortless — just expose an endpoint and let the scraper do its thing.

**Why it matters:** Metrics are the numbers that determine whether you sleep peacefully or get paged at 3 AM. They power your SLIs, feed your dashboards, and form the quantitative backbone of observability. Without metrics, you're just vibes-based monitoring.
