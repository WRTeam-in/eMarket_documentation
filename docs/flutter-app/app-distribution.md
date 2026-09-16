---
sidebar_position: 8
---

# App Distribution

Publishing to the stores is the same for every WRTeam app, so the full steps live in our common setup guide:

👉 **[Deployment](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deployment)**

- **[Publish to Google Play Store](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deployment/playstore)** — creating the upload keystore, `key.properties`, and building the APK / App Bundle
- **[Publish to Apple App Store](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deployment/appstore)** — signing, archiving in Xcode, validating, and submitting

## Before You Publish

Work through these eMarket-specific items first — they are easy to miss and each one requires a new build to correct:

1. **Server URL** — confirm `hostUrl` in `lib > helper > utils > constant.dart` points at your live admin panel, not a demo or staging server. See [Server and API Configuration](./server-api-config.md).
2. **Package name** — set and matching in `constant.dart`. See [Package Name](./app-configuration/package-name.md).
3. **App name, icon and version** — see [App Name & Version](./app-configuration/app-name-version.md) and [App Icon](./app-configuration/app-icon.md).
4. **Firebase** — the release build needs its own SHA-1 / SHA-256 keys registered, separate from your debug keys. See [Firebase Integration](./firebase-integration.md).
5. **Privacy policy URL** — required by both stores.
6. **In-app purchase** — if you are shipping the iOS membership feature, the products must be live in App Store Connect before submission. See [In-App Purchase](./in-app-purchase.md).
7. **Deep links** — your own domain in `constant.dart`, `AndroidManifest.xml` and `Runner.entitlements`, not the demo domains. See [Deep Links](./deep-links.md).
