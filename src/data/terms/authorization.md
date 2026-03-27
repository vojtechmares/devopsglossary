---
title: Authorization
slug: authorization
abbreviation: AuthZ
description: "The process of determining what actions or resources an authenticated user or system is permitted to access."
relatedTerms:
  - oauth2
  - oidc
  - jwt
tags:
  - security
  - identity
  - access-control
category: concept
dateAdded: 2026-03-22
---

If authentication is the bouncer checking your ID, authorization is the VIP list that determines whether you get into the main room, the backstage area, or the broom closet. AuthZ kicks in after you've proven who you are and decides what you're actually allowed to do. Can you read this file? Can you delete that database? Can you deploy to production at 4:59 PM on a Friday? (The answer to that last one should always be no, but authorization can't fix bad judgment.)

The patterns for implementing authorization are a alphabet soup of acronyms: RBAC (role-based access control) assigns permissions to roles, ABAC (attribute-based access control) evaluates policies against attributes, and tools like Open Policy Agent (OPA) let you write authorization logic as code. ACLs, permission boundaries, conditional policies — there's no shortage of ways to express "you can do this but not that." The trick is picking the right model for your system and not ending up with a tangled mess of overlapping rules that nobody understands.

**Why it matters:** Proper authorization prevents privilege escalation and enforces least-privilege access. It's the difference between "logged in" and "has admin powers" — and that distinction is the only thing standing between a junior dev's typo and a production database wipe.
