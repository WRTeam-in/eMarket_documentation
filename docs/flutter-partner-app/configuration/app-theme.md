---
sidebar_position: 5
---

# App Theme

To change the partner app's colors, edit `lib > helper > styles > colorsRes.dart`.

In Flutter a color code starts with `0xff`, so add your hex value after those four characters. You can change the primary, secondary, and font colors.

![App Color](/img/flutter-partner-app/appcolor.webp)

After editing, rebuild the app for the change to take effect.

:::info The partner app is themed in code, not from the admin panel
The admin panel's **Theme Settings** apply to the website and the customer app only. The partner app has its own colors in `colorsRes.dart`, so changing your brand color there does not affect this app — and a color change here requires a new build and a store update.
:::
