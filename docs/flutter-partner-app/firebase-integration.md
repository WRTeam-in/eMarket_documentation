---
sidebar_position: 5
---

# Firebase Integration

The partner app uses Firebase for push notifications about new orders, and for crash reporting.

:::danger Register the partner app in the customer app's Firebase project
Do **not** create a separate Firebase project for the partner app. Add it as another app inside the **same** project the customer app and admin panel already use.

If you use a separate project, FCM notifications will not work — the admin panel sends notifications with credentials from one project only, so a partner app registered elsewhere never receives them.
:::

## Create Firebase App and Connect It

Registering the app and installing the CLI is the same for every WRTeam app, so it is covered in our common setup guide:

👉 **[Firebase Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase)**

Skip the "create a project" step — the project already exists from the customer app setup. Start from registering a new app inside it.

From that guide, the partner app needs only:

1. Installing the Firebase CLI and logging in
2. Registering your Flutter app against the project

:::note Skip sign-in methods and SHA keys
The partner app does not use Firebase Authentication — login is checked by your admin panel, not Firebase. You can skip the guide's authentication steps: the **Phone**, **Google**, and **Apple** sign-in methods, the **SHA-1 / SHA-256** keys, and the iOS URL schemes. Push notifications work without them.
:::

:::tip Order alerts depend on this
The partner app relies on push notifications to alert sellers about incoming orders. If APNs is not configured, iOS sellers will not be notified of new orders even though the app otherwise works.
:::
## Set Up Push Notifications

Configuring FCM and APNs is also common across our apps:

👉 **[Push Notifications Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/notifications)**

That guide covers the Android setup, the iOS Push Notifications and Background Modes capabilities, and both APNs connection types:

- **Token-based (`.p8`)** — preferred. One universal key, no expiry.
- **Certificate-based (`.p12`)** — older method, certificates expire annually and must be renewed.

It also covers uploading your Firebase Project ID and service account file to the admin panel, which is what lets the panel send notifications to this app.