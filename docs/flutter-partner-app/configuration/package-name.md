---
sidebar_position: 4
---

# Package Name

Changing the package name is the same for every WRTeam app, so it is covered in our common setup guide:

👉 **[Package Name Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/packagename)**

It covers the automated method using `change_app_package_name`, which updates the Android and iOS configuration and renames the Kotlin source folders for you.

## One extra step for the partner app

After changing the package name, also update `packageName` in `lib > helper > utils > constant.dart` so it matches:

```dart
static String packageName = "com.wrteam.egrocer.seller";
```

The app builds its Play Store link from this value, so leaving it on the old value sends users to the wrong listing.

:::warning Must differ from the customer app
The partner app and the customer app are two separate store listings, so they must not share a package name.
:::

## After changing it

The partner app's Firebase SHA keys are tied to its package name, so its entry in the Firebase console must be updated too — see [Firebase Integration](../firebase-integration.md).
