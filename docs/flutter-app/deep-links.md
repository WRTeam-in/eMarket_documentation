---
sidebar_position: 7
---

# Deep Links

Deep links open shared **product**, **category**, **seller** and **brand** links in the app instead of the browser.

Set your domain in the three places below, and use the same domain in all three. If you do not have the website, use your admin panel URL instead.

## 1. Set your website URL

Open `lib > helper > utils > constant.dart`:

```dart title="lib/helper/utils/constant.dart"
static String websiteUrl = "https://shop.example.com/";
```

![Website URL in constant.dart](/img/flutter-app/deep-link-website-url.png)

## 2. Android

Open `android > app > src > main > AndroidManifest.xml` and replace the demo `android:host` lines with **one** line for your domain. Keep the `android:pathPattern` lines as they are.

```xml title="android/app/src/main/AndroidManifest.xml"
<data android:scheme="https" />
<data android:host="shop.example.com" />
```

![Deep link host in AndroidManifest.xml](/img/flutter-app/deep-link-android-host.png)

## 3. iOS

Open `ios > Runner > Runner.entitlements` and replace the demo entries with your domain — domain only, no `https://` and no trailing slash.

```xml title="ios/Runner/Runner.entitlements"
<key>com.apple.developer.associated-domains</key>
<array>
    <string>applinks:shop.example.com</string>
</array>
```

![Associated domain in Runner.entitlements](/img/flutter-app/deep-link-ios-entitlements.png)