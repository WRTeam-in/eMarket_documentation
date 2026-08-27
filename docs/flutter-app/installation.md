---
sidebar_position: 2
---

# Flutter App Installation

Installing Flutter, the Java JDK, and your IDE is the same for every WRTeam product, so those steps live in our common setup guide:

👉 **[Flutter & Java JDK Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/basicsetup)**

Follow that guide first, then return here for the eMarket-specific versions and configuration below.

## Required Versions

The common guide installs the latest Flutter and JDK. eMarket **4.0.0** is built and tested against these specific versions:

| Component | Version |
| --------- | ------- |
| Flutter | 3.44.8 |
| JDK | 25 |
| Kotlin | 2.3.21 |
| AGP | 8.11.1 |
| Gradle | gradle-9.5.1-all.zip |

Using a different Flutter or JDK version is the most common cause of build failures. If you are on an older eMarket release, check the [Version History](../changelog/version-history.md) for the matching versions.

## Verify Your Setup

After completing the common setup guide, confirm your versions:

```bash
flutter --version
java -version
```

Then run `flutter doctor` and resolve anything it reports before opening the project.

## Next Steps

- [App Configuration](./app-configuration/run-the-app.md) — app name, icon, package name, theme, fonts
- [Server and API Configuration](./server-api-config.md) — point the app at your admin panel
