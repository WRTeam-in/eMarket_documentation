---
sidebar_position: 9
---

# Additional Configuration

## Troubleshooting Flutter Issues

If you are encountering errors when running the eMarket Partner App, try these steps:

1. Confirm your Flutter and JDK versions match the table in [Partner App Installation](./installation.md) — a version mismatch is the most common cause
2. Clear and refetch packages: `flutter clean` then `flutter pub get`
3. In Android Studio, use **File → Invalidate Caches / Restart**
4. If your firewall blocks the package download, disable it temporarily and run again

## Flutter Version Management

If `flutter doctor` reports **"license status unknown"** after changing Flutter versions:

![Upgrade Error](/img/flutter-partner-app/upgrade1.webp)

1. Open **SDK Manager** from the upper right corner, then go to **Android SDK**
2. Select the **SDK Tools** tab
3. Uncheck **Hide obsolete packages**
4. Check **Android SDK Command-line tools (latest)**, then click Apply and OK to download it

![SDK Tools](/img/flutter-partner-app/upgrade2.webp)

5. Run `flutter doctor` again — the error should be resolved

:::warning `flutter upgrade` moves you off the tested version
eMarket 4.0.0 is built and tested against Flutter 3.44.8. Running `flutter upgrade` pulls the newest stable release, which may be newer than that and can break the build. To return to the tested version, check it out directly in your Flutter SDK folder:

```bash
git checkout 3.44.8
flutter --version
```
:::

## Looking for something else?

| Task | Where it lives |
| ---- | -------------- |
| Change languages | [Languages](./configuration/languages.md) |
| Change font family | [Fonts & Assets](./configuration/fonts-assets.md) |
| Replace images | [Fonts & Assets](./configuration/fonts-assets.md) |
| Change app colors | [App Theme](./configuration/app-theme.md) |
| Change server URL | [Server & API Configuration](./server-api-config.md) |
