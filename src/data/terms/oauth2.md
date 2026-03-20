---
title: OAuth 2.0
slug: oauth2
abbreviation: OAuth2
description: "An authorization framework that lets third-party apps access resources on behalf of a user without exposing their credentials."
relatedTerms:
  - oidc
  - jwt
  - bearer-token
  - api
tags:
  - security
  - authorization
  - identity
category: concept
dateAdded: 2026-03-20
---

The protocol that lets you grant a third-party app access to your stuff without giving it your password — like handing someone a valet key instead of your entire keychain. OAuth2 defines flows for different scenarios: authorization code for web apps, client credentials for service-to-service, and the implicit flow that everyone pretends doesn't exist anymore. It's the reason "Connect with GitHub" buttons exist without requiring you to trust random apps with your credentials.

The spec is deliberately flexible, which is both its greatest strength and the source of endless confusion. There are access tokens, refresh tokens, scopes, grants, and enough RFCs to fill a small library. Every implementation is slightly different, and the security considerations could be their own university course. But when done right, OAuth2 elegantly solves the problem of delegated authorization across the internet.

**Why it matters:** OAuth2 is the foundation of modern API security and the reason you can safely connect apps and services without sharing passwords. Paired with OIDC for identity, it powers the authentication and authorization flows of virtually every web and mobile application.
