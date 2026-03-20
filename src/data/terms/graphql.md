---
title: GraphQL
slug: graphql
description: "A query language for APIs that lets clients request exactly the data they need in a single request."
relatedTerms:
  - api
  - rest
  - json
tags:
  - api
  - query-language
  - facebook
category: concept
dateAdded: 2026-03-20
---

The API query language that looked at REST's "here's everything whether you wanted it or not" approach and said "what if the client got to choose?" Developed at Facebook and open-sourced in 2015, GraphQL lets you describe your data as a graph of types and fields, then lets clients ask for exactly the shape of data they need — no more, no less. One endpoint, one POST request, and you get back precisely the JSON structure you asked for. It's like a restaurant where you design your own dish instead of picking from the menu.

GraphQL solves real problems: over-fetching (getting 47 fields when you needed 3), under-fetching (making 5 requests to assemble one screen), and the endless bikeshedding over endpoint design. But it comes with its own bag of tricks — caching gets harder, authorization logic gets more complex, and without discipline you'll end up with queries that make your database cry. The N+1 problem doesn't disappear; it just puts on a disguise and moves to the resolver layer.

**Why it matters:** GraphQL gives frontend and mobile teams the power to iterate on data requirements without waiting for backend changes. In microservice architectures, a GraphQL gateway can unify multiple services behind a single, flexible API surface.
