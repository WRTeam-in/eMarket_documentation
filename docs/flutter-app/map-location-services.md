---
sidebar_position: 6
---

# Map and Location Services

eMarket uses Google Maps for delivery addresses, store locations, and live order tracking. Setting this up is the same for every WRTeam app, so the full steps live in our common setup guide:

👉 **[Firebase Billing, Maps & Places Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase-billing)**

That guide covers the whole process end to end:

1. Upgrading your Firebase project from the Spark plan to the **Blaze** (pay as you go) plan
2. Linking a billing account to your Google Cloud project
3. Enabling the required APIs — Maps SDK for Android, Maps SDK for iOS, Geocoding, Places, Routes, and Maps JavaScript
4. Creating your API keys and setting their restrictions
5. Adding the keys to your app — `AndroidManifest.xml` for Android, `AppDelegate.swift` for iOS

## Why Billing Is Required

Google Maps and Places will not return results without a billing account attached, even inside the free tier. Firebase phone OTP login has the same requirement. If maps render blank or address search returns nothing, an unlinked billing account is the first thing to check.

## Also Add Your Key to the Admin Panel

The app is only one half of the setup. The admin panel and website need the same Google Maps key entered separately — see [Map API Key Settings](../admin-panel/map-api-key-settings.md).
