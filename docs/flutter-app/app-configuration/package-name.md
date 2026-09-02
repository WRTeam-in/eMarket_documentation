---
sidebar_position: 5
---

# Package Name

Changing the package name is the same for every WRTeam app, so it is covered in our common setup guide:

👉 **[Package Name Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/packagename)**

It covers the automated method using `change_app_package_name`, which updates the Android and iOS configuration and renames the Kotlin source folders for you.

:::note Use a different package name from the partner app
The customer app and the partner app are two separate store listings, so they must not share a package name.
:::

## After changing it

Your Firebase SHA keys are tied to the package name, so the app entry in Firebase must be updated too — see [Firebase Integration](../firebase-integration.md).
