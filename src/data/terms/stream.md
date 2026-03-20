---
title: Stream
slug: stream
description: "A continuous, ordered flow of data or events processed incrementally in real time."
relatedTerms:
  - apache-kafka
  - sse
  - messaging
tags:
  - streaming
  - real-time
  - data
category: concept
dateAdded: 2026-03-20
---

A stream is data that arrives continuously rather than in one big lump — think of it as the difference between receiving a letter and listening to a radio broadcast. Instead of querying for a batch of results, you subscribe to a flow of events and process each one as it shows up. Click events, sensor readings, log entries, stock prices, chat messages — if it's data that keeps coming and you want to react to it in real time, you're dealing with a stream.

Stream processing flips the traditional database model on its head. Instead of storing data first and querying it later, you process events as they flow through your system. Tools like Apache Kafka, Apache Flink, and Kafka Streams let you filter, aggregate, join, and transform streams of events on the fly. You can detect fraud in real time, update dashboards as data arrives, or trigger alerts the moment something unusual happens — no batch job required, no waiting until midnight for the ETL to finish.

**Why it matters:** The world generates data continuously, and batch processing introduces lag that modern applications can't afford. Streams let you build systems that react to events as they happen, turning data from a historical record into a live conversation with your infrastructure.
