---
title: Cache
slug: cache
description: "A temporary high-speed data storage layer that reduces latency by serving frequently accessed data."
relatedTerms:
  - database
tags:
  - performance
  - storage
  - optimization
category: concept
dateAdded: 2026-03-20
---

A cache is the art of remembering answers so you don't have to compute them again — the "sticky note on your monitor" of computer science. Instead of hitting your database for the same query a thousand times per second, you store the result in a faster storage layer (usually memory) and serve it from there. It's one of the oldest tricks in computing, and it works everywhere: CPU caches, browser caches, CDN caches, application caches, and that one coworker who memorizes every DNS entry.

The tricky part isn't caching — it's *invalidation*. As Phil Karlton famously said, "There are only two hard things in computer science: cache invalidation and naming things." Serve stale data and your users see yesterday's prices. Invalidate too aggressively and you're back to hammering the database. Strategies like TTL (time-to-live), write-through, write-behind, and cache-aside patterns each make different tradeoffs between freshness and performance. Tools like Redis and Memcached have made in-memory caching accessible, but the fundamental challenge remains: knowing when your cached answer is still the right answer.

**Why it matters:** Caching is often the difference between a snappy application and one that makes users wonder if they're still on dial-up. It's the single most effective performance optimization in most systems — when done right. When done wrong, it's the single most effective way to serve your users confidently incorrect data.
