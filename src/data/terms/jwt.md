---
title: JSON Web Token
slug: jwt
abbreviation: JWT
description: "A compact, URL-safe token format for securely transmitting claims between parties, commonly used for authentication."
relatedTerms:
  - oauth2
  - oidc
  - bearer-token
  - json
tags:
  - security
  - authentication
  - tokens
category: concept
dateAdded: 2026-03-20
---

Three Base64-encoded strings separated by dots that somehow became the backbone of modern authentication. A JWT (pronounced "jot" by the spec, "jay-double-you-tee" by everyone else) consists of a header, a payload full of claims, and a signature. It's a self-contained token — the server doesn't need to look anything up in a database because all the information is right there in the token itself. Stateless, portable, and dangerously easy to misuse.

The beauty of JWTs is that they can be verified without a database call — just check the signature against a known key. The danger is that people treat them like magic security pixie dust. They stuff sensitive data in the payload (it's encoded, not encrypted), set expiration times to "never," and wonder why their security audit went poorly. A JWT is only as secure as your key management and validation logic.

**Why it matters:** JWTs are everywhere — OIDC ID tokens, API authorization, service-to-service communication. Understanding how they work (and how they break) is essential for anyone building or securing modern applications. They're powerful when used correctly and a liability when used carelessly.
