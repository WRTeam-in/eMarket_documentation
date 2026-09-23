---
sidebar_position: 7
---

# Fonts & Assets

## Change Font Family

The app ships with **Outfit**. The family is set in one place, so changing it updates every screen.

1. Select a font from Google Fonts only. Visit [https://fonts.google.com/](https://fonts.google.com/)
2. Copy the family name exactly as Google Fonts spells it, including capitals and spaces (for example `Poppins`, `Open Sans`)
3. Open `lib > helper > styles > appTypography.dart`

![Google Fonts](/img/flutter-app/google-font.webp)

4. Change the `fontFamily` value:

```dart
static const String fontFamily = 'Outfit';
```

5. Run the app

:::warning A misspelled font name fails at runtime, not at build time
The family name is looked up at runtime, so a typo will not show as a compile error — the app builds, then fails when it tries to load the font. Check the spelling against the Google Fonts page.
:::

The font sizes and weights used across the app are defined in the same file, below `fontFamily`. Changing only `fontFamily` keeps the existing sizing and swaps the typeface.

## Change Assets Images

Replacing images and animations is the same for every WRTeam app, so it is covered in our common setup guide:

👉 **[Assets Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/assets)**

### Where eMarket keeps its assets

The customer app's artwork is all SVG, under `assets/svg/`:

| Folder | Contents |
| ------ | -------- |
| `assets/svg/icons/` | UI icons |
| `assets/svg/illustrations/` | Illustrations, with `light/` and `dark/` variants |
| `assets/svg/logo/` | App logo and placeholder |
| `assets/svg/nav/` | Bottom navigation icons |

Keep the same filename and extension when replacing a file and no code changes are needed.

:::warning Adding a new asset folder
Flutter ships the files directly inside each folder listed in `pubspec.yaml` and **does not descend into subfolders**. If you add a new folder, you must add its own line under `assets:` in `pubspec.yaml`, otherwise it is silently left out of the build with no error.
:::
