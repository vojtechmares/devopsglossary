---
title: eBPF
slug: ebpf
abbreviation: eBPF
description: "A Linux kernel technology that lets you run sandboxed programs in the kernel without changing kernel code or loading modules."
relatedTerms:
  - linux
  - cni
  - observability
tags:
  - linux
  - networking
  - observability
category: concept
dateAdded: 2026-03-20
---

eBPF is like giving developers a programmable hook into the Linux kernel without the terrifying risk of writing actual kernel code. Originally designed for packet filtering (the "BPF" stands for Berkeley Packet Filter), it evolved into a general-purpose in-kernel virtual machine that can run custom programs triggered by system events — network packets, system calls, function entries, you name it. All sandboxed, verified for safety, and running at near-native speed.

The impact on the cloud-native world has been massive. Cilium uses eBPF to replace iptables with blazing-fast, programmable networking. Tools like Falco and Tetragon leverage it for runtime security monitoring. Observability platforms tap into eBPF for zero-instrumentation tracing that would make traditional APM agents jealous. It's the technology that made kernel-level superpowers accessible to mere mortals.

**Why it matters:** eBPF is fundamentally changing how we approach networking, security, and observability in Linux environments. It enables capabilities that were previously impossible without kernel modifications, delivering better performance and deeper visibility with less overhead than traditional approaches.
