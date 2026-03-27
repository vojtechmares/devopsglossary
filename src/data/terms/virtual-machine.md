---
title: Virtual Machine
slug: virtual-machine
abbreviation: VM
description: "A software-based emulation of a physical computer that runs its own OS and applications in an isolated environment."
relatedTerms:
  - docker
  - linux
  - kubernetes
  - container
tags:
  - virtualization
  - infrastructure
  - cloud
category: concept
dateAdded: 2026-03-22
---

A Virtual Machine is a complete computer — OS, kernel, drivers, and all — running as software on top of a hypervisor. VMware, KVM, Hyper-V, and Xen carve physical servers into multiple isolated VMs, each blissfully unaware it's sharing hardware with a dozen neighbors. VMs were the original cloud building block before containers showed up and made everything feel bloated by comparison.

Heavier than containers (you're running a full OS per instance) but offering stronger isolation and broader compatibility. Containers are the cool kids now, but VMs are the reliable parent who still pays the cloud bills. Every EC2 instance, every GCE VM, every Azure virtual machine — it's VMs all the way down. You can even run containers inside VMs inside physical servers, because apparently we love nesting things.

**Why it matters:** Virtual machines are the foundation of cloud computing. AWS, Azure, and GCP are fundamentally VM rental businesses with fancy dashboards and impressive marketing budgets. Understanding VMs is understanding how the cloud actually works.