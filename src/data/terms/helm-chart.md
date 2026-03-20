---
title: Helm Chart
slug: helm-chart
description: "A packaged collection of Kubernetes resource templates and configuration that Helm uses to deploy applications."
relatedTerms:
  - helm
  - kubernetes
  - yaml
tags:
  - kubernetes
  - packaging
  - deployment
category: concept
dateAdded: 2026-03-20
---

A Helm chart is essentially a recipe for deploying an application on Kubernetes — a directory of templatized YAML files, default values, and metadata that Helm renders and applies to your cluster. Instead of maintaining 47 individual YAML manifests and manually updating image tags across all of them, you get a single package with a `values.yaml` file where you tweak the knobs and Helm handles the rest. It's the package manager experience Kubernetes desperately needed.

Charts can be shared through repositories, versioned like any other artifact, and composed together as dependencies. The ecosystem is enormous — need to deploy PostgreSQL, Redis, or an entire monitoring stack? There's a chart for that. Of course, the flip side is inheriting someone else's 2,000-line `values.yaml` with options you didn't know existed and defaults that may or may not match your security requirements. Always read the chart before you `helm install`.

**Why it matters:** Helm charts standardize how applications are packaged and deployed on Kubernetes, enabling repeatable installations, easy upgrades, and shareable deployment configurations. They're the de facto standard for distributing Kubernetes applications and a cornerstone of most platform engineering workflows.
