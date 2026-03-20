---
title: Firewall
slug: firewall
description: "A network security device or software that monitors and filters incoming and outgoing traffic based on defined rules."
relatedTerms:
  - waf
  - tls
  - ingress
  - egress
tags:
  - security
  - networking
category: concept
dateAdded: 2026-03-20
---

A firewall is the bouncer standing between your network and everything trying to get in (or out). It inspects traffic against a set of rules and decides what passes through and what gets dropped — no negotiation, no VIP list exceptions unless you explicitly configure them. Firewalls operate at different layers of the network stack: packet-filtering firewalls look at IP addresses and ports, stateful firewalls track active connections, and next-generation firewalls (NGFWs) go deeper with application-layer inspection, intrusion prevention, and threat intelligence feeds.

In cloud environments, firewalls have become software-defined. AWS has Security Groups and NACLs, Azure has Network Security Groups, and GCP has VPC firewall rules. They all do the same fundamental thing — control what talks to what — but they're configured through APIs and infrastructure-as-code instead of rack-mounted appliances. Kubernetes adds another layer with Network Policies that control pod-to-pod communication. The principle stays the same whether you're managing a physical data center or a fleet of containers: deny by default, allow explicitly, and log everything.

**Why it matters:** Firewalls are the most fundamental network security control. Every environment has them, and misconfiguring one is among the fastest ways to either expose your infrastructure to the internet or break legitimate traffic in production.
