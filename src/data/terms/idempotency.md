---
title: Idempotency
slug: idempotency
description: "A property where performing an operation multiple times produces the same result as performing it once."
relatedTerms:
  - rest
  - infrastructure-as-code
  - terraform
  - ansible
tags:
  - reliability
  - api-design
  - infrastructure
category: concept
dateAdded: 2026-03-20
---

The fancy word that means "go ahead, click the button twice -- it won't charge you double." Idempotency is the property of an operation where doing it once and doing it ten times yields the exact same outcome. Your Terraform apply should be idempotent: run it once, your infrastructure is created; run it again, nothing changes because everything already exists. PUT a resource to an API, PUT it again, same result. It's the software equivalent of "set the thermostat to 72" versus "turn the heat up by 5 degrees."

This concept is absolutely everywhere once you start looking for it. REST APIs lean on it (PUT and DELETE should be idempotent, POST usually isn't). Configuration management tools like Ansible are built around it -- you declare the desired state and the tool figures out what needs to change, even if the answer is "nothing." Infrastructure as Code would be useless without it, because nobody wants a tool that creates a second database every time you run the pipeline.

**Why it matters:** Idempotency is what lets you safely retry failed operations, rerun pipelines without fear, and sleep at night knowing that your automated systems won't create duplicate resources or charge a customer seventeen times because the network hiccupped. In distributed systems where failures and retries are inevitable, idempotency isn't a nice-to-have -- it's the difference between a resilient system and a very expensive bug.
