---
title: Service Level Objective
slug: slo
abbreviation: SLO
description: "A target value or range for a service level measured by an SLI, like 99.9% availability over 30 days."
relatedTerms:
  - sre
  - observability
tags:
  - reliability
  - sre
  - metrics
category: concept
dateAdded: 2024-01-01
---

The number that determines whether you sleep peacefully or get paged at 3 AM. An SLO (Service Level Objective) is a target for how well your service should perform — usually expressed as a percentage over a time window.

"99.9% of requests should complete in under 200ms over 30 days." That's an SLO. The difference between 99.9% and 99.99%? About 43 minutes of allowed downtime per month versus 4 minutes. Choose wisely.

**Why it matters:** SLOs turn vague reliability goals into measurable targets. They're the foundation of error budgets and the key to balancing reliability with feature development.
