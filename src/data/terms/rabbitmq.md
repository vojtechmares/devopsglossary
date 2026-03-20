---
title: RabbitMQ
slug: rabbitmq
description: "A reliable open-source message broker supporting multiple messaging protocols like AMQP."
relatedTerms:
  - apache-kafka
  - message-broker
  - messaging
tags:
  - messaging
  - queue
  - amqp
category: tool
dateAdded: 2026-03-20
---

RabbitMQ is the message broker that just works — the dependable workhorse of asynchronous communication that's been shuttling messages between services since 2007. Built in Erlang (a language designed for telecom-grade reliability), it implements the AMQP protocol and offers a buffet of messaging patterns: direct queues, fan-out exchanges, topic routing, and more. If your services need to talk to each other without waiting around, RabbitMQ is the postal service that never loses a letter.

What sets RabbitMQ apart is its routing flexibility. Messages flow through exchanges that decide which queues get which messages based on routing keys and binding patterns. Need one message delivered to exactly one consumer? Direct exchange. Need it broadcast to every subscriber? Fan-out. Need pattern-based routing? Topic exchange. It also supports message acknowledgments, dead-letter queues for failed messages, and a management UI that actually makes sense — a rarity in infrastructure tooling.

**Why it matters:** RabbitMQ excels at traditional message queuing where you need reliable delivery, flexible routing, and per-message acknowledgment. While Kafka dominates the event streaming world, RabbitMQ remains the go-to for task queues, RPC patterns, and scenarios where message routing logic matters more than raw throughput.
