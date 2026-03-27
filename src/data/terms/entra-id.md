---
title: Entra ID
slug: entra-id
description: "Microsoft's cloud-based identity and access management service, formerly known as Azure Active Directory."
relatedTerms:
  - oauth2
  - oidc
  - azure
  - scim
tags:
  - identity
  - microsoft
  - cloud
  - iam
category: platform
dateAdded: 2026-03-22
---

Entra ID is Microsoft's cloud identity platform — the thing formerly known as Azure Active Directory (Azure AD), renamed in 2023 because apparently "Active Directory" wasn't already confusing enough for people who kept mixing it up with on-prem AD. By any other name, it still manages your corporate identity. It handles single sign-on, multi-factor authentication, conditional access policies, and identity governance for organizations living in the Microsoft ecosystem. If your company uses Microsoft 365, congratulations — you're already an Entra ID customer whether you knew it or not.

Under the hood, Entra ID supports all the standard identity protocols: OIDC, SAML, SCIM for provisioning, and OAuth2 for API authorization. It integrates deeply with Azure services and Microsoft 365, but also plays reasonably well with third-party apps. Conditional access policies let you build rules like "allow access only from managed devices in approved locations during business hours," which is either smart security or workplace surveillance depending on your perspective. The platform also includes identity protection features that use machine learning to detect suspicious sign-ins — like someone logging in from two continents within five minutes.

**Why it matters:** Entra ID is the identity backbone for most enterprises running Microsoft workloads. With hybrid identity, B2B collaboration, and a sprawling feature set, it's where corporate identity lives for a significant chunk of the Fortune 500 — and renaming it won't change that any time soon.
