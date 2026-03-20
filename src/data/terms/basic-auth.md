---
title: Basic Auth
slug: basic-auth
description: "HTTP Basic Authentication sends a Base64-encoded username and password with each request. Simple but insecure without TLS."
relatedTerms:
  - http
  - oauth2
  - bearer-token
  - tls
tags:
  - security
  - authentication
  - http
category: concept
dateAdded: 2026-03-20
---

The "username and password taped to the monitor" of authentication methods, but for HTTP. Basic Auth works by concatenating a username and password with a colon, Base64-encoding the result, and slapping it into an `Authorization` header. It's not encryption — Base64 is about as secure as writing your password in pig Latin. Without TLS, you're essentially shouting your credentials across the internet.

Despite its obvious shortcomings, Basic Auth refuses to die. It shows up in internal APIs, quick prototypes, and legacy systems that have been running since before OAuth was a thing. It's dead simple to implement, universally supported, and gets the job done when all you need is a minimal gate and you're already running HTTPS. Just please, for the love of all things sacred, never use it over plain HTTP.

**Why it matters:** Basic Auth is a reminder that security is a spectrum. Understanding its limitations teaches you why modern protocols like OAuth2 and OIDC exist — and why TLS isn't optional, it's the bare minimum.
