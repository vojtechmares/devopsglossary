---
title: containerd
slug: containerd
description: "An industry-standard container runtime that manages the complete container lifecycle, from image transfer to execution and supervision."
relatedTerms:
  - docker
  - kubernetes
  - oci
  - cri
  - podman
tags:
  - containers
  - runtime
  - cloud-native
category: tool
dateAdded: 2026-03-20
---

containerd is the engine under the hood that most people never think about. When you run a container with Docker, Docker is actually calling containerd to do the heavy lifting -- pulling images, managing storage, creating and running containers, and handling networking namespaces. It was extracted from Docker's monolithic architecture in 2016 and donated to the CNCF, because the industry realized that a solid container runtime shouldn't be locked inside a single product. It graduated as a CNCF project and now quietly powers most of the container infrastructure on the planet.

What makes containerd special is its focus on doing one thing well: being a reliable, performant container runtime. It implements the Container Runtime Interface (CRI), which means Kubernetes can talk to it directly without needing Docker as a middleman. This is exactly what happened when Kubernetes deprecated Docker as a runtime -- it wasn't drama, it was just Kubernetes cutting out the unnecessary layer and talking to containerd directly. containerd handles image pulls, snapshot management, and container execution through OCI-compliant runtimes like runc, all while staying lean and embeddable.

**Why it matters:** containerd is the container runtime that most production Kubernetes clusters actually use. Understanding that it exists beneath Docker and Kubernetes helps demystify how containers really work. When your containers are running in production, it's containerd doing the real work, making it one of the most important pieces of infrastructure you'll probably never interact with directly.
