---
title: Message Broker
slug: message-broker
description: "Middleware that routes, transforms, and delivers messages between distributed services."
relatedTerms:
  - apache-kafka
  - rabbitmq
  - messaging
  - microservices
tags:
  - messaging
  - middleware
  - integration
category: concept
dateAdded: 2026-03-20
---

A message broker is the post office of your distributed system — it accepts messages from senders, figures out where they need to go, and makes sure they get there. Instead of services needing to know each other's addresses and availability, they just hand messages to the broker and trust it to handle delivery. This decoupling is what lets you add, remove, or update services without rewriting half your architecture every time.

Message brokers do more than just pass envelopes around. They can queue messages when consumers are busy, route them based on content or topic, transform formats between incompatible systems, and guarantee delivery even when things crash. Some brokers like RabbitMQ focus on smart routing with exchanges and bindings, while others like Apache Kafka act more like distributed logs that let consumers replay history. The right choice depends on whether you need traditional queuing semantics or event streaming capabilities — or sometimes both.

**Why it matters:** Message brokers are the unsung heroes of scalable architectures. They absorb traffic spikes, prevent cascading failures, and let teams deploy services independently. Without them, your microservices would need to know about each other directly, turning your elegant distributed system into a tangled mess of point-to-point connections.
