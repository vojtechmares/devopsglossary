---
title: Bash
slug: bash
description: "The Bourne Again Shell — the default command-line interpreter on most Linux distributions and the lingua franca of shell scripting."
relatedTerms:
  - zsh
  - linux
tags:
  - shell
  - terminal
  - development
  - automation
category: tool
dateAdded: 2026-03-20
---

Bash is the shell that runs the internet's infrastructure. Born in 1989 as a free replacement for the Bourne shell, it became the default on virtually every Linux distribution and macOS (until Catalina switched to ZSH). When someone says "write a shell script," they almost always mean Bash. It's the glue language of DevOps — the thing you reach for when you need to chain commands together, automate a deployment, parse some logs, or write a quick CI/CD pipeline step.

Bash scripting is deceptively simple on the surface but hides a minefield of gotchas underneath. Unquoted variables split on whitespace. `[ ]` and `[[ ]]` behave differently. Exit codes matter but are easy to ignore. Pipelines silently swallow errors unless you set `pipefail`. Despite all of this, Bash remains the most portable scripting option across Unix-like systems — if it has a terminal, it probably has Bash. For anything more complex than a few dozen lines, most teams reach for Python or Go, but for bootstrapping, glue scripts, and Dockerfiles, nothing beats the immediacy of a Bash one-liner.

**Why it matters:** Bash is everywhere. Every Dockerfile `RUN` command, every CI pipeline step, every cron job, and every quick automation hack runs through it. Fluency in Bash isn't optional for anyone working in DevOps or infrastructure — it's the common language of every Unix-like system you'll ever touch.
