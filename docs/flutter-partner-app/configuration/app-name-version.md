---
sidebar_position: 3
---

# App Name & Version

## Change App Name

This is the label shown under the app icon on the home screen.

### For Android

Open `android > app > src > main > AndroidManifest.xml` and change the `android:label` string.

![Android App Name](/img/flutter-partner-app/appname2.webp)

### For iOS

Open `ios > Runner > Info.plist`, find `<key>CFBundleName</key>`, and change that string.

![iOS App Name](/img/flutter-partner-app/appname3.webp)

## Change App Version

1. Go to `pubspec.yaml`
2. Update `version: A.B.C+X`

![Version Change](/img/flutter-partner-app/version_1.webp)

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
