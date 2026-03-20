---
title: Continuous Deployment
slug: continuous-deployment
description: "A practice where every code change that passes automated tests is automatically released to production without manual intervention."
relatedTerms:
  - ci-cd
  - continuous-delivery
  - gitops
tags:
  - deployment
  - automation
  - ci-cd
category: practice
dateAdded: 2026-03-20
---

Continuous Delivery's more adventurous sibling who removed the safety net and said "if the tests pass, ship it." Continuous Deployment takes every change that survives your CI pipeline and pushes it straight to production without a human in the loop. It's the ultimate expression of trust in your automated testing -- or, depending on your perspective, the ultimate expression of overconfidence.

This practice demands an exceptional testing culture. Your unit tests, integration tests, end-to-end tests, canary deployments, and feature flags all need to be rock solid, because there's no one sitting there going "hmm, maybe we shouldn't deploy the intern's first PR on a Friday afternoon." The pipeline doesn't know what day it is, and it doesn't care. Merge to main, tests pass, congratulations -- you're in production.

**Why it matters:** Teams practicing Continuous Deployment can ship dozens or even hundreds of changes per day, each one small and easy to roll back. This sounds terrifying until you realize that deploying one small change is infinitely less risky than deploying three months of accumulated changes in a "big bang" release. Small batches, fast feedback, fewer incidents at 3 AM.
