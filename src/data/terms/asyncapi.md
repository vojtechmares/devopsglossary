---
title: AsyncAPI
slug: asyncapi
description: "A specification for defining and documenting event-driven and asynchronous APIs in a standardized way."
relatedTerms:
  - api
  - openapi
  - apache-kafka
  - rabbitmq
  - message-broker
tags:
  - api
  - async
  - specification
category: concept
dateAdded: 2026-03-20
---

If OpenAPI is the blueprint for request-response APIs, AsyncAPI is its event-driven sibling that finally brings order to the chaotic world of message brokers, WebSockets, and streaming protocols. It provides a standardized way to describe your asynchronous APIs — what channels exist, what messages flow through them, what format they're in, and who's publishing or subscribing. No more deciphering Kafka topics by reading three-year-old Slack threads.

AsyncAPI was born out of the realization that modern architectures don't just do request-response anymore. Microservices fire events, IoT devices stream telemetry, and real-time features push data to clients. All of that async communication deserved the same love that REST APIs got with OpenAPI. The spec supports protocols like AMQP, MQTT, Kafka, WebSockets, and more, giving you a single format to document the invisible rivers of data flowing through your system.

**Why it matters:** As event-driven architectures become the norm, AsyncAPI gives teams a shared language to describe, discover, and govern their async interfaces. It prevents the "nobody knows what messages this service produces" problem that plagues growing microservice ecosystems.
