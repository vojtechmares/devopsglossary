---
title: Gateway
slug: gateway
description: "A network entry point that routes, filters, and manages traffic between clients and backend services."
relatedTerms:
  - ingress
  - api
  - waf
  - service-mesh
tags:
  - networking
  - api
  - traffic-management
category: concept
dateAdded: 2026-03-20
---

A gateway is the bouncer at the door of your infrastructure. It decides who gets in, where they go, and whether they're carrying anything suspicious. In the API world, it handles routing, rate limiting, authentication, and protocol translation so your backend services can focus on actual business logic instead of arguing with every random HTTP request that shows up.

Gateways come in many flavors — API gateways like Kong or AWS API Gateway sit in front of your services and manage external traffic, while service mesh gateways handle east-west traffic between your microservices. Some gateways are glorified reverse proxies; others are full-blown traffic management platforms with plugin ecosystems larger than some companies' entire codebases.

**Why it matters:** Without a gateway, every service is directly exposed to the chaos of the outside world. Gateways centralize cross-cutting concerns like auth, rate limiting, and observability, giving you a single control point for traffic policy instead of scattering that logic across dozens of services.
