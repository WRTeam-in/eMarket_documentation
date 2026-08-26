---
sidebar_position: 9
---

# Additional Configuration

## Troubleshooting Flutter Issues

If you are encountering errors when running the eMarket Partner App, you can try these troubleshooting steps:

1. If firewall is on in your system, temporarily disable it and try to run the project
2. If your flutter channel is not stable, change it to stable:

   - Check your flutter channel in terminal by typing `flutter channel`

   ![Check Channel](/img/flutter-partner-app/ch1.webp)

   - If not in stable, type `flutter channel stable`

3. Go to Tools > Flutter > Flutter Clean
4. Go to file > invalidate cache/restart

## Flutter Version Management

### Upgrade to Flutter 2.x

If you need to upgrade to Flutter 2.x:

1. For upgrade, go to terminal in Android Studio and type `flutter upgrade`. It will automatically pick the latest version with stable channel
2. If you have updated to Flutter 2.x, after upgrade run `flutter doctor`. If you see an error like "license status unknown":

   ![Upgrade Error](/img/flutter-partner-app/upgrade1.webp)

3. Go to SDK Manager from the upper right corner, then go to Android SDK. Inside that select SDK Tools, then uncheck "Hide obsolete packages". Check "Android SDK Command-line tools (latest)" then apply and ok. It will download the latest version:

   ![SDK Tools](/img/flutter-partner-app/upgrade2.webp)

4. Now run `flutter doctor` again, and your error should be resolved

## Manage Languages

You can manage all app and website languages from the admin panel:

1. Go to Admin Panel > Language > Add Language OR Manage Languages

   ![Manage Languages](/img/flutter-partner-app/lan1.webp)

## Change Font Family

1. You need to select a font from Google Fonts only. Visit [https://fonts.google.com/](https://fonts.google.com/)

   ![Google Fonts](/img/flutter-partner-app/google-font.webp)

## Change Assets Images

Go to Assets > images folder. Here you have 2 folders: 1.webp and 2.svg. You can change your image to an existing image with the same name.

![Change Images](/img/flutter-partner-app/imageschange.webp)
