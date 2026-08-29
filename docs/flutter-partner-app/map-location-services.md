---
sidebar_position: 4
---

# Map & Location Services

The eMarket Partner App includes location-based features for vendors and delivery partners to track orders, manage deliveries, and optimize delivery routes.

## Google Maps Integration

Setting up your Google Maps API keys and billing is the same for every WRTeam app, so the full steps live in our common setup guide:

👉 **[Firebase Billing, Maps & Places Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase-billing)**

That guide covers upgrading Firebase to the Blaze plan, linking a billing account, enabling the required APIs, creating your keys, and adding them to `AndroidManifest.xml` and `AppDelegate.swift`.

The partner app can reuse the **same** Google Maps keys as the customer app — they are per-project, not per-app.

:::note
Google Maps and Places return nothing without a billing account attached, even inside the free tier. If maps render blank, check that first.
:::