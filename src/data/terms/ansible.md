---
title: Ansible
slug: ansible
description: "An agentless automation tool for configuration management, application deployment, and task automation using YAML playbooks."
relatedTerms:
  - terraform
  - infrastructure-as-code
tags:
  - automation
  - configuration-management
  - yaml
category: tool
dateAdded: 2024-01-01
---

The automation tool that runs on SSH and good vibes. Ansible is agentless — no daemon to install on target machines, no client to maintain. Just SSH access and a YAML playbook that describes what you want.

Write a playbook, run it against your inventory of servers, and watch as Ansible idemopotently configures everything. "Idempotently" means you can run it ten times and get the same result. Unlike your deploy scripts from 2015.

**Why it matters:** Ansible lowered the barrier to automation. If you can write YAML (and tolerate its whitespace sensitivity), you can automate your infrastructure.
