---
title: Prometheus
slug: prometheus
description: "An open-source monitoring and alerting toolkit designed for reliability and scalability in cloud-native environments."
relatedTerms:
  - grafana
  - observability
tags:
  - monitoring
  - metrics
  - alerting
category: tool
dateAdded: 2024-01-01
---

The monitoring system that watches your systems so you don't have to (but you still will, at 3 AM). Prometheus is a time-series database and monitoring toolkit that scrapes metrics from your services at regular intervals.

It uses a powerful query language called PromQL that's somewhere between SQL and arcane incantations. Once you master it, you can slice and dice your metrics in ways that make dashboards actually useful.

**Why it matters:** Prometheus is the de facto standard for Kubernetes monitoring. If your cluster isn't being scraped by Prometheus, does it even exist?
