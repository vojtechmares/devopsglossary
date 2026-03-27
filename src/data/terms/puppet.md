---
title: Puppet
slug: puppet
description: "A configuration management tool that uses declarative code to automate infrastructure provisioning and system configuration."
relatedTerms:
  - ansible
  - terraform
  - infrastructure-as-code
tags:
  - configuration-management
  - automation
  - infrastructure
category: tool
dateAdded: 2026-03-22
---

Puppet was managing servers before "DevOps" was even a buzzword. Born in 2005, it's one of the original configuration management tools — the grizzled veteran that taught the industry infrastructure could be defined as code. It uses its own DSL (Puppet DSL) and a client-server architecture where a Puppet master tells agents on each node exactly what state they should be in.

The ecosystem revolves around manifests (your desired state definitions), modules (reusable bundles of code), and the Puppet Forge — a marketplace of community modules so you don't have to reinvent the wheel for the 10,000th Nginx config. Unlike Ansible's agentless approach, Puppet requires an agent running on every managed node, which means more moving parts but also continuous enforcement of your desired state.

**Why it matters:** Puppet pioneered the idea that infrastructure should be defined as code, paving the way for every modern IaC tool that followed. If Terraform is the cool kid, Puppet is the wise elder who made it all possible.
