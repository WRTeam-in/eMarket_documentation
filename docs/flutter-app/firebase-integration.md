---
sidebar_position: 5
---

# Firebase Integration

eMarket uses Firebase for phone OTP login, social sign-in, and push notifications.

## Create Firebase Project and Connect the App

Creating the Firebase project, installing the CLI, registering the app, enabling sign-in methods, and adding your SHA keys is the same for every WRTeam app, so it is covered in our common setup guide:

👉 **[Firebase Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase)**

That guide covers:

1. Creating the Firebase project in the console
2. Installing the Firebase CLI and logging in
3. Registering your Flutter app against the project
4. Enabling the **Phone**, **Google**, and **Apple** sign-in methods
5. Generating and adding **SHA-1 / SHA-256** keys — debug, release, and Play app signing
6. iOS: the `REVERSED_CLIENT_ID` and Encoded App ID URL schemes, and `GoogleService-Info.plist`

:::warning Use one Firebase project for everything
The customer app, the partner app, the website, and the admin panel must all use the **same** Firebase project. Splitting them across projects breaks OTP login and push notifications, because the panel sends notifications using credentials from a single project.
:::

:::tip Phone OTP needs billing enabled
Firebase phone authentication requires the Blaze plan, the same as Google Maps. See [Map and Location Services](./map-location-services.md).
:::