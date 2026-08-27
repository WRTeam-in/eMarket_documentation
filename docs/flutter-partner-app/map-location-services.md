---
sidebar_position: 4
---

# Map & Location Services

The eMarket Partner App includes location-based features for vendors and delivery partners to track orders, manage deliveries, and optimize delivery routes.

## Google Maps Integration

Setting up your Google Maps API keys and billing is the same for every WRTeam app, so the full steps live in our common setup guide:

👉 **[Firebase Billing, Maps & Places Setup](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase-billing)**

That guide covers upgrading Firebase to the Blaze plan, linking a billing account, enabling the required APIs, creating your keys, and adding them to `AndroidManifest.xml` and `AppDelegate.swift`.

The partner app can reuse the **same** Google Maps keys as the customer app — they are per-project, not per-app.

:::note
Google Maps and Places return nothing without a billing account attached, even inside the free tier. If maps render blank, check that first.
:::

## Delivery Partner Location Tracking

The Partner App includes real-time location tracking for delivery partners:

1. Enable background location access:

   - For Android, update `android/app/src/main/AndroidManifest.xml`:

     ```xml
     <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
     <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
     <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
     ```

   - For iOS, update `ios/Runner/Info.plist`:
     ```xml
     <key>NSLocationWhenInUseUsageDescription</key>
     <string>This app needs access to location when open to track deliveries.</string>
     <key>NSLocationAlwaysUsageDescription</key>
     <string>This app needs access to location when in the background for delivery tracking.</string>
     <key>UIBackgroundModes</key>
     <array>
       <string>location</string>
     </array>
     ```

2. The app will send periodic location updates to the server during active deliveries

   ![Delivery Tracking](/img/flutter-partner-app/map1.webp)

## Route Optimization

The Partner App includes delivery route optimization features:

1. Optimal route calculation based on multiple delivery locations
2. Traffic-aware routing using Google Maps Directions API
3. Estimated arrival times for each delivery point

   ![Route Optimization](/img/flutter-partner-app/map2.webp)

## Delivery Zone Management

Vendors can configure their delivery zones within the app:

1. Set delivery radius from store location
2. Define custom polygon delivery areas
3. Set different delivery fees based on zones

   ![Delivery Zones](/img/flutter-partner-app/map3.webp)

## Store Location Management

Vendors can manage their store location details:

1. Set precise store location on map
2. Add store address details
3. Configure operating hours

   ![Store Location](/img/flutter-partner-app/map4.webp)

For any issues with maps or location services, ensure all API keys are configured correctly and all required permissions are granted by the user.
