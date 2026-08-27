---
sidebar_position: 6
---

# Fonts & Assets

## Change Font Family

1. Select a font from Google Fonts only. Visit [https://fonts.google.com/](https://fonts.google.com/)

![Google Fonts](/img/flutter-partner-app/google-font.webp)

2. Copy the family name exactly as Google Fonts spells it, including capitals and spaces (for example `Poppins`, `Open Sans`)
3. Apply it in the app's text styles and run the app

## Change Assets Images

Replacing images and animations is the same for every WRTeam app, so it is covered in our common setup guide:

👉 **[Assets Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/assets)**

### Where the partner app keeps its assets

| Folder | Contents |
| ------ | -------- |
| `assets/svg/` | UI icons |
| `assets/svg/logo/` | App logo |
| `assets/images/` | Raster images |

Keep the same filename and extension when replacing a file and no code changes are needed.

:::warning Adding a new asset folder
Flutter ships the files directly inside each folder listed in `pubspec.yaml` and **does not descend into subfolders**. If you add a new folder, you must add its own line under `assets:` in `pubspec.yaml`, otherwise it is silently left out of the build with no error.
:::
