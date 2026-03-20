---
title: SOAP
slug: soap
abbreviation: SOAP
description: "A protocol for exchanging structured information in web services using XML-based messaging over HTTP and other transports."
relatedTerms:
  - xml
  - rest
  - api
  - http
tags:
  - api
  - protocol
  - xml
category: concept
dateAdded: 2026-03-20
---

The enterprise protocol that made API calls feel like filing your taxes. Simple Object Access Protocol (the "Simple" is doing some very heavy lifting there) was the dominant way to build web services in the early 2000s. It wraps every request and response in an XML envelope, complete with headers, body, and enough boilerplate to make you question your career choices. Want to add two numbers? That'll be a 47-line XML document, please.

SOAP came with an entire ecosystem of WS-* specifications: WS-Security, WS-ReliableMessaging, WS-AtomicTransaction, and roughly forty-seven others that each had their own hundred-page spec documents. It used WSDL files to describe services, which were machine-readable and human-terrifying. The protocol offered genuinely useful features like built-in error handling, formal contracts, and transport independence. But when REST came along and showed you could just send a simple HTTP request and get JSON back, the industry collectively said, "Oh, so it doesn't have to hurt?"

**Why it matters:** While new projects rarely choose SOAP, it's still alive and well in banking, healthcare, government, and enterprise systems everywhere. If you're integrating with legacy services or working in a regulated industry, you'll almost certainly encounter SOAP. Understanding it means you won't panic when someone hands you a WSDL file and says, "Make this work."
