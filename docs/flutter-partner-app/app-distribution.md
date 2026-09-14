---
sidebar_position: 6
---

# App Distribution

Publishing to the stores is the same for every WRTeam app, so the full steps live in our common setup guide:

👉 **[Deployment](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deployment)**

- **[Publish to Google Play Store](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deployment/playstore)** — creating the upload keystore, `key.properties`, and building the APK / App Bundle
- **[Publish to Apple App Store](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deployment/appstore)** — signing, archiving in Xcode, validating, and submitting

## Before You Publish

Work through these partner-app items first — each one requires a new build to correct:

1. **Separate store listing** — the partner app must use a **different package name** from the customer app. See [Package Name](./configuration/package-name.md).
2. **Server URL** — confirm it points at your live admin panel, not a demo or staging server. See [Server and API Configuration](./server-api-config.md).
3. **App name, logo and version** — see [App Name & Version](./configuration/app-name-version.md) and [App Logo](./configuration/app-logo.md).
4. **Background location** — the partner app requests background location for delivery tracking. Both stores require you to declare and justify this in the listing, and Google Play reviews it separately. See [Map & Location Services](./map-location-services.md).
5. **Privacy policy URL** — required by both stores.
