---
title: Open Container Initiative
slug: oci
abbreviation: OCI
description: "An open governance structure for creating industry standards around container image formats and runtime specifications."
relatedTerms:
  - docker
  - container
  - container-registry
  - containerd
  - podman
tags:
  - containers
  - standards
  - cloud-native
category: concept
dateAdded: 2026-03-20
---

OCI is the reason you can build a container image with Docker, store it in any registry, and run it with Podman, containerd, or whatever runtime you fancy. Before OCI existed, Docker's image format and runtime were the de facto standard, but "one company controls the standard" is the kind of thing that makes the open-source world break out in hives. So in 2015, Docker donated its image format and runtime specifications to the Linux Foundation, and OCI was born to make sure containers stayed interoperable.

OCI maintains three key specifications: the Image Spec (how container images are structured and distributed), the Runtime Spec (how containers are actually executed), and the Distribution Spec (how images are pushed and pulled from registries). These specs are what allow the container ecosystem to be genuinely modular. You can swap out any layer of the stack -- build tool, registry, runtime -- and things still work together. It's the kind of boring standards work that nobody celebrates but everyone relies on.

**Why it matters:** OCI standards are the glue that holds the container ecosystem together. Without them, you'd be locked into a single vendor's toolchain for building, storing, and running containers. OCI ensures that the container world stays open and interoperable, letting teams choose the best tools for their needs without worrying about compatibility nightmares.
