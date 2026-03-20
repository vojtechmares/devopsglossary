---
title: Apache Cassandra
slug: cassandra
description: "A distributed NoSQL database built for high availability and massive scalability across data centers."
relatedTerms:
  - nosql-databases
  - database
  - mongodb
tags:
  - database
  - nosql
  - distributed-systems
category: tool
dateAdded: 2026-03-20
---

Cassandra is the database you reach for when "just add more RAM" stops being an answer. Originally built at Facebook to power inbox search, then open-sourced through Apache, it's a wide-column NoSQL store designed to handle enormous write throughput across multiple data centers without breaking a sweat — or having a single point of failure. Every node is equal, there's no master, and the cluster keeps humming even when nodes go down.

The catch? Cassandra makes you think about your data model *before* you start writing queries, which is the exact opposite of what most developers want to do. There are no joins, limited aggregation, and your queries must align with your partition keys or you'll get performance that makes a carrier pigeon look fast. It's a database that rewards careful planning and punishes the "I'll figure out the schema later" crowd with ruthless efficiency.

**Why it matters:** When you need to write millions of events per second across geographically distributed clusters with guaranteed uptime, Cassandra is one of the few databases that can actually deliver. Just be prepared to invest in understanding its data modeling philosophy — it's not hard, but it is different.
