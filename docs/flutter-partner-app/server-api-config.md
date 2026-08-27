---
sidebar_position: 7
---

# Server & API Configuration

## Change Server URL

To configure the server URL for the eMarket Partner App:

1. Open your admin panel, copy link from URL as shown below

   ![Server URL Admin](/img/flutter-partner-app/serverurladmin.webp)

2. In Android code go to lib > helper > utils > constant.dart and paste the URL

   ![Server URL Code](/img/flutter-partner-app/serverurladmin2.webp)

## Change API Parameters

You can change or add API parameters from `lib > helper > utils > apiAndParams.dart`. Here, all list of APIs and API parameters are listed that are used in the app.

![API Parameters](/img/flutter-partner-app/api.webp)

## Increase Product Load Limit

You can change how many items are fetched at a time when a request is sent to the server:

1. Go to lib > helper > Constant.dart
2. Find the parameter that controls the product load limit
3. Adjust the value as needed

![Limit](/img/flutter-partner-app/limit.webp)

## Privacy Policy URL for PlayStore

To get the privacy policy URL for your PlayStore submission:

1. First login to admin panel
2. Go to System > Privacy Policy
3. Use the URL provided there in your app store submissions

![Privacy](/img/flutter-partner-app/privacy.webp)
