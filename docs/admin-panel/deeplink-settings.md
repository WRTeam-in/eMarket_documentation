---
sidebar_position: 15
---

# Deeplink Settings

The **Deeplink Schema** tells your website which app to open when a customer taps **Open in app**. It must be the same value as the scheme built into your customer app.

![Deeplink Settings](/img/admin-panel/deeplink-settings.webp)

1. In the admin panel, go to **Settings → Deeplink Settings**.
2. In **Deeplink Schema**, enter your app's scheme, for example `mystore`: lowercase, without `://`. It must match `DEEP_LINK_SCHEME` in the customer app's `config/deep_link.xcconfig`. See [Deep Links](../flutter-app/deep-links.md).
3. Click **Update**.

Leave the field empty to turn **Open in app** off. The website then keeps every link in the browser, and the app itself is not affected.
