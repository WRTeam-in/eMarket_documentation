---
sidebar_position: 6
---

# Map and Location Services

## Google Maps or OpenStreetMap

The admin panel decides which map the app shows: **Map Provider** in [Store Settings](../admin-panel/store-settings.md). The app picks up a change the next time it opens, with no new build.

- **Google Maps** needs the app keys set up below.
- **OpenStreetMap** shows free map tiles and needs no Google key for the map itself. On OpenStreetMap the map does not rotate and has no zoom buttons or blue location dot.

:::note OpenStreetMap only replaces the map you see
Address search, and the address of a point picked on the map, still go through the **Place Api Key** in your admin panel, whichever provider you choose.
:::

:::warning The free OpenStreetMap tiles are for light use
The app loads its tiles from the public OpenStreetMap server and shows the "© OpenStreetMap contributors" credit it requires. OpenStreetMap can block apps with heavy traffic without notice, so check its [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/) before you launch.
:::

## Google Maps Keys

With Google Maps, the app needs its own Google Maps key to show maps. Address search uses the key in your admin panel instead — see [Map API Key Settings](../admin-panel/map-api-key-settings.md).

In Google Cloud, enable **Maps SDK for Android** and **Maps SDK for iOS**, and keep a billing account linked or maps stay blank even inside the free tier:

👉 **[Firebase Billing, Maps & Places Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase-billing)**

## Copy your keys

In [Google Cloud Console](https://console.cloud.google.com/) → **Credentials**, copy **Android key (auto created by Firebase)** and **iOS key (auto created by Firebase)**.

![Android and iOS keys in Google Cloud Credentials](/img/flutter-app/map-key-credentials.webp)

## Android

Replace the placeholder in `android > app > src > main > AndroidManifest.xml`:

```xml title="android/app/src/main/AndroidManifest.xml"
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="PLACE_GOOGLE_ANDROID_MAP_API_KEY_HERE" />
```

![Android map key in AndroidManifest.xml](/img/flutter-app/map-key-android-manifest.webp)

## iOS

Replace the placeholder in `ios > Runner > AppDelegate.swift`:

```swift title="ios/Runner/AppDelegate.swift"
GMSServices.provideAPIKey("PLACE_HERE_GOOGLE_MAP_IOS_KEY")
```

![iOS map key in AppDelegate.swift](/img/flutter-app/map-key-ios-appdelegate.webp)

## Which key does what

- **Map, markers, zoom** — the app keys above, Maps SDK only. With OpenStreetMap, no key.
- **Address search and the picked address** — your admin panel's Place API key, which never ships inside the app.

Grey map means the app key, the Maps SDK, or billing. Empty search means the panel key.
