---
title: Container Registry
slug: container-registry
description: "A service for storing, managing, and distributing container images, acting as the library catalog for your packaged applications."
relatedTerms:
  - docker
  - oci
  - container
  - kubernetes
tags:
  - containers
  - images
  - registry
category: concept
dateAdded: 2026-03-20
---

Think of a container registry as the warehouse where all your carefully packaged container images live, waiting to be pulled and deployed. When you run `docker push`, your image doesn't just float into the cloud and hope for the best -- it lands in a registry that catalogs it by name, tag, and digest. Docker Hub is the public one everyone starts with (and the one that rate-limits you right when your CI pipeline is busiest), but there are plenty of others: GitHub Container Registry, AWS ECR, Google Artifact Registry, Azure Container Registry, and self-hosted options like Harbor.

A registry does more than just store blobs. Modern registries handle vulnerability scanning, access control, image signing, and replication across regions. They understand OCI image specifications, can store Helm charts, and some even support arbitrary artifacts. The key insight is that tags are mutable -- `latest` today might not be `latest` tomorrow -- which is why serious deployments pin to image digests. Nothing ruins a Friday like discovering your "latest" tag now points to something completely different.

**Why it matters:** Container registries are the critical link between building your application and running it. Without a reliable registry, your CI/CD pipeline has nowhere to put the images it builds, and your Kubernetes clusters have nowhere to pull them from. Choosing and configuring your registry properly -- with scanning, access controls, and replication -- is foundational to container security and deployment reliability.
