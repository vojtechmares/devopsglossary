---
title: SCIM
slug: scim
abbreviation: SCIM
description: "A protocol for automating user identity provisioning and deprovisioning across multiple systems and services."
relatedTerms:
  - oidc
  - oauth2
tags:
  - security
  - identity
  - provisioning
category: concept
dateAdded: 2026-03-20
---

The unsung hero of identity management that saves IT teams from the soul-crushing task of manually creating and deleting user accounts across forty different SaaS tools. SCIM (System for Cross-domain Identity Management) is a standardized protocol for automatically syncing user data between an identity provider and all the applications your organization uses. Someone joins the company? SCIM provisions their accounts everywhere. Someone leaves? SCIM nukes them all. No more forgotten Jira accounts haunting the org chart.

SCIM works over REST APIs with a well-defined schema for users and groups. Your identity provider (like Okta or Azure AD) pushes create, update, and delete operations to every app that supports SCIM. It's not glamorous work — nobody writes blog posts about their elegant SCIM integration — but it's the difference between onboarding taking five minutes and taking three days of IT tickets.

**Why it matters:** SCIM automates the user lifecycle across your entire tool stack, reducing security risks from orphaned accounts and saving IT teams from repetitive manual work. In a world where companies use dozens of SaaS products, automated provisioning isn't a luxury — it's a necessity.
