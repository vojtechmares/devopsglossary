---
title: Service Level Agreement
slug: sla
abbreviation: SLA
description: "A formal contract between a service provider and customer defining expected service levels and consequences."
relatedTerms:
  - slo
  - sli
  - sre
  - oncall
tags:
  - reliability
  - business
  - contracts
category: concept
dateAdded: 2026-03-20
---

An SLA is the legally binding promise that says "our service will be this reliable, and if it isn't, here's what we owe you." It's where engineering reliability meets business contracts — the document that turns uptime percentages into financial consequences. When your cloud provider offers 99.99% availability, the SLA is what entitles you to service credits when they inevitably have that one really bad day.

SLAs sit at the top of the reliability pyramid. Underneath them, SLOs define the internal targets your team actually aims for (usually stricter than the SLA), and SLIs provide the actual measurements. Smart organizations set their SLOs tighter than their SLAs, creating a buffer zone — an error budget — that lets them catch problems before they become contract violations. The worst thing that can happen isn't breaking an SLO; it's breaching an SLA and having the finance team knocking on your door.

**Why it matters:** SLAs translate technical reliability into business accountability. They set clear expectations with customers, define what "good enough" looks like in contractual terms, and ensure that when things break, there's a structured response rather than finger-pointing. They're the reason reliability isn't just an engineering goal — it's a business obligation.
