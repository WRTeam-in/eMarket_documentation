---
sidebar_position: 4
---

# Server and API Configuration

## Server URL Setup

1. Open your admin panel, copy link from URL as shown below

![Server URL Admin](/img/flutter-app/serverurladmin.webp)

2. In Android code go to lib > helper > utils > constant.dart and paste the URL

![Server URL Code](/img/flutter-app/serverurladmin2.webp)

## Change Default Country Code For OTP

The country selected by default on the login screen comes from the **admin panel**:

1. Log in to admin panel
2. Go to **Store Settings → Other Setting** tab
3. Set the **Country Code** (for example `+91`)
4. Click **Update**

The app reads this on startup and preselects the matching country, so this is the setting you normally want.

### Fallback in code

Until the app has loaded settings from the server (for example on first launch with no internet), it falls back to the `initialCountryCode` value in `lib > helper > utils > constant.dart`:

```dart
static String initialCountryCode = "IN";
```

Set it to a two-letter ISO country code such as `"IN"` or `"US"` — note this is the **ISO code**, not the dial code. Leaving it empty means no country is preselected until settings load.

![OTP Country Code](/img/flutter-app/otp.webp)
## Increase Product Load Limit

You can change how many items are fetched at a time when a request is sent to the server.

1. Go to `lib > helper > utils > constant.dart`
2. Adjust these values as needed:

```dart
static int defaultImagesLoadLimitAtOnce = 10;
static int defaultDataLoadLimitAtOnce = 10;
static int defaultGridDataLoadLimitAtOnce = 20;
```

![Limit](/img/flutter-app/limit.webp)
