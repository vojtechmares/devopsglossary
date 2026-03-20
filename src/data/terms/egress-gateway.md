---
title: Egress Gateway
slug: egress-gateway
description: "A dedicated, controlled exit point that routes and monitors all outbound traffic from a cluster or service mesh."
relatedTerms:
  - egress
  - service-mesh
  - gateway
  - ingress
tags:
  - networking
  - security
  - service-mesh
category: concept
dateAdded: 2026-03-20
---

An egress gateway is the security checkpoint at the exit of your network. Instead of letting every pod freely reach out to the internet like unsupervised toddlers in a candy store, an egress gateway funnels all outbound traffic through a single controlled point. This gives you one place to enforce policies, log connections, and restrict which external services your workloads can actually talk to.

In service mesh architectures like Istio, egress gateways are first-class citizens. They let you define fine-grained rules about which services can communicate with which external endpoints, apply mutual TLS to outbound connections, and give your security team the audit trail they've been begging for. Without one, your network policies are basically "hope for the best."

**Why it matters:** Egress gateways turn the wild west of outbound traffic into a governed, observable flow. They're essential for organizations with compliance requirements, zero-trust ambitions, or anyone who's ever had to explain to auditors exactly what their pods are connecting to.
