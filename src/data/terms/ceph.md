---
title: Ceph
slug: ceph
description: "An open-source distributed storage system providing object, block, and file storage in a single unified platform."
relatedTerms:
  - csi
  - kubernetes
tags:
  - storage
  - distributed-systems
  - cloud-native
category: tool
dateAdded: 2026-03-20
---

Ceph is the Swiss Army knife of distributed storage — it gives you object storage, block storage, and a distributed file system all from the same cluster. Built on the RADOS (Reliable Autonomic Distributed Object Store) foundation, Ceph distributes data across commodity hardware with no single point of failure. It's the storage system that lets you say "we run our own S3-compatible object store" with a straight face.

Running Ceph is not for the faint of heart. It's powerful, battle-tested, and used by some of the largest infrastructure deployments on the planet, but it also has a learning curve that rivals Kubernetes itself. Between monitors, OSDs, placement groups, and CRUSH maps, there's a lot to understand. Tools like Rook have made deploying Ceph on Kubernetes significantly less painful, but "significantly less painful" is doing a lot of heavy lifting in that sentence.

**Why it matters:** Ceph provides a fully open-source, software-defined storage platform that eliminates vendor lock-in for storage infrastructure. For organizations that need scalable, resilient storage without paying enterprise storage prices, Ceph is one of the most capable options available — provided you're willing to invest in the operational expertise.
