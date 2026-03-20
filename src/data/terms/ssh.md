---
title: Secure Shell
slug: ssh
abbreviation: SSH
description: "A cryptographic network protocol for secure remote access, command execution, and tunneling over untrusted networks."
relatedTerms:
  - tls
  - linux
  - port-forwarding
tags:
  - security
  - networking
  - protocols
category: concept
dateAdded: 2026-03-20
---

SSH is the protocol that replaced Telnet's "send your password in plaintext and hope for the best" approach to remote access. It establishes an encrypted channel between your machine and a remote server, letting you execute commands, transfer files, and forward ports as if you were sitting right in front of the box. Every Linux server you've ever managed, every Git push over SSH, every SCP file transfer — they all ride on this protocol.

The real power of SSH goes beyond just typing commands on a remote machine. Key-based authentication eliminates passwords entirely — you generate a keypair, put the public key on the server, and your private key proves your identity without ever crossing the network. SSH tunneling lets you securely access services behind firewalls by forwarding local ports to remote ones (or vice versa). SSH agent forwarding lets you hop between servers without copying keys everywhere. Tools like `ssh-config` turn complex connection setups into simple aliases, and multiplexers like `tmux` over SSH give you persistent sessions that survive network drops.

**Why it matters:** SSH is the backbone of server administration and secure remote access. It's one of those protocols that's so fundamental to infrastructure work that not understanding it is like being a carpenter who doesn't know how to use a hammer.
