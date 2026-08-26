---
sidebar_position: 5
---

# Firebase Integration

## Create Flutter Firebase App

**For creating a firebase app from flutter, you must install firebase cli first.**

To install firebase cli, follow [https://firebase.google.com/docs/cli](https://firebase.google.com/docs/cli)

**Important Notes:**

- You need to add Partner app in eMarket customer's firebase project only, otherwise FCM notification will not work.
- After firebase cli installation, follow these steps:

### Steps to Create Firebase App

1. Create flutter app:

   - Press "Flutter" option

   ![Flutter Option](/img/flutter-partner-app/fcm6.webp)

   - Press next

   ![Press Next](/img/flutter-partner-app/fcm7.webp)

2. Go to Android Studio terminal and run "firebase login" command:

   - Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? Set "YES" and press enter
   - Login to firebase from the browser when prompted

   ![Firebase Login](/img/flutter-partner-app/fcm8.webp)

3. Run the first command shown in the Firebase console in Android Studio terminal:

   ![First Command](/img/flutter-partner-app/fcm9.webp)

4. Run the second command shown in the Firebase console in Android Studio terminal:

   ![Second Command](/img/flutter-partner-app/fcm10.webp)

   - Once output is shown, press "Enter" in terminal

   ![Press Enter](/img/flutter-partner-app/fcm11.webp)

   - When prompted again, press "y" in terminal

   ![Press Y](/img/flutter-partner-app/fcm12.webp)

5. Press continue in the Firebase console

   ![Continue](/img/flutter-partner-app/fcm13.webp)

6. Press "continue to console"

   ![Continue to Console](/img/flutter-partner-app/fcm14.webp)

Your firebase setup is now complete.

## Set Up Push Notifications

### iOS Configuration

For iOS, you need to perform these additional steps:

1. In Xcode, open the project
2. In the Project Navigator (the left-hand menu), select the project icon that represents your app
3. In the top-left corner of the right-hand pane in Xcode, select your app's target
4. Navigate to the Capabilities tab
5. Enable Push Notifications
6. Check Remote Notifications and Background Fetch from Enabling Background Modes

![iOS Configuration](/img/flutter-partner-app/1.webp)

### Setting Up APNs for iOS

APNs (Apple's Push Notification service) currently supports two types of connections: token-based (.p8) and certificate-based (.p12). You can follow either one of them:

#### For Token-based (.p8)

1. Log in to the Apple Developer Portal
2. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs and click the App ID associated with your app
3. On the screen for your App ID, check Capabilities > Push Notifications
4. Select App ID in next page & click continue
5. Create Development SSL Certificate & Production SSL Certificate by adding CSR certificate. Follow Apple's [Create a certificate signing request instructions](https://help.apple.com/developer-account/)
6. Navigate to Certificates, IDs & Profiles > Keys Section and add a Universal key for Notifications, which you can use for more than one app as well
7. Save and Download & keep it safe, as it will be downloaded only once
8. Then go to Firebase and add this .p8 file along with Your Key ID and Team ID

#### For Certificate-based (.p12)

1. Log in to the Apple Developer Portal
2. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs and click the App ID associated with your app
3. On the screen for your App ID, check Capabilities > Push Notifications
4. Click Save and respond to the Modify App Capabilities dialog box that appears
5. To create the certificate:

   - In a new browser tab, follow Apple's [Create a certificate signing request instructions](https://help.apple.com/developer-account/#/devbfa00fef7)
   - In the Apple Developer Portal, navigate back to your App ID
   - Click Capabilities > Push Notifications > Configure
   - Click one of the following buttons:
     - Development SSL Certificate > Create Certificate (for testing)
     - Production SSL Certificate > Create Certificate (for production)
   - Click Choose File and select the certificate signing request you created
   - Click Continue
   - Click Download to download the certificate
   - Use this file to export a .p12 file in the next step

6. Navigate in the Apple Developer Portal to Certificates, IDs & Profiles > Provisioning Profiles
7. Click the provisioning profile you'd like to edit
8. Edit the provisioning profile as necessary, and click Save
9. Click Download, and double-click the downloaded provisioning profile to install it
10. Export the downloaded certificate (.cer file) as a .p12 file:
    - On your Mac, double-click the .cer file to open it in Keychain Access
    - In Keychain Access, select Category > Certificates
    - Select the certificate to export
    - Choose File > Export Items
    - Enter a name in the Save As field
    - Accept the default .p12 file format and click Save
    - Enter a password for the file if necessary
    - Upload this file to firebase
