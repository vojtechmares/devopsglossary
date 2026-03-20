---
title: Logs
slug: logs
description: "Recorded events and messages from applications and systems, providing a trail of what happened and when."
relatedTerms:
  - observability
  - metrics
  - traces
  - opentelemetry
tags:
  - observability
  - debugging
  - monitoring
category: concept
dateAdded: 2026-03-20
---

Logs are the breadcrumbs your applications leave behind — timestamped records of events that tell the story of what happened, when it happened, and sometimes why everything fell apart at 2 AM. They range from friendly `INFO: Server started on port 8080` messages to the dreaded `ERROR: unhandled exception` walls of text that make your heart skip a beat.

Structured logging has become the gold standard, where instead of dumping free-form text into a file and hoping for the best, you emit JSON or key-value pairs that machines can actually parse. This makes searching through millions of log lines less like archaeology and more like running a database query. Pair them with a centralized logging platform, and suddenly you can correlate events across dozens of services without SSH-ing into each box individually.

**Why it matters:** Logs are your first line of defense when debugging production issues. Without them, you're flying blind — guessing what went wrong instead of knowing. They're one of the three pillars of observability, and arguably the one engineers reach for first when things go sideways.
