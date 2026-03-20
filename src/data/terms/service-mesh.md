---
title: Service Mesh
slug: service-mesh
description: "A dedicated infrastructure layer for managing service-to-service communication, providing observability, security, and reliability."
relatedTerms:
  - microservices
  - kubernetes
tags:
  - networking
  - infrastructure
  - istio
category: concept
dateAdded: 2026-03-20
---

When your microservices need a therapist to help them communicate. A service mesh is a dedicated infrastructure layer that handles service-to-service communication — traffic management, load balancing, encryption, observability, and fault tolerance.

Instead of building retry logic, circuit breakers, and mTLS into every service, the mesh handles it transparently via sidecar proxies. Popular options include Istio (powerful but complex) and Linkerd (simpler but lighter).

**Why it matters:** As your microservices grow, so does the networking complexity. A service mesh extracts that complexity into infrastructure so your developers can focus on business logic.
