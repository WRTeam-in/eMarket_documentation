---
sidebar_position: 5
---

# Firebase Integration

The partner app uses Firebase for login and for push notifications about new orders.

:::danger Register the partner app in the customer app's Firebase project
Do **not** create a separate Firebase project for the partner app. Add it as another app inside the **same** project the customer app and admin panel already use.

If you use a separate project, FCM notifications will not work — the admin panel sends notifications with credentials from one project only, so a partner app registered elsewhere never receives them.
:::

## Create Firebase App and Connect It

Registering the app, installing the CLI, enabling sign-in methods, and adding your SHA keys is the same for every WRTeam app, so it is covered in our common setup guide:

👉 **[Firebase Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase)**

Skip the "create a project" step — the project already exists from the customer app setup. Start from registering a new app inside it.

That guide covers:

1. Installing the Firebase CLI and logging in
2. Registering your Flutter app against the project
3. Enabling the **Phone**, **Google**, and **Apple** sign-in methods
4. Generating and adding **SHA-1 / SHA-256** keys — debug, release, and Play app signing
5. iOS: the `REVERSED_CLIENT_ID` and Encoded App ID URL schemes, and `GoogleService-Info.plist`

:::note The partner app needs its own SHA keys
The partner app has a different package name and a different keystore from the customer app, so its SHA-1 / SHA-256 keys are different too. Add them against the **partner app entry** in the Firebase console, not the customer app entry.
:::

## Set Up Push Notifications

Configuring FCM and APNs is also common across our apps:

👉 **[Push Notifications Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/notifications)**

That guide covers the Android setup, the iOS Push Notifications and Background Modes capabilities, and both APNs connection types:

- **Token-based (`.p8`)** — preferred. One universal key, no expiry.
- **Certificate-based (`.p12`)** — older method, certificates expire annually and must be renewed.

It also covers uploading your Firebase Project ID and service account file to the admin panel, which is what lets the panel send notifications to this app.

:::tip Order alerts depend on this
The partner app relies on push notifications to alert sellers about incoming orders. If APNs is not configured, iOS sellers will not be notified of new orders even though the app otherwise works.
:::
