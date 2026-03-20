---
title: On-Call
slug: oncall
description: "A rotation practice where engineers are designated to respond to production incidents and alerts outside business hours."
relatedTerms:
  - sre
  - slo
  - sla
  - observability
tags:
  - reliability
  - incident-response
  - sre
category: practice
dateAdded: 2026-03-20
---

The practice of carrying a digital pager (well, a PagerDuty app on your phone) and promising to wake up at 3 AM if something breaks. On-call is the social contract between engineers and production systems: someone is always watching, even if "watching" means sleeping with one eye open and your phone on maximum volume. It's the reason experienced engineers develop a Pavlovian stress response to notification sounds.

A good on-call rotation is fair, well-documented, and comes with clear runbooks so the person woken up at midnight isn't reverse-engineering the system from scratch. A bad on-call rotation is one person who "knows the system" getting paged every night until they quit. The best on-call cultures treat every page as a learning opportunity and every noisy alert as a bug to be fixed, because alert fatigue is real and nobody makes good decisions at 4 AM while squinting at a Grafana dashboard on their phone.

**Why it matters:** On-call is the backstop that keeps production systems reliable. Without it, incidents go unnoticed until customers start tweeting. With a healthy on-call practice -- fair rotations, actionable alerts, blameless postmortems -- teams build resilient systems and spread operational knowledge instead of burning out their most experienced engineers.
