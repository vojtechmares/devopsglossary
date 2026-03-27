---
title: Serverless
slug: serverless
description: "A cloud execution model where the provider manages infrastructure and dynamically allocates resources per request."
relatedTerms:
  - aws
  - azure
  - gcp
  - microservices
tags:
  - cloud
  - architecture
  - faas
category: concept
dateAdded: 2026-03-22
---

Serverless doesn't mean there are no servers — it means they're someone else's problem. You write functions, upload them, and the cloud provider handles scaling, patching, and capacity planning. AWS Lambda, Azure Functions, Google Cloud Functions — pick your flavor. You pay per invocation instead of per hour, and your application scales to zero when nobody's using it. It's the most misleading name in tech since "the cloud." There are absolutely servers. You just don't think about them.

Until the cold start hits. Serverless functions that haven't been invoked recently need to spin up a new execution environment, and that delay can range from annoying to application-breaking depending on your runtime and dependencies. The ecosystem has matured with frameworks like Serverless Framework and AWS SAM, and providers keep shrinking cold start times, but the tradeoff between convenience and control is real. You also get to discover exciting new debugging challenges when your function runs in an ephemeral container you can't SSH into.

**Why it matters:** Serverless lets teams ship features without managing infrastructure. It's the ultimate "I just want to run my code" abstraction — until you need to debug a 15-second cold start at 3 AM and realize you traded operational complexity for observability complexity.
