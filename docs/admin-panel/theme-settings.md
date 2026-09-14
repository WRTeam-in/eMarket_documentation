---
sidebar_position: 10
---

# Theme Settings

Customize the platform's color scheme from here. Navigate to **Modules → Theme Settings**.

These colors apply to the **website** and the **customer app** — both download the palette from the server, so changing your brand color here does not require rebuilding or resubmitting the app.

The admin panel's own interface and the partner app are not affected by these settings.

![Theme Settings](/img/admin-panel/theme-settings.png)

## Primary & Neutral Color (per module)

Primary and Neutral colors are stored **per module**. Use the module switcher in the header to pick the module you want to theme (Grocery, Pharmacy, Ecommerce, Food Delivery, etc.) before editing — each module keeps its own brand palette.

### Primary Color

- Used for main brand elements and actions (buttons, links, highlights)
- Enter hex code or pick from color swatch
- A live preview generates an 11-shade palette (50 → 950) used for buttons, links, and brand accents

### Neutral Color

- Used for text, backgrounds, borders, and neutral elements
- Enter hex code or pick from color swatch
- A very light pick (e.g. white) is blocked with a warning — it would make borders and dividers invisible against the UI

Click **Save** to persist both colors and their generated palettes for the currently selected module. Changes apply immediately, no reload needed.

## Status Colors (default module only)

The Success/Error/Warning/Info section only appears when the currently selected module is the system's **default module** (set in **Settings → Modules**). Status colors are global/shared across all modules, so they're editable only from the default module to avoid conflicting values.

1. **Success Color** — success messages and valid states
2. **Error Color** — error messages and critical states
3. **Warning Color** — warning messages and alerts
4. **Info Color** — information messages and highlights

Each status color has its own hex input, shade preview, **Reset to Default**, and **Save** button — configure independently.

## Configuration Steps

1. Log in to admin panel
2. Navigate to **Theme Settings**
3. Select the module to theme from the header module switcher
4. Set Primary/Neutral Color hex codes, click **Save**
5. Switch to the default module to set Status Colors (Success, Error, Warning, Info) as needed, click **Save** per section
6. Use **Reset to Default** to revert any status color to its original value

## Important Notes

- Changes apply to the website and customer app after save
- The admin panel interface and the partner app keep their own colors and are not changed here
- The customer app picks up the new palette on next launch; it caches the last palette so it still renders correctly offline
- Primary and Neutral colors are per-module; Status colors are global and shown/edited only on the default module, but apply across all modules
- You enter one Primary and one Neutral color per module; the system generates the full shade range from each
- Light and dark mode share the same palette and are not configured separately
- Use accessible color contrast for readability
- Reset to Default restores original color for that section only

## Support

For assistance with theme configuration, contact our support team:

- **Email:** support@wrteam.in
- **Website:** [https://wrteam.in](https://wrteam.in)
- **Support Hours:** Monday to Friday, 9:00 AM to 6:00 PM IST (GMT +5:30)
