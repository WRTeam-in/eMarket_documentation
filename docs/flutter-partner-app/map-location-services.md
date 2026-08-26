---
sidebar_position: 4
---

# Map & Location Services

The eMarket Partner App includes location-based features for vendors and delivery partners to track orders, manage deliveries, and optimize delivery routes.

## Google Maps Integration

To use Google Maps in the Partner App, you need to set up Google Maps API with proper API keys:

### For Android

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google Maps API for Android
4. Create an API key with appropriate restrictions

   ![Google Maps API Setup](/img/flutter-partner-app/mapAPI1.webp)

5. Add the API key to your project:

   - Open `android/app/src/main/AndroidManifest.xml`
   - Add the following inside the `<application>` tag:

   ```xml
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="YOUR_API_KEY_HERE" />
   ```

   ![Android Maps Config](/img/flutter-partner-app/mapAPI2.webp)

### For iOS

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google Maps API for iOS
4. Create an API key with appropriate restrictions

   ![Google Maps API Key](/img/flutter-partner-app/mapAPI3.webp)

5. Add the API key to your project:

   - Open `ios/Runner/AppDelegate.swift` or create it if it doesn't exist
   - Add the following code:

   ```swift
   import UIKit
   import Flutter
   import GoogleMaps

   @UIApplicationMain
   @objc class AppDelegate: FlutterAppDelegate {
     override func application(
       _ application: UIApplication,
       didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
     ) -> Bool {
       GMSServices.provideAPIKey("YOUR_API_KEY_HERE")
       GeneratedPluginRegistrant.register(with: self)
       return super.application(application, didFinishLaunchingWithOptions: launchOptions)
     }
   }
   ```

   ![iOS Maps Config](/img/flutter-partner-app/mapAPI4.webp)

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
