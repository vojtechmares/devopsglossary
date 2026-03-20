---
title: WebAssembly
slug: wasm
abbreviation: WASM
description: "A portable, high-performance binary instruction format designed as a compilation target for multiple programming languages."
relatedTerms:
  - wasi
tags:
  - runtime
  - performance
  - portability
category: concept
dateAdded: 2026-03-20
---

WebAssembly started as a way to run near-native-speed code in the browser, and then someone looked at it and said "wait, what if we ran this everywhere?" Originally designed so languages like C++, Rust, and Go could compile to a fast, safe binary format for web apps, WASM has escaped the browser and is now showing up in server-side runtimes, edge computing, plugin systems, and even as a potential alternative to containers. It's the "write once, run anywhere" promise that Java made, except this time with less XML.

WASM modules are sandboxed by default, start in milliseconds, and weigh in at kilobytes instead of the megabytes typical of container images. This makes them particularly interesting for edge computing and serverless workloads where cold start time and resource efficiency actually matter. The ecosystem is still maturing, but projects like Spin, Wasmtime, and WasmEdge are pushing hard to make WASM a first-class citizen outside the browser.

**Why it matters:** WebAssembly offers a lightweight, secure, and truly portable execution format that could reshape how we think about deploying workloads. Whether it complements or competes with containers, WASM's speed, safety, and tiny footprint make it one of the most exciting runtime technologies on the horizon.
