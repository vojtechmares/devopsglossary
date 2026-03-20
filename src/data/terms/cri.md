---
title: Container Runtime Interface
slug: cri
abbreviation: CRI
description: "A Kubernetes plugin interface that defines how the kubelet communicates with container runtimes to manage pod and container lifecycle."
relatedTerms:
  - kubernetes
  - containerd
  - oci
tags:
  - containers
  - kubernetes
  - runtime
category: concept
dateAdded: 2026-03-20
---

CRI is the API contract between Kubernetes and whatever actually runs your containers. Before CRI existed, Kubernetes had Docker support hardcoded into the kubelet, which was fine until people wanted to use other runtimes. Rather than writing custom integrations for every container runtime that came along, the Kubernetes team did the smart thing and defined a standard interface. Now any runtime that implements CRI can plug into Kubernetes, and the kubelet doesn't need to know or care about the implementation details.

The interface is defined as a gRPC API with two services: RuntimeService (for managing pods and containers -- create, start, stop, remove) and ImageService (for pulling, inspecting, and removing container images). containerd and CRI-O are the two most popular CRI implementations. When Kubernetes famously "deprecated Docker," what actually happened was the removal of dockershim -- the adapter that made Docker look like a CRI-compatible runtime. Docker itself was never CRI-compliant; it needed a translation layer, and maintaining that layer wasn't worth the effort when containerd could be used directly.

**Why it matters:** CRI is what makes Kubernetes runtime-agnostic. It ensures that the container orchestration layer and the container execution layer are cleanly separated, letting teams choose the runtime that best fits their security, performance, and operational requirements. It's a textbook example of good interface design -- abstracting away implementation details so that the ecosystem can evolve independently.
