---
sidebar_position: 1
---

# Run the App

Make sure you have completed [Partner App Installation](../installation.md) first — it covers installing Flutter, the JDK, and your IDE, and lists the versions eMarket requires.

Then open the partner app project folder in your IDE, let it fetch packages, and run it.

:::tip If the project will not build
- Confirm your versions match the table in [Partner App Installation](../installation.md) — a mismatched Flutter or JDK version is the most common cause
- Clear and refetch: `flutter clean` then `flutter pub get`
- In Android Studio, use **File → Invalidate Caches / Restart**
- If your firewall blocks the package download, disable it temporarily and run again
:::
