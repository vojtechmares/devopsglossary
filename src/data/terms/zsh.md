---
title: Z Shell
slug: zsh
abbreviation: ZSH
description: "An extended Bourne shell with powerful features for interactive use, scripting, and customization."
relatedTerms:
  - bash
  - linux
tags:
  - shell
  - terminal
  - development
category: tool
dateAdded: 2026-03-20
---

ZSH is the shell that took everything Bash does and added better tab completion, smarter globbing, spelling correction, and a plugin ecosystem that turned terminal customization into a hobby. It's been the default shell on macOS since Catalina, which means millions of developers are using it whether they realize it or not. For those who do realize it, there's Oh My Zsh — a community-driven framework with hundreds of plugins and themes that makes your terminal look like it belongs in a conference talk.

Under the hood, ZSH is largely compatible with Bash syntax, so most scripts transfer over without issues. Where it really shines is interactive use: recursive path expansion (`cd /u/lo/b` expands to `cd /usr/local/bin`), shared history across sessions, right-side prompts, and programmable completion that can tab-complete everything from git branches to Kubernetes resource names. Power users layer on tools like Powerlevel10k for instant prompts and zsh-autosuggestions for fish-like history suggestions.

**Why it matters:** Your shell is the tool you use most as a developer, and ZSH makes that experience significantly better. Its combination of Bash compatibility, superior interactive features, and a massive plugin ecosystem makes it the practical default for modern development workflows.
