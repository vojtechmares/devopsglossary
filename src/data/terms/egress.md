---
title: Egress
slug: egress
description: "Outbound network traffic leaving a cluster, network, or security boundary toward external destinations."
relatedTerms:
  - ingress
  - egress-gateway
tags:
  - networking
  - security
  - traffic
category: concept
dateAdded: 2026-03-20
---

Egress is the flip side of ingress — it's all the traffic leaving your network or cluster headed for the outside world. Every time your app calls a third-party API, pulls a container image, or phones home to a SaaS analytics service, that's egress traffic. It sounds simple enough, but egress is where security teams lose sleep because uncontrolled outbound traffic is basically an open invitation for data exfiltration.

In cloud environments, egress is also the line item on your bill that makes you do a double take. Cloud providers love to charge for data leaving their networks, turning every API call and log export into a tiny toll. Controlling egress with network policies, firewalls, or egress gateways isn't just a security practice — it's also a cost management strategy.

**Why it matters:** Unrestricted egress means any compromised workload can freely communicate with the outside world. Controlling and monitoring outbound traffic is a fundamental security practice that also helps manage cloud costs and enforce compliance requirements.
