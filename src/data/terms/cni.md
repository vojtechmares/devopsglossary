---
title: Container Network Interface
slug: cni
abbreviation: CNI
description: "A specification and plugin framework that defines how container runtimes configure networking for containers."
relatedTerms:
  - kubernetes
  - csi
  - ebpf
tags:
  - networking
  - kubernetes
  - containers
category: concept
dateAdded: 2026-03-20
---

CNI is the glue between your container runtime and the networking layer — the specification that answers the question "how does this container actually get an IP address and talk to other containers?" It defines a simple plugin interface that container runtimes call when a container is created or destroyed, and the plugin handles all the networking plumbing: assigning IPs, setting up routes, configuring bridges, and generally making packets flow where they need to go.

The beauty of CNI is its pluggable architecture. Don't like the default networking? Swap in Calico for network policies, Cilium for eBPF-powered magic, or Flannel for something simple that just works. Each plugin brings its own superpowers and trade-offs, and choosing the right one is a rite of passage for every Kubernetes administrator. Just don't ask a room full of platform engineers which CNI is best unless you have several hours to spare.

**Why it matters:** CNI is the foundation of container networking in Kubernetes. Your choice of CNI plugin affects everything from network performance and security policies to observability and multi-cluster connectivity. Getting it right is invisible; getting it wrong means mysterious packet drops at 3 AM.
