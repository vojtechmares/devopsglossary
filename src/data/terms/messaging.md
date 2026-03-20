---
title: Messaging
slug: messaging
description: "A pattern for asynchronous communication between services using messages passed through intermediaries."
relatedTerms:
  - message-broker
  - apache-kafka
  - rabbitmq
  - microservices
tags:
  - distributed-systems
  - async
  - integration
category: concept
dateAdded: 2026-03-20
---

Messaging is how services talk to each other without the awkwardness of waiting on the line. Instead of Service A calling Service B directly and tapping its foot until it gets a response, it drops a message into a queue or topic and moves on with its life. Service B picks it up whenever it's ready — no blocking, no tight coupling, no cascading failures when someone's having a bad day. It's the "leave a voicemail" approach to distributed systems.

Messaging comes in several flavors. Point-to-point queuing ensures each message is processed by exactly one consumer — great for task distribution. Publish-subscribe (pub/sub) broadcasts messages to all interested subscribers — perfect for event notifications. Request-reply adds a response channel for when you do need an answer, just not synchronously. Protocols like AMQP, MQTT, and STOMP standardize how messages are formatted and delivered, while brokers like RabbitMQ and Kafka handle the heavy lifting of routing, persistence, and delivery guarantees.

**Why it matters:** Messaging is the glue that holds microservices architectures together without making them brittle. It enables services to evolve independently, handle traffic spikes gracefully, and recover from failures without taking down the entire system. If synchronous APIs are phone calls, messaging is email — and sometimes email is exactly what you need.
