---
title: Ingress
slug: ingress
description: "Inbound network traffic entering a cluster or network, or the Kubernetes resource that manages external access to services."
relatedTerms:
  - kubernetes
  - gateway
  - egress
  - service-mesh
tags:
  - networking
  - kubernetes
  - traffic
category: concept
dateAdded: 2026-03-20
---

Ingress is the front door to your cluster — the mechanism that takes traffic from the wild internet and routes it to the right service inside your Kubernetes cluster. In its simplest form, it's just a fancy word for "inbound traffic." In Kubernetes, it's a specific API resource that defines rules for HTTP routing, TLS termination, and virtual hosting, backed by an ingress controller that does the actual heavy lifting.

The Kubernetes ingress ecosystem is a choose-your-own-adventure story. NGINX Ingress Controller, Traefik, HAProxy, Envoy-based options — each with its own quirks, annotations, and ways to make you question your career choices when a regex path match doesn't behave as expected. The newer Gateway API aims to standardize things, but ingress resources remain deeply entrenched in most clusters.

**Why it matters:** Ingress is how the outside world reaches your applications. Getting it right means proper TLS, sensible routing, and security policies. Getting it wrong means either nobody can reach your app or, worse, everyone can reach everything.
