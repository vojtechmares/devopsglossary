---
title: GitOps
slug: gitops
description: "An operational framework that uses Git as the single source of truth for declarative infrastructure and application delivery."
relatedTerms:
  - ci-cd
  - infrastructure-as-code
tags:
  - git
  - deployment
  - automation
category: methodology
dateAdded: 2026-03-20
---

The philosophy that if it's not in Git, it doesn't exist. GitOps takes Infrastructure as Code to its logical conclusion: Git is the single source of truth, and all changes to infrastructure and applications are made through Git commits and pull requests.

An operator (like ArgoCD or Flux) watches your Git repo and automatically reconciles the actual state of your cluster with the desired state in the repo. Drift? The operator fixes it. Unauthorized change? Reverted. Want to roll back? `git revert`.

**Why it matters:** GitOps gives you audit trails, rollbacks, and collaboration workflows for free — because they're just Git features.
