---
title: Bearer Token
slug: bearer-token
description: "An access token sent in HTTP headers that grants the bearer access to protected resources without additional proof."
relatedTerms:
  - jwt
  - oauth2
  - basic-auth
  - api
tags:
  - security
  - authentication
  - api
category: concept
dateAdded: 2026-03-20
---

The "whoever holds this token may pass" approach to API authentication. A bearer token is an opaque or structured credential that you stick in the `Authorization: Bearer <token>` header, and the server trusts whoever presents it — no questions asked. It's like a concert wristband: the bouncer doesn't care who you are, only that you're wearing one. This simplicity is both its elegance and its Achilles' heel.

Bearer tokens are the standard mechanism in OAuth2 flows. After the authorization dance, you get an access token that you send with every API request. The token might be a JWT with embedded claims or an opaque string that the server looks up in a database. Either way, if someone intercepts it, they can use it. That's why TLS is non-negotiable, token lifetimes should be short, and refresh tokens exist to get new ones without re-authenticating.

**Why it matters:** Bearer tokens are the most common way to authenticate API requests in modern applications. Understanding their security model — especially that possession equals access — is critical for building systems that don't leak credentials and don't leave tokens lying around in browser storage or server logs.
