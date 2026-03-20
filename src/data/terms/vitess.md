---
title: Vitess
slug: vitess
description: "A database clustering system for horizontal scaling of MySQL, originally built at YouTube and now a CNCF graduated project."
relatedTerms:
  - mysql
  - database
  - kubernetes
tags:
  - databases
  - scaling
  - cloud-native
category: tool
dateAdded: 2026-03-20
---

Vitess is what happens when YouTube's MySQL infrastructure hits a wall and a team of engineers decides to build a sharding and clustering layer instead of migrating to a different database. It sits between your application and MySQL, transparently routing queries to the right shard, managing connection pooling, and handling schema migrations across a fleet of database instances — all while keeping the MySQL protocol your application already speaks.

The key insight behind Vitess is that MySQL is great at being a single-node database, but terrible at being a distributed one. Vitess fills that gap. It handles horizontal sharding so you can spread data across hundreds of MySQL instances, provides built-in connection pooling that prevents your database from drowning in connections, and offers a vtgate proxy layer that makes your sharded cluster look like a single database to your application. It's a CNCF graduated project with production deployments at Slack, GitHub, and Square — organizations that need MySQL-scale without MySQL-limits.

**Why it matters:** When your MySQL instance starts sweating under load, Vitess lets you scale horizontally without rewriting your application or migrating to an entirely different database. It's the path of least resistance for teams already invested in the MySQL ecosystem that need to grow beyond a single node.
