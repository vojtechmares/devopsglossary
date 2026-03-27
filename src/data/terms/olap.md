---
title: OLAP
slug: olap
abbreviation: OLAP
description: "A computing approach optimized for complex analytical queries across large datasets, using multidimensional data models."
relatedTerms:
  - database
  - sql
  - postgresql
tags:
  - analytics
  - data
  - databases
category: concept
dateAdded: 2026-03-22
---

OLAP (Online Analytical Processing) is how you ask "what were total sales by region by quarter for the last five years?" without waiting until next quarter for the answer. It's a computing approach optimized for read-heavy, complex queries across massive datasets — the kind of questions that would make a transactional database weep. Contrast it with OLTP (Online Transaction Processing), which handles your individual INSERT and UPDATE operations one receipt at a time.

The OLAP world is full of its own jargon: columnar storage, pre-computed aggregations, OLAP cubes, star schemas, snowflake schemas. Modern implementations include ClickHouse, Apache Druid, Google BigQuery, and Amazon Redshift. The key insight is that analytical queries access many rows but few columns, so storing data by column instead of by row makes everything dramatically faster. OLTP handles one receipt at a time; OLAP tells you if the store is profitable.

**Why it matters:** OLAP enables data-driven decision making at scale. Without it, business intelligence would still be someone with a spreadsheet and a prayer — and that someone would always be behind on their reports.
