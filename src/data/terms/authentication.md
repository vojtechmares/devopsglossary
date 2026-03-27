---
title: Authentication
slug: authentication
abbreviation: AuthN
description: "The process of verifying that a user or system is who they claim to be, typically through credentials like passwords or tokens."
relatedTerms:
  - oauth2
  - oidc
  - jwt
  - basic-auth
tags:
  - security
  - identity
  - access-control
category: concept
dateAdded: 2026-03-22
---

Authentication is the bouncer checking your ID at the door — it answers the fundamental question of "who are you?" before anything else happens. Whether it's a password, a fingerprint, a hardware key, or a six-digit code from an authenticator app, AuthN is the process of proving you are who you claim to be. It's distinct from authorization (AuthZ), which determines what you're allowed to do once you're inside. Common protocols like OIDC and SAML handle the heavy lifting, so you don't have to roll your own "verify password" logic and inevitably get it wrong.

Modern authentication has evolved well beyond the humble username-and-password combo. Multi-factor authentication (MFA) layers something you know with something you have or something you are, making life significantly harder for attackers who phished your credentials. Passwordless flows, passkeys, and certificate-based authentication are pushing us toward a future where passwords might finally die — though they've been "dying" for about two decades now, so don't hold your breath.

**Why it matters:** Authentication is the first line of defense. Get it wrong, and nothing else matters — your authorization rules, your encryption, your audit logs are all protecting an unlocked door. Every security incident post-mortem that starts with "the attacker obtained valid credentials" is an authentication story.
