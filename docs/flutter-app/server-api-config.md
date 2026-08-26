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

Go to lib > helper > Constant.dart file. Inside that, the defaultCountryCode variable is available where you have to change country code to your language code.

![OTP Country Code](/img/flutter-app/otp.webp)

## Deeplink Setup

1. First download the google files from this link: [Server Side Deeplink Files](https://drive.google.com/drive/folders/1LbSXPmTRvz6-VWdr4isJz9AE00p8ynJ6)
2. Open both files in any text editor

![Deeplink 1](/img/flutter-app/deep-link-1.webp)

![Deeplink 2](/img/flutter-app/deep-link-2.webp)

3. After making changes, save both files (Note - Keep the name proper and the same for both files)
4. Open server > Go to admin panel root folder
5. You will find a .well-known folder on root directory
6. If you don't see that folder, enable settings to view hidden files
7. If you still don't find the files, create a new directory named **.well-known** (Make sure the name starts with a dot [.])
8. Add both saved files inside the **.well-known** folder
9. In server > admin panel root folder, you will find a **.htaccess** file. Open it and make changes as needed

![Deeplink 3](/img/flutter-app/deep-link-3.webp)

10. For further steps, open customer app code in Android Studio

![Deeplink 4](/img/flutter-app/deep-link-4.webp)

![Deeplink 5](/img/flutter-app/deep-link-5.webp)

## Change API Parameter

You can change or add API parameters from lib > Helper > String.dart. Here, all list of APIs and API parameters are listed that are used in the app.

![API Parameters](/img/flutter-app/api.webp)
