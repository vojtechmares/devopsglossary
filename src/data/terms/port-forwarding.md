---
title: Port Forwarding
slug: port-forwarding
description: "Redirecting network traffic from one address and port to another, commonly used for local debugging of remote or containerized services."
relatedTerms:
  - kubernetes
  - tcp
  - ingress
tags:
  - networking
  - debugging
  - development
category: concept
dateAdded: 2026-03-20
---

Port forwarding is the networking equivalent of a secret tunnel. Instead of exposing a service to the entire world just so you can poke at it, you redirect traffic from a port on your local machine to a port on a remote host, container, or pod. The most beloved incarnation in the DevOps world is `kubectl port-forward`, which lets you access a service running inside your Kubernetes cluster as if it were running on localhost. It's the fastest way to debug that misbehaving pod without setting up an ingress, a load balancer, and a DNS record.

Beyond Kubernetes, port forwarding shows up everywhere. SSH tunnels (`ssh -L`) have been a sysadmin's best friend for decades, letting you reach databases and admin panels that are (wisely) not exposed to the public internet. Docker's `-p` flag is port forwarding in disguise, mapping a container's internal port to one on your host. It's simple in concept but surprisingly powerful -- you can chain forwards, tunnel through bastion hosts, and access services that are multiple network hops away, all from the comfort of your terminal.

**Why it matters:** Port forwarding is an essential debugging and development tool that bridges the gap between your local machine and remote infrastructure. It lets you interact with services in private networks, test changes against real environments, and troubleshoot issues without modifying production networking configs. It's one of those fundamental skills that saves you hours of frustration on a regular basis.
