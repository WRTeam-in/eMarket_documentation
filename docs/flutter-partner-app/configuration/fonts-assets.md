---
sidebar_position: 6
---

# Fonts & Assets

## Change Font Family

The partner app ships with **Lato**, loaded from Google Fonts. It is set in one place for both light and dark mode.

1. Pick a font on [Google Fonts](https://fonts.google.com/).

![Google Fonts](/img/flutter-app/google-font.webp)

2. Open `lib > main.dart` and find the two `GoogleFonts.latoTextTheme(` lines, one under `theme:` and one under `darkTheme:`:

```dart title="lib/main.dart"
theme: ColorsRes.lightTheme.copyWith(
  textTheme: GoogleFonts.latoTextTheme(
    ThemeData(brightness: Brightness.light).textTheme,
  ),
),
darkTheme: ColorsRes.darkTheme.copyWith(
  textTheme: GoogleFonts.latoTextTheme(
    ThemeData(brightness: Brightness.dark).textTheme,
  ),
),
```

3. Replace `latoTextTheme` in **both** places with your font's method, for example `poppinsTextTheme` for Poppins or `openSansTextTheme` for Open Sans: the font name in lower camel case, followed by `TextTheme`.
4. Run the app.

:::tip A wrong method name stops the build
If the name does not match a Google Font, the app does not build. Type `GoogleFonts.` in your editor to see the available names.
:::

## Change Assets Images

Replacing images and animations is the same for every WRTeam app, so it is covered in our common setup guide:

👉 **[Assets Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/assets)**

### Where the partner app keeps its assets

| Folder | Contents |
| ------ | -------- |
| `assets/svg/` | UI icons |
| `assets/svg/logo/` | App logo (`logo.svg`) and placeholder (`placeholder.svg`) |
| `assets/images/` | Launcher icon sources and the background of the account type and forgot password screens |
| `assets/mapTheme/` | Google Maps styles for light (`dayMode.json`) and dark (`nightMode.json`) mode |

Keep the same filename and extension when replacing a file and no code changes are needed.

:::warning Adding a new asset folder
Flutter ships the files directly inside each folder listed in `pubspec.yaml` and **does not descend into subfolders**. If you add a new folder, you must add its own line under `assets:` in `pubspec.yaml`, otherwise it is silently left out of the build with no error.
:::
