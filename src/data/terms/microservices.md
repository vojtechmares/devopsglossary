---
title: Microservices
slug: microservices
description: "An architectural style where applications are built as a collection of small, independent services communicating over APIs."
relatedTerms:
  - kubernetes
  - container
  - service-mesh
tags:
  - architecture
  - distributed-systems
category: methodology
dateAdded: 2026-03-20
---

The architectural pattern where you trade one big problem for fifty small ones that talk to each other over the network. Microservices break a monolithic application into independent services, each owning its own data and deploying independently.

In theory: independent scaling, technology freedom, team autonomy. In practice: distributed debugging, network latency, eventual consistency, and the existential question of "how micro is micro?"

**Why it matters:** Microservices enable large teams to ship faster by reducing coordination costs. But they're not free — you're trading code complexity for operational complexity.
