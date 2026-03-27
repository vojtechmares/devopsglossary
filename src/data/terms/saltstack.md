---
title: SaltStack
slug: saltstack
description: "An event-driven automation and configuration management platform built for speed and scale using a master-minion architecture."
relatedTerms:
  - ansible
  - terraform
  - infrastructure-as-code
tags:
  - configuration-management
  - automation
  - event-driven
category: tool
dateAdded: 2026-03-22
---

If configuration management tools were cars, SaltStack would be the one with a turbocharger. Salt uses a master-minion architecture powered by ZeroMQ for communication that's so fast it makes other tools look like they're sending carrier pigeons. It can manage thousands of nodes in parallel without breaking a sweat, using YAML-based state files that feel familiar to anyone who's touched Ansible.

Salt isn't a one-trick pony, either. It supports both agent-based (minion) and agentless (salt-ssh) modes, so you can pick your poison. Its event-driven architecture means it can react to infrastructure changes in real time, not just on a schedule. Originally an independent project, it was acquired by SaltStack Inc., then VMware, and now lives under the Broadcom umbrella — because every good open-source tool eventually gets acquired at least twice.

**Why it matters:** Salt proved that configuration management could be both blazing fast and massively scalable, and its event-driven architecture influenced how modern automation platforms think about reacting to change.
