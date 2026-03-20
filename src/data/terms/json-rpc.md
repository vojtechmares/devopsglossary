---
title: JSON-RPC
slug: json-rpc
description: "A lightweight, stateless RPC protocol that uses JSON for encoding requests and responses."
relatedTerms:
  - rpc
  - json
  - api
tags:
  - api
  - rpc
  - json
category: concept
dateAdded: 2026-03-20
---

The minimalist's RPC protocol. JSON-RPC strips remote procedure calls down to the bare essentials: send a JSON object with a method name, some parameters, and an ID; get back a JSON object with the result or an error. No service discovery, no schema negotiation, no elaborate handshake — just a method, params, and a prayer. It's so simple that the entire specification fits on a single webpage, which is either refreshing or terrifying depending on your perspective.

JSON-RPC comes in two flavors: 1.0 and 2.0, with the latter adding batch requests, named parameters, and a cleaner error format. You'll find it powering blockchain nodes (Ethereum's API is JSON-RPC), language server protocols (your IDE talks JSON-RPC to linters and autocompleters), and various internal tools where teams wanted something simpler than REST but didn't need the full ceremony of gRPC. It works over HTTP, WebSockets, TCP, or basically any transport that can carry text — it genuinely doesn't care.

**Why it matters:** JSON-RPC proves that not every API needs a complex framework. When you need a quick, standardized way to call remote functions without the overhead of REST resource modeling or gRPC's compilation step, JSON-RPC gets out of your way and lets you ship.
