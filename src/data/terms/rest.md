---
title: Representational State Transfer
slug: rest
abbreviation: REST
description: "An architectural style for designing networked applications using stateless HTTP methods and resource-based URLs."
relatedTerms:
  - api
  - http
  - json
  - graphql
  - openapi
tags:
  - api
  - architecture
  - http
category: concept
dateAdded: 2026-03-20
---

The architectural style that turned HTTP verbs into a way of life. REST says: everything is a resource, give it a URL, and use GET, POST, PUT, and DELETE to interact with it. It's stateless, meaning every request carries all the information the server needs — no memory of past conversations, like that coworker who asks you to re-explain the project every Monday morning. Simple, predictable, and just opinionated enough to keep things sane.

REST became the dominant API paradigm because it rides on top of HTTP, which means it works with every language, every framework, and every browser out of the box. No special protocols, no binary encoding nightmares — just URLs and JSON. Of course, "RESTful" has become one of the most liberally applied labels in tech. If your API uses HTTP and returns JSON, someone will call it RESTful, even if Roy Fielding himself would weep looking at it. True REST involves hypermedia, HATEOAS, and other concepts that most teams quietly ignore.

**Why it matters:** REST provides a simple, widely understood convention for building APIs that are easy to consume, test, and debug. It's the common language that lets your frontend, backend, mobile apps, and third-party integrations all play nicely together.
