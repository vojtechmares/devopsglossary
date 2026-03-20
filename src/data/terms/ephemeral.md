---
title: Ephemeral
slug: ephemeral
description: "Describes short-lived, disposable resources designed to be created and destroyed on demand without lasting side effects."
relatedTerms:
  - container
  - kubernetes
  - infrastructure-as-code
tags:
  - cloud-native
  - containers
  - infrastructure
category: concept
dateAdded: 2026-03-20
---

The philosophy of "treat it like a paper plate, not fine china." Ephemeral resources are designed to be spun up, used, and thrown away without anyone shedding a tear. Containers are ephemeral -- they start, do their job, and get replaced by a fresh one. CI runners are ephemeral -- each build gets a clean environment that's destroyed after the pipeline finishes. Preview environments are ephemeral -- they exist for a pull request and vanish when it's merged.

This is a fundamental shift from the old "pet vs. cattle" mentality. Your production server used to be a pet named db-prod-01 that you lovingly maintained for years, SSH'd into to apply patches, and mourned when its hard drive failed. Ephemeral infrastructure treats every resource as cattle: identical, replaceable, and defined entirely in code. If something goes wrong, you don't fix it -- you kill it and spin up a new one. It's not heartless, it's resilient.

**Why it matters:** Ephemeral resources eliminate configuration drift, reduce the blast radius of failures, and make environments reproducible. When nothing is precious, everything is replaceable, and that's exactly the kind of resilience you want in a world where hardware fails, software crashes, and someone will inevitably run `rm -rf` in the wrong directory.
