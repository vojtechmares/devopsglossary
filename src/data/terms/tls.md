---
title: TLS
slug: tls
abbreviation: TLS
description: "A cryptographic protocol that provides end-to-end encryption, authentication, and data integrity for communications over networks."
relatedTerms:
  - http
  - tcp
  - owasp
tags:
  - security
  - encryption
  - networking
category: concept
dateAdded: 2026-03-20
---

The invisible bodyguard that makes sure nobody's reading your packets. Transport Layer Security is the protocol that puts the "S" in HTTPS, encrypting the data flowing between clients and servers so that eavesdroppers, man-in-the-middle attackers, and nosy ISPs can't see or tamper with it. TLS replaced its predecessor SSL (which was broken enough to earn retirement), but the industry still can't stop calling everything "SSL certificates" -- much to the annoyance of pedantic security engineers everywhere.

TLS works through an elegant handshake where client and server agree on a cipher suite, verify each other's identity using certificates, and establish shared encryption keys. TLS 1.3 streamlined this process dramatically -- cutting the handshake from two round trips down to one (and sometimes zero for returning clients), removing insecure legacy algorithms, and making the whole thing faster and more secure simultaneously. Behind the scenes, certificate authorities, certificate chains, and key exchanges make the trust model work. And thanks to Let's Encrypt, getting a valid TLS certificate went from an expensive, bureaucratic process to a single CLI command that even your side projects deserve.

**Why it matters:** TLS is non-negotiable in modern infrastructure. Every API endpoint, webhook, database connection, and internal service should be encrypted in transit. As a DevOps engineer, you'll spend quality time managing certificates, configuring TLS termination at load balancers, debugging certificate chain issues, setting up mutual TLS in service meshes, and automating certificate renewal so your site doesn't go down at 3 AM because someone forgot to renew.
