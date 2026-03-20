---
title: OpenAPI Specification
slug: openapi
description: "A standard, language-agnostic specification for describing RESTful APIs in a machine-readable format."
relatedTerms:
  - api
  - rest
  - swagger
  - json
  - yaml
tags:
  - api
  - documentation
  - specification
category: concept
dateAdded: 2026-03-20
---

The formal contract that tells everyone — humans and machines alike — exactly what your REST API can do, what it expects, and what it'll give back. OpenAPI specs are typically written in YAML or JSON and describe endpoints, request/response schemas, authentication methods, and more. It's like a blueprint for your API that's so precise even a code generator can read it and spit out a working client library before you've finished your morning standup.

Born from the ashes of Swagger (which donated its specification to the Linux Foundation and got rebranded), OpenAPI has become the industry standard for API documentation. Tools like Swagger UI, Redoc, and countless code generators all speak OpenAPI fluently. Write your spec first and you get documentation, client SDKs, server stubs, and validation — all from a single source of truth. It's the rare case where writing documentation actually saves you time.

**Why it matters:** OpenAPI turns your API documentation from an afterthought into a first-class engineering artifact. It enables contract-first development, automated testing, and seamless collaboration between teams who produce and consume APIs.
