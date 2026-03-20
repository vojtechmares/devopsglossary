---
title: WebAssembly System Interface
slug: wasi
abbreviation: WASI
description: "A standardized system interface that lets WebAssembly modules securely access OS-level resources like files and networking."
relatedTerms:
  - wasm
  - container
tags:
  - runtime
  - wasm
  - portability
category: concept
dateAdded: 2026-03-20
---

WASI is what happens when WebAssembly wants to grow up and do real things beyond the browser. By itself, a WASM module is sandboxed so tightly it can't even read a file or open a network socket. WASI provides a standardized set of system interfaces — file I/O, clocks, random number generation, networking — that WASM modules can call through a capability-based security model. You explicitly grant access to specific directories or resources, and the module can only use what you've allowed. It's like giving your code a hall pass instead of the master key.

The famous quote from Docker co-founder Solomon Hykes sums it up: "If WASM+WASI existed in 2008, we wouldn't have needed to create Docker." That's hyperbole, but it captures the vision — WASI could enable truly portable, lightweight, secure workloads that run identically everywhere without the overhead of a container runtime. The standard is still evolving, with WASI Preview 2 introducing a component model that lets modules compose together like building blocks.

**Why it matters:** WASI is the missing piece that transforms WebAssembly from a browser technology into a general-purpose compute platform. Its capability-based security model offers finer-grained access control than containers, and its portability story is genuinely compelling for edge, serverless, and plugin architectures.
