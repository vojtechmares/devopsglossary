---
title: OpenID Connect
slug: oidc
abbreviation: OIDC
description: "An identity layer on top of OAuth 2.0 that lets applications verify user identity and obtain basic profile information."
relatedTerms:
  - oauth2
  - jwt
  - scim
tags:
  - security
  - authentication
  - identity
category: concept
dateAdded: 2026-03-20
---

The protocol that answers the question OAuth2 deliberately left open: "but who *is* this person?" OIDC sits on top of OAuth 2.0 and adds a standardized way to authenticate users and retrieve identity information. While OAuth2 handles authorization (what you can do), OIDC handles authentication (who you are). It gives you an ID token — a JWT containing user claims — so your application doesn't have to roll its own sketchy identity system.

OIDC is the reason you can click "Sign in with Google" on a random website without handing over your Google password. Identity providers like Google, Microsoft, and Okta implement OIDC, and your app just needs to trust the tokens they issue. It standardizes discovery endpoints, token formats, and user info claims, so you're not reinventing the identity wheel for every application.

**Why it matters:** OIDC turned federated identity from an enterprise nightmare (looking at you, SAML) into something developers can actually implement without losing their minds. It's the backbone of modern single sign-on and the reason you don't need a hundred different passwords.
