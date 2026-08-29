---
sidebar_position: 5
---

# App Theme

App colors are **managed from the admin panel, not from the code**. The app downloads its palette from the server, so you do not need to rebuild or resubmit the app to change your brand color.

## Change your colors

1. Log in to admin panel
2. Go to **System → Theme Settings**
3. Set **Primary Color** and **Neutral Color**, then click **Save**
4. Optionally set the **Success / Error / Warning / Info** status colors, saving each section
5. Reopen the app — the new colors are applied

See [Theme Settings](../../admin-panel/theme-settings.md) for a full description of each field.

## How it works

You enter one primary and one neutral color. The server expands each into a full 11-shade range and serves the result from `api/theme`. The app fetches that palette, caches it on the device, and refreshes in the background whenever the server reports a change.

Light and dark mode both use the same palette — they differ only in which shade each element picks, so you do not configure them separately.

:::note What these colors do not change
These settings apply to the customer app and the website. The admin panel's own interface and the partner app are not affected.
:::
