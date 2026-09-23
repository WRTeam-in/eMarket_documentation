---
sidebar_position: 24
---

# Manage Time Slots

Navigate to **Delivery Settings → Manage Time Slots**. This feature is **module-wise** — configure it separately per module (Grocery, Pharmacy, eCommerce, Food Delivery, etc.) using the module switcher.

![Manage Time Slots](/img/admin-panel/time_slots.webp)

## Time Slot Config

- **Enable / Disable Time Slots** — toggle the feature on/off for the selected module
- **Slot Type**
  - **Fixed Time Window** — customers pick a delivery window from a defined list of slots
  - **Quick Delivery** — delivery estimated by duration instead of a fixed window
- **Delivery Estimate Days** — days ahead delivery is estimated for
- **How many Days you want to allow?** — how many days in advance a customer can schedule delivery

Click **Add** to save the config.

## Add New Time Slot

Click **Add New Time Slot** to open the form.

![Add Time Slot](/img/admin-panel/time_slots_add.webp)

- **Title** — slot label (e.g. "Morning 9AM to 12PM")
- **Duration (minutes)** — shown for Quick Delivery slot type; order delivered within this many minutes of being placed
- **Last Order Time** (24 hrs format, optional) — cutoff time after which the slot is no longer offered
- **Free Delivery** — enable free delivery for this slot; disabled automatically while active subscription plans exist (remove them first from Subscriptions to enable)
- **Status** — Activate / Deactivate

Supports multi-language input (English plus any configured locales) with **Translate Empty Fields** / **Translate & Overwrite** helpers. Click **Save**.

## Important Notes

- Time slot configuration is per module — set it separately for each module you use.
- Free delivery on a slot cannot be enabled while active subscription plans exist for that module.
