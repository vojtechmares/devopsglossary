---
title: Container Storage Interface
slug: csi
abbreviation: CSI
description: "A standard interface that enables container orchestrators to manage and provision storage from any compatible backend."
relatedTerms:
  - kubernetes
  - cni
  - ceph
tags:
  - storage
  - kubernetes
  - containers
category: concept
dateAdded: 2026-03-20
---

CSI is the universal adapter between Kubernetes and the bewildering universe of storage systems. Before CSI, every storage provider had to write their own volume plugin directly in the Kubernetes codebase, which scaled about as well as a monolith at a startup that just went viral. CSI defined a clean, standardized interface so storage vendors could build their own drivers as independent components, and Kubernetes could consume them without caring about the implementation details.

With CSI, your cluster can dynamically provision volumes from AWS EBS, Google Persistent Disks, Ceph, NetApp, or that mysterious NFS server your predecessor set up and nobody dares touch. The interface handles the full lifecycle — creating, attaching, mounting, snapshotting, and deleting volumes — all through a consistent API. It's the reason you can write a PersistentVolumeClaim in YAML and have actual storage appear like magic.

**Why it matters:** CSI decouples storage from the container orchestrator, letting teams choose the best storage backend for their workloads without being locked into a specific platform. It's the standard that turned Kubernetes storage from a painful integration exercise into a pluggable, vendor-neutral experience.
