---
title: Helm
slug: helm
description: "The package manager for Kubernetes that simplifies deploying and managing applications using reusable charts."
relatedTerms:
  - kubernetes
tags:
  - kubernetes
  - packaging
  - deployment
category: tool
dateAdded: 2024-01-01
---

Helm is the "apt-get" of Kubernetes. It lets you define, install, and upgrade complex Kubernetes applications using charts — pre-configured packages of Kubernetes resources.

Instead of managing dozens of YAML manifests by hand (and inevitably getting the indentation wrong), you use a Helm chart with templated values. Need to deploy Redis? `helm install redis`. Need to customize it? Override the values. Need to roll back? `helm rollback`.

**Why it matters:** Helm charts are the standard way to share and deploy Kubernetes applications. They turn a pile of YAML into something manageable.
