---
sidebar_position: 6
---

# Store Settings

Configure your store's basic information and appearance. Navigate to **System → Store Settings**.

![Store Settings](/img/admin-panel/store_settings.webp)

## Sections

Store Settings groups configuration into tabs on left:

- **Store Setting** — app name, support info, logo, images, copyright
- **Address Setting** — store address, coordinates, currency
- **Other Setting** — cart, stock, date/time, country code
- **Delivery Boy Setting** — bonus, OTP verification
- **App Setting** — enable/disable apps, store URLs, version control
- **Frontend Home Setting** — homepage section toggles
- **SMTP Mail Setting**
- **Third Party API Credentials**
- **Seller Setting**
- **Login Setting**
- **Cart Setting**
- **Refer & Earn Setting**

## Store Setting Tab

- **Language tabs** — English, Arabic, Hindi (fill fields per language)
- **Translate Empty Fields** — auto-fills only blank fields in other languages
- **Translate & Overwrite** — auto-translates and replaces existing values
- **App Name** — store/app display name
- **Support Number** — customer support phone number
- **Support Email** — customer support email address
- **Logo** — store logo image upload
- **Fssai Lic Image** — FSSAI license image upload
- **Panel Login Background Image** — background image shown on admin login screen
- **Copyright Details** — footer copyright text

Click **Update** to save changes.

## Address Setting Tab

- **Language tabs** — English, Arabic, Hindi
- **Translate Empty Fields** / **Translate & Overwrite**
- **Address** — store address text
- **Latitude** / **Longitude** — store map coordinates
- **Store Currency (Symbol or Code)** — e.g. ₹, $, USD
- **Currency Code** — e.g. INR - India
- **Decimal Point** — number of decimal places for pricing
- **System Timezone** — e.g. Asia/Kolkata - GMT +05:30
- **Default City**

Click **Update** to save.

## Other Setting Tab

- **Maximum Items Allowed In Cart** — max items a customer can add at once
- **Minimum Order Amount**
- **Is Delivery Charge Refundable?** — toggle
- **Low stock limit** — threshold below which product marked low stock
- **Product Rating** — enable/disable product rating system
- **Few Quantity Left Alert** — quantity threshold to show "few left" label
- **Date Format** — display format used site-wide
- **Time Format** — 12-hour or 24-hour
- **Country Code** — default country code for phone numbers

Click **Update** to save.

## Delivery Boy Setting Tab

- **Bonus Settings** — enable/disable delivery boy bonus
- **Bonus Type** — e.g. Fixed/Salaried
- **Order Delivery OTP System** — require OTP to confirm delivery

Click **Update** to save.

## App Setting Tab

Controls app maintenance mode — disabling here stops that app from working until re-enabled.

- **Language tabs** — English, Arabic, Hindi
- **Translate Empty Fields** / **Translate & Overwrite**
- **Customer App (Enable/Disable)**
- **Delivery Boy App (Enable/Disable)**
- **Seller App (Enable/Disable)**
- **Play Store Url**
- **App Store Url**
- **Android Version System Status** — toggle version enforcement
- **IOS Version System Status** — toggle version enforcement

Click **Update** to save.

## Frontend Home Setting Tab

Controls what sections appear on app/website homepage.

- **Display Category Section in Home Page?** + **Count Category Display in Homepage**
- **Display Brand Section in Home Page?** + **Count Brand Display in Homepage**
- **Display Seller Section in Home Page?** + **Count Seller Display in Homepage**
- **Display Country Section in Home Page?** + **Count Country in Home Page**

Click **Update** to save.

## SMTP Mail Setting Tab

- **Mailer** — mail driver (e.g. SMTP)
- **From Email ID** — email used in SMTP mail system
- **Reply To Email ID**
- **SMTP Email Password**
- **SMTP Host** — e.g. smtp.gmail.com
- **SMTP Port** — TLS: 587, SSL: 465
- **SMTP Email Content Type** — e.g. HTML
- **SMTP Encryption** — e.g. SSL
- **Email Test** — enter address, click **Test Mail** to verify config

Click **Update** to save.

## Third Party API Credentials Tab

- **Place Api Key**
- **Map Api Key**
- **Gemini Key**

## Seller Setting Tab

- **One Seller Cart (Enable/Disable)** — restrict cart to items from one seller only
- **Seller Commission (%)** — platform commission on seller orders

Click **Update** to save.

## Login Setting Tab

- **Phone Login (Enable/Disable)**
- **Apple Login (Enable/Disable)**
- **Phone Auth OTP (Enable/Disable)**
- **Firebase Authentication (Enable/Disable)**
- **Google Login (Enable/Disable)**
- **Email Login (Enable/Disable)**
- **Phone Auth Password (Enable/Disable)**
- **Custom SMS Gateway OTP based (Enable/Disable)**

Click **Update** to save.

## Cart Setting Tab

- **Cart Notification** — enable/disable abandoned cart reminders
- **Notification Interval** — minutes between reminder notifications
- **Notification Delay After Cart Addition** — minutes to wait before first reminder
- **Notification Stop Time** — minutes after which reminders stop

Click **Update** to save.

## Refer & Earn Setting Tab

- **Minimum Order for Referral** — minimum order amount required to trigger referral credit
- **Referral Credit First Order** — credit amount given for referred user's first order

Click **Update** to save.

## Configuration Steps

1. Log in to admin panel
2. Navigate to **System → Store Settings**
3. Select **Store Setting** tab (default)
4. Choose language tab if setting translated content
5. Fill App Name, Support Number, Support Email
6. Upload Logo, Fssai Lic Image, Panel Login Background Image as needed
7. Enter Copyright Details
8. Click **Update**

## Important Notes

- Logo, Fssai Lic Image, Panel Login Background Image accept common image formats (PNG/JPG)
- Use **Translate Empty Fields** to avoid overwriting existing translated content by mistake
- Copyright Details appears in storefront/panel footer


## Additional Charges 

- You can configure additional charges for orders from the admin panel.

- Navigate to: **System → Store Settings → Other Setting**

Here you can:

- Enable or disable additional charges
- Set additional charge title
- Configure additional charge amount

This feature is useful for:
- Packaging charges
- Handling charges
- Service fees

## Delivery Charges Refundable

You can manage delivery charge refund settings from:
**Settings → Store Settings → Other Settings**


Enable the **Delivery Charges Refundable** toggle if you want delivery charges to be refunded to customers when an order is cancelled or returned.

Disable this option if delivery charges should remain non-refundable.

### Notes

- When enabled, delivery charges will be included in refund calculations.
- When disabled, only product amount will be refunded.
- This setting applies to all orders in the system.

## Troubleshooting

### Common Issues

1. **Logo Not Uploading**

   - Check file format
   - Verify file size
   - Ensure proper permissions

2. **Settings Not Saving**
   - Check internet connection
   - Verify admin permissions
   - Clear browser cache

## Support

For assistance with store settings, contact our support team:

- **Email:** support@wrteam.in
- **Website:** [https://wrteam.in](https://wrteam.in)
- **Support Hours:** Monday to Friday, 9:00 AM to 6:00 PM IST (GMT +5:30)
