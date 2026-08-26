---
sidebar_position: 8
---

# App Distribution

## Generate Release APK

1. Create an upload keystore by running one of the following commands:

   - On Mac/Linux:
     ```
     keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
     ```
   - On Windows:
     ```
     keytool -genkey -v -keystore c:\Users\USER_NAME\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
     ```

   ![Modify Path](/img/flutter-app/modifyPath.webp)
   ![Remember Password](/img/flutter-app/remeberPassword.webp)
   ![Success](/img/flutter-app/success.webp)

2. Reference the keystore from the app:

   - Create a file named [project]/android/key.properties that contains a reference to your keystore:

   ![Create File](/img/flutter-app/createfile.webp)

   - Copy below code, paste into key.properties file and change as per your configuration:
     ```
     storePassword=<password from previous step>
     keyPassword=<password from previous step>
     keyAlias=upload
     storeFile=<location of the key store file, such as /Users/username/upload-keystore.jks>
     ```

   ![Set Path](/img/flutter-app/setPath.webp)

3. Run one of the following commands in Terminal:
   - To generate an APK:
     ```
     flutter build apk
     ```
   - To generate an App Bundle:
     ```
     flutter build appbundle
     ```
     ![Generate APK](/img/flutter-app/generateAPK.webp)

## Publish iOS App

1. Open your Project's Runner.xcworkspace file in Xcode
2. Add your Team [Your Apple Developer ID]
3. Insert GoogleService-Info.plist file [Downloaded from Firebase Project] inside the folder named Runner

   ![iOS 1](/img/flutter-app/ios1.webp)

4. Select **Any iOS Device (armv7,arm64)**

   ![iOS 2](/img/flutter-app/ios2.webp)

5. Select **Archive** from the Product Menu of Xcode

   ![iOS 3](/img/flutter-app/ios3.webp)

6. Once Build/Archive is generated, a popup window will be shown
7. Validate app first, and after successful validation, you can distribute the app to AppStore

   ![iOS 4](/img/flutter-app/ios4.webp)

8. After successful submission of the build file, it will be reflected in your Apple Developer Account

For detailed help, see [Submit Your App to the App Store](https://codewithchris.com/submit-your-app-to-the-app-store/)
