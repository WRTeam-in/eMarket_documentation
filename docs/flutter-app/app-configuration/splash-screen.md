---
sidebar_position: 3
---

# Splash Screen

The splash screen is what shows while the app loads your theme, settings and language. It draws your logo, your app name, and a line of text at the bottom.

Its background colour comes from the palette your **admin panel** serves — there is nothing to change in the code for that. What you replace here is the logo and the text.

## 🖼️ Replace the Logo

![Logo assets folder](/img/flutter-app/splash-logo-assets.png)

The logo files live in `assets/svg/logo/`:

| File | Used for |
| ---- | -------- |
| `logo_light.svg` | The splash logo in **light** mode |
| `logo_dark.svg` | The splash logo in **dark** mode |
| `placeholder.svg` | The fallback image when a product image fails to load — not part of the splash |

Replace `logo_light.svg` and `logo_dark.svg` with your own artwork.

**Keep the filenames exactly as they are.** They are referenced by name in `lib/helper/utils/appAssets.dart`, so a renamed file will not be found.

:::warning You need two logo files, not one
The app does not recolour one logo at runtime. It picks a whole file based on the theme.

Any part of your logo that is not brand-coloured is near-black in `logo_light.svg` and white in `logo_dark.svg` — each file only reads on the surface it was cut for. If you supply the same artwork twice, your logo will disappear into the background in one of the two modes.
:::

**Format:** SVG, square. The shipped files use a `0 0 512 512` viewBox and are drawn at 120×120 on the splash.

:::note Check your logo against every module theme
The splash background is the surface colour from your palette, and your logo sits on top of it. If you use **module-wise themes**, each module carries its own palette — so the same two logo files have to read on every one of them.

Set your colours first, then check the splash in each module before you ship. If one palette makes the logo hard to see, adjust that palette or the artwork, so the app looks right whichever module a customer opens first.
:::

## ✏️ App Name and "Made by" Text

The splash draws two pieces of text:

**The app name** comes from `Constant.appName` in `lib/helper/utils/constant.dart` — see [App Name & Version](./app-name-version.md).

**The line at the bottom** ships as `"made_by": "Made With ❤️ By WRTeam Design"`. Change it in your admin panel language settings, and in `assets/en.json` for the offline fallback.

## ✅ After Replacing

```bash
flutter clean
flutter pub get
flutter run
```

Test in **both** light and dark mode. Most splash problems only show in one of the two.

:::note The splash stays up until your server answers
It is not on a timer — it waits for the theme, app settings and language to load, so a slow server means a slow splash. If a request fails, the splash is replaced with a "no internet" screen and a Try Again button.
:::
