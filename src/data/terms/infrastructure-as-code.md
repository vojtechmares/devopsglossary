---
title: Infrastructure as Code
slug: infrastructure-as-code
abbreviation: IaC
description: "The practice of managing and provisioning infrastructure through machine-readable definition files rather than manual processes."
relatedTerms:
  - terraform
  - ansible
tags:
  - iac
  - automation
  - best-practices
category: concept
dateAdded: 2026-03-20
---

The radical idea that your infrastructure should be version-controlled, reviewable, and reproducible — just like your application code. Instead of clicking through cloud consoles like a caffeinated squirrel, you write config files that describe your desired state.

IaC means your infrastructure is documented by default, changes go through pull requests, and you can spin up identical environments on demand. It's the difference between "I think Dave set up that server in 2019" and "here's the exact Terraform that creates it."

**Why it matters:** IaC is the foundation of repeatable, auditable infrastructure. Without it, your cloud setup is just an oral tradition.
