---
title: Continuous Delivery
slug: continuous-delivery
abbreviation: CD
description: "A practice where code changes are automatically built, tested, and prepared for release to production at any time."
relatedTerms:
  - ci-cd
  - continuous-deployment
  - gitops
tags:
  - delivery
  - automation
  - ci-cd
category: practice
dateAdded: 2026-03-20
---

The art of always being ready to ship, even if you choose not to. Continuous Delivery means that every commit that passes your automated tests and quality gates is a legitimate release candidate. There's a human somewhere who still presses the big green "deploy" button, but the point is that they could press it at any time and nothing would catch fire. Probably.

People love to confuse Continuous Delivery with Continuous Deployment, and honestly the industry did this to itself by giving them both the abbreviation "CD." The key difference: Continuous Delivery gets your code to the doorstep of production and rings the bell. Whether someone opens the door is a business decision, not a technical bottleneck. This makes it perfect for regulated industries or teams that aren't quite ready to trust their test suite with their lives.

**Why it matters:** Continuous Delivery eliminates the "release day" drama -- those multi-hour deployment windows where everyone holds their breath and the rollback plan is a printed-out wiki page from 2018. When you can deploy any time, deployments become boring. And in operations, boring is the highest compliment.
