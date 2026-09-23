---
sidebar_position: 2
---

# App Icon

The customer app does not use an icon generator package, so replace the icon files manually in the platform-specific directories.

💡 You can use various free tools available online to generate all the required size-specific icon files from a single logo image, which you can then replace directly in the respective folders.

## 📱 Android

![Android mipmap folders](/img/flutter-app/appicon-android-mipmap.webp)

All icons live under `android/app/src/main/res/`. Each density folder contains **four** files:

```
mipmap-mdpi/     mipmap-hdpi/     mipmap-xhdpi/     mipmap-xxhdpi/     mipmap-xxxhdpi/
  ic_launcher.png
  ic_launcher_background.png
  ic_launcher_foreground.png
  ic_launcher_monochrome.png
```

Replace all four in **every** density folder.

:::warning Replace all four, not just `ic_launcher.png`
Android 8 and above ignore `ic_launcher.png` and build the icon from the background and foreground layers instead, as defined in `mipmap-anydpi-v26/ic_launcher.xml`. If you only replace `ic_launcher.png`, your new icon will not appear on any modern device — the old one keeps showing, with no error.

You do not need to edit `ic_launcher.xml` itself. Just replace the PNGs it points at.
:::

## 🍏 iOS

![iOS AppIcon.appiconset](/img/flutter-app/appicon-ios-appiconset.webp)

Prepare a set of iOS app icons using Apple's required sizes.

Replace the existing icons inside `ios/Runner/Assets.xcassets/AppIcon.appiconset/`. The folder holds **21 `.png` files** plus a `Contents.json` that maps each file to a size and idiom.

Keep the existing filenames so `Contents.json` still resolves them. If you change filenames or add sizes, update `Contents.json` to match — or regenerate the whole set with Xcode's asset tool.

## ✅ After replacing

Clean and rebuild your project to apply the changes:

```bash
flutter clean
flutter pub get
flutter run
```

Android caches launcher icons aggressively. If the old icon persists on a test device, uninstall the app and reinstall it rather than doing a hot restart.
