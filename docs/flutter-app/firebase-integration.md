---
sidebar_position: 5
---

# Firebase Integration

## Create Flutter Firebase App

**For creating a firebase app from flutter you must install firebase cli first.**

To install firebase cli follow [https://firebase.google.com/docs/cli](https://firebase.google.com/docs/cli)

After firebase cli installation, follow these steps:

1. Create a firebase project:

   - Enter your project name and press continue

   ![FCM 1](/img/flutter-app/fcm1.webp)

   - Press continue on the Google Analytics option

   ![FCM 2](/img/flutter-app/fcm2.webp)

   - Press "create project"

   ![FCM 3](/img/flutter-app/fcm3.webp)
   ![FCM 4](/img/flutter-app/fcm4.webp)
   ![FCM 5](/img/flutter-app/fcm5.webp)

2. Create flutter app:

   - Press "Flutter" option

   ![FCM 6](/img/flutter-app/fcm6.webp)

   - Press next

   ![FCM 7](/img/flutter-app/fcm7.webp)

3. Go to Android Studio terminal and run "firebase login" command:

   - Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? Set "YES" and press enter
   - Login to firebase from the browser when prompted

   ![FCM 8](/img/flutter-app/fcm8.webp)

4. Run the first command shown in the Firebase console in Android Studio terminal

   ![FCM 9](/img/flutter-app/fcm9.webp)

5. Run the second command shown in the Firebase console in Android Studio terminal:

   - Once output is shown, press "Enter" in terminal

   ![FCM 11](/img/flutter-app/fcm11.webp)

   - When prompted again, press "y" in terminal

   ![FCM 12](/img/flutter-app/fcm12.webp)

6. Press continue in the Firebase console

   ![FCM 13](/img/flutter-app/fcm13.webp)

7. Press "continue to console"

   ![FCM 14](/img/flutter-app/fcm14.webp)

Your firebase setup is now complete.

## Enable Firebase Authentications

1. Open your firebase console
2. Go to Authentication and open Sign-in method
3. Enable Phone Sign-in method and save

   ![Firebase Auth 1](/img/flutter-app/firebase_auth1.webp)

4. Follow the same steps to enable other authentication options (Google, Apple) if needed

   ![Firebase Auth 2](/img/flutter-app/firebase_auth2.webp)

You also need to add SHA1 and SHA256 keys in Firebase:

For Debug SHA:

1. Go to the android folder, right-click gradlew file and select Open in Terminal

   ![Terminal 1](/img/flutter-app/terminal1.webp)

2. In the terminal, type `gradlew signingReport` (for Mac, use `./gradlew signingReport`)

   ![Terminal 2](/img/flutter-app/terminal2.webp)

3. Copy the debug SHA1 and SHA256 values that are printed, and add them to your Firebase console

   ![SHA 3](/img/flutter-app/sha3.webp)

For Release SHA:

- After releasing to the Play Store, get the SHA from Play Console

  ![OTP SHA 3](/img/flutter-app/otp_sha_3.webp)

- Or generate it using this command in cmd:

  ```
  keytool -list -v -keystore "YOUR_KEYSTORE_PATH.jks" -alias YOUR_ALIAS
  ```

  ![SHA 4](/img/flutter-app/sha4.webp)

For iOS:

1. Add custom URL schemes to your Xcode project:

   - Open your project configuration: double-click the project name in the left tree view
   - Select your app from the TARGETS section, then select the Info tab, and expand the URL Types section
   - Click the + button, and add a URL scheme for your reversed client ID
   - Find this value in the GoogleService-Info.plist configuration file (REVERSED_CLIENT_ID key)

   ![Xcode URL Type](/img/flutter-app/xcode_infotab_url_type_values.webp)

## Firebase Setup For Admin Panel

1. Open firebase console (https://console.firebase.google.com/)
2. Select your created project
3. Go to Project settings

   ![Firebase Setting 1](/img/flutter-app/firebase-setting1.webp)

4. In the General tab, scroll down to "Your apps" section

   ![Firebase Setting 2](/img/flutter-app/firebase-setting2.webp)

5. Click on the web app icon (`</>`) to add a web app

   ![Firebase Setting 3](/img/flutter-app/firebase-setting3.webp)

6. Enter your app name and click "Register app"

   ![Firebase Setting 4](/img/flutter-app/firebase-setting4.webp)

7. Copy the Firebase configuration code provided

   ![Firebase Setting 5](/img/flutter-app/firebase-setting5.webp)

8. Paste this configuration in your admin panel settings

   ![Firebase Setting 6](/img/flutter-app/firebase-setting6.webp)
