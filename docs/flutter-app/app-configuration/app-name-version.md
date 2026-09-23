---
sidebar_position: 4
---

# App Name & Version

## Change App Name

The app name is stored in **four separate places**, and each one controls something different. Changing one does not change the others, so for a full rename you need all four.

| Where | What it controls |
| ----- | ---------------- |
| `AndroidManifest.xml` | The label under the app icon on Android |
| `Info.plist` | The label under the app icon on iOS |
| `constant.dart` | The name drawn on the splash screen |
| Your language file | The name used inside the app — around 20 screens |

### For Android

Open `android > app > src > main > AndroidManifest.xml` and change the `android:label` string.

![Android App Name](/img/flutter-app/androidname.webp)

### For iOS

Open `ios > Runner > Info.plist` and change **both** of these strings:

- `CFBundleDisplayName` — the name shown under the icon on the home screen
- `CFBundleName` — the short name iOS falls back to, limited to 15 characters

![iOS App Name](/img/flutter-app/iosname.webp)

### For the splash screen

Open `lib > helper > utils > constant.dart` and change `appName`:

```dart
static String appName = "eMarket";
```

This is the name drawn on the splash screen, and the label Android shows in the recent-apps switcher.

:::note Why this one is hardcoded
The splash is the first screen the app paints, before the language data has downloaded. A translation key there would render as `app_name` on a cold start, so the splash reads this value directly instead.
:::

### For the rest of the app

Everywhere else — payment screens, downloaded invoice filenames, push notification titles, and the merchant name shown in the Stripe payment sheet — uses the `app_name` translation key.

Change it in your **admin panel language settings**, then reopen the app.

:::warning Do not change only `assets/en.json`
`assets/en.json` is the offline fallback the app uses before it reaches your server. The live values come from the admin panel, so a name changed only in `en.json` is replaced by the panel's value as soon as the app loads.

Change it in the admin panel first. Update `en.json` as well if you want the fallback to match.
:::

Your logo is a separate asset and is not affected by any of this — see [Splash Screen](./splash-screen.md).

## Change App Version

1. Go to `pubspec.yaml`
2. Update `version: A.B.C+X`

![Version Change](/img/flutter-app/version_1.webp)

For Android:

- `A.B.C` represents the versionName, such as 1.0.0
- `X` (the number after the `+`) represents the versionCode, such as 1, 2, 3

For iOS:

- `A.B.C` represents the `CFBundleShortVersionString`, such as 1.0.0
- `X` (the number after the `+`) represents the `CFBundleVersion`, such as 1, 2, 3

**Do not forget** to run `flutter pub get`, then `flutter build` or `flutter run`, after this step.

:::tip Every store upload needs a higher versionCode
Both stores reject a build whose version code is not higher than the previous upload. Increment the number after the `+` on every release, even for a small fix.
:::
