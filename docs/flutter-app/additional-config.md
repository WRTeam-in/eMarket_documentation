---
sidebar_position: 7
---

# Additional Configuration

## Enable CloudKit iOS

This step is only needed in iOS for multiple file select because in iOS, any version below 11.0 will require an Apple Developer Program account to enable CloudKit.

This feature is used for image upload in my orders for review product image upload.

Follow the steps to enable CloudKit for iOS at [Apple Developer documentation](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitQuickStart/EnablingiCloudandConfiguringCloudKit/EnablingiCloudandConfiguringCloudKit.html).

![Cloud 1](/img/flutter-app/cloud1.webp)
![Cloud 2](/img/flutter-app/cloud2.webp)

## Increase Product Load Limit

You can change how many items are fetched at a time when a request is sent to the server:

1. Go to lib > helper > Constant.dart
2. Find the parameter that controls the product load limit
3. Adjust the value as needed

![Limit](/img/flutter-app/limit.webp)

## Privacy-Policy PlayStore

To get the privacy policy URL for your PlayStore submission:

1. First login to admin panel
2. Go to System > Privacy Policy
3. Use the URL provided there in your app store submissions

![Privacy](/img/flutter-app/privacy.webp)
