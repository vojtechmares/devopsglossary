---
title: Apache Kafka
slug: apache-kafka
description: "A distributed event streaming platform for high-throughput, real-time data pipelines and streaming."
relatedTerms:
  - rabbitmq
  - message-broker
  - stream
  - messaging
tags:
  - streaming
  - messaging
  - distributed-systems
category: tool
dateAdded: 2026-03-20
---

Apache Kafka is what happens when LinkedIn engineers get tired of databases not keeping up with firehose-volume data and decide to build their own thing. Originally created to handle LinkedIn's activity stream data, Kafka is a distributed event streaming platform that lets you publish, subscribe to, store, and process streams of events in real time. It's not just a message queue — it's a distributed commit log that keeps an ordered, immutable record of everything that happened, like a flight recorder for your entire architecture.

Kafka's superpower is throughput. It can handle millions of messages per second while keeping them durably stored across a cluster of brokers. Producers write events to topics, consumers read them at their own pace, and consumer groups let you scale processing horizontally. With Kafka Streams and ksqlDB, you can even process and transform data in flight without needing a separate processing framework. The ecosystem has grown to include Kafka Connect for integrations and Schema Registry for keeping your data contracts sane.

**Why it matters:** Kafka has become the backbone of event-driven architectures at companies of all sizes. When you need to decouple services, build real-time analytics pipelines, or implement event sourcing, Kafka is often the first name on the whiteboard — and for good reason.
