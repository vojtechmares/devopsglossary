---
title: HTTP
slug: http
abbreviation: HTTP
description: "The foundational application-layer protocol for transmitting hypermedia documents and powering communication on the World Wide Web."
relatedTerms:
  - rest
  - tls
  - tcp
  - api
tags:
  - protocol
  - web
  - networking
category: concept
dateAdded: 2026-03-20
---

The protocol that literally runs the internet, one request-response pair at a time. HyperText Transfer Protocol started as a simple way to fetch HTML documents, but it evolved into the backbone of virtually all web communication. GET, POST, PUT, DELETE -- these verbs became the vocabulary of modern software development. Every time you load a web page, call an API, or deploy a container image from a registry, HTTP is doing the heavy lifting underneath.

HTTP has gone through quite the glow-up over the years. HTTP/1.1 gave us persistent connections and chunked transfers. HTTP/2 brought multiplexing and header compression, finally letting browsers fetch multiple resources without opening a dozen connections. HTTP/3 threw everyone a curveball by ditching TCP entirely in favor of QUIC over UDP. Through all these iterations, the basic mental model stayed the same: a client sends a request with a method, headers, and maybe a body, and a server sends back a status code and a response. Those status codes have become a language of their own -- 200 means all good, 404 means someone mistyped a URL, and 500 means it's time to check the logs.

**Why it matters:** HTTP is the protocol you'll interact with every single day as a DevOps engineer, whether you're configuring load balancers, setting up health checks, debugging API calls, or writing Kubernetes ingress rules. Understanding its methods, headers, and status codes isn't optional -- it's fundamental literacy for working in modern infrastructure.
