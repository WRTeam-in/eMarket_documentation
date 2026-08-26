---
sidebar_position: 3
---

# Partner App Configuration

## Open and Run eMarket Partner App

1. Go to file > open > then choose your downloaded project location to open the project

![Open Project](/img/flutter-partner-app/open2.webp)

2. If you see "enable dart support" in the upper right corner, click that and go to pubspec.yaml file
3. In the upper right part, click pub get or package get and then press the run button

If you are getting errors, you can perform these troubleshooting steps:

- If firewall is on in your system, temporarily disable it and try to run the project
- If your flutter channel is not stable, change it to stable. Check your flutter channel in terminal by typing `flutter channel`

![Check Channel](/img/flutter-partner-app/ch1.webp)

- If not in stable, type `flutter channel stable`
- Go to Tools > Flutter > Flutter Clean
- Go to file > invalidate cache/restart

## Change App Name

### For Android

To change the label shown below Android app icon, open android > app > src > main > mainfest.xml and change the label string.

![Android App Name](/img/flutter-partner-app/appname2.webp)

### For iOS

To change the label shown below iOS app icon, open ios > Runner > Info.plist and find `<key>CFBundleName</key>` to change that string.

![iOS App Name](/img/flutter-partner-app/appname3.webp)

## Change App Version

1. Go to pubspec.yaml
2. Update version: A.B.C+X in pubspec.yaml

![Version Change](/img/flutter-partner-app/version_1.webp)

For Android:

- A.B.C represents the versionName such as 1.0.0
- X (the number after the +) represents the versionCode such as 1, 2, 3, etc.

For iOS:

- A.B.C represents the CFBundleShortVersionString such as 1.0.0
- X (the number after the +) represents the CFBundleVersion such as 1, 2, 3, etc.

**Do not forget** to execute flutter packages get, flutter build or flutter run after this step

## Change App Logo

### For Android

Open android > app > src > main > res > mipmap and add your logo according to device screen size

![Android Logo](/img/flutter-partner-app/logo_1.webp)

### For iOS

Open ios > Runner > Assets.xcassets > AppIcon.appiconset and put your logo according to different sizes

![iOS Logo](/img/flutter-partner-app/logo_2.webp)

## Change App Theme

To change app color, add your color code in lib > helper > color.dart

In Flutter, color code starts with 0xff so you have to add your color hex after these 4 digits. You can change primary, secondary, font color.

![App Color](/img/flutter-partner-app/appcolor.webp)

## Change Package Name

1. To change package name press ctrl + shift + R and enter, or you can change it manually by replacing the package name

![Package Name 1](/img/flutter-partner-app/packagename_1.webp)

2. After step 1 follow below image:

![Package Name 2](/img/flutter-partner-app/packagename_2.webp)

3. When changing package name, you also need to change the names of folders according to your package name in (android\app\src\main\kotlin\) location in the project
   - For example, if Package name is "com.wrteam.emarket" then inside kotlin folder, the folder structure is com\wrteam\emarket
   - If your package name is "com.wrteam.emarket.customer", you'd have \com\wrteam\emarket\customer
4. Copy first command and paste it into android studio terminal and press enter

![Package Name 3](/img/flutter-partner-app/packagename_3.webp)

5. For changing the names of these folders, open your project folder, navigate inside the kotlin folder, and rename the folders according to your package name

![Package Name 4](/img/flutter-partner-app/packagename_4.webp)

## Change Assets Images

Go to Assets > images folder. Here you have 2 folders: 1.webp and 2.svg. You can change your image to existing image with the same name.

![Change Images](/img/flutter-partner-app/imageschange.webp)

## Manage Languages

You can manage all app and website languages from the admin panel:

1. Go to Admin Panel > Language > Add Language OR Manage Languages

![Manage Languages](/img/flutter-partner-app/lan1.webp)

## Change Font Family

1. You need to select font from Google Fonts only. Visit [https://fonts.google.com/](https://fonts.google.com/)

![Google Fonts](/img/flutter-partner-app/google-font.webp)

## Change Server URL

1. Open your admin panel, copy link from URL as shown below

![Server URL Admin](/img/flutter-partner-app/serverurladmin.webp)

2. In Android code go to lib > helper > utils > constant.dart and paste the URL

![Server URL Code](/img/flutter-partner-app/serverurladmin2.webp)

## Create Flutter Firebase App

**For creating a firebase app from flutter you must install firebase cli first.**

To install firebase cli follow [https://firebase.google.com/docs/cli](https://firebase.google.com/docs/cli)

After firebase cli installation, follow these steps:

1. Create flutter app:

   - Press "Flutter" option

   ![FCM 6](/img/flutter-partner-app/fcm6.webp)

   - Press next

   ![FCM 7](/img/flutter-partner-app/fcm7.webp)

2. Go to Android Studio terminal and run "firebase login" command:

   - Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? Set "YES" and press enter
   - Login to firebase from the browser when prompted

   ![FCM 8](/img/flutter-partner-app/fcm8.webp)

3. Run the first command shown in the Firebase console in Android Studio terminal

   ![FCM 9](/img/flutter-partner-app/fcm9.webp)

4. Run the second command shown in the Firebase console in Android Studio terminal:

   - Once output is shown, press "Enter" in terminal

   ![FCM 11](/img/flutter-partner-app/fcm11.webp)

   - When prompted again, press "y" in terminal

   ![FCM 12](/img/flutter-partner-app/fcm12.webp)

5. Press continue in the Firebase console

   ![FCM 13](/img/flutter-partner-app/fcm13.webp)

6. Press "continue to console"

   ![FCM 14](/img/flutter-partner-app/fcm14.webp)

Your firebase setup is now complete.

## Set Notifications

For iOS, you need to perform these steps:

1. In Xcode, open the project
2. In the Project Navigator (the left-hand menu), select the project icon that represents your app
3. In the top-left corner of the right-hand pane in Xcode, select your app's target
4. Navigate to the Capabilities tab
5. Enable Push Notifications
6. Check Remote Notifications and Background Fetch from Enabling Background Modes

![iOS Notification 1](/img/flutter-partner-app/1.webp)

## Increase Product Load Limit

You can change how many items are fetched at a time when a request is sent to the server:

1. Go to lib > helper > Constant.dart
2. Find the parameter that controls the product load limit
3. Adjust the value as needed

![Limit](/img/flutter-partner-app/limit.webp)

## Change API Parameter

You can change or add API parameters from lib > Helper > String.dart. Here, all list of APIs and API parameters are listed that are used in the app.

![API Parameters](/img/flutter-partner-app/api.webp)

## Privacy-Policy PlayStore

To get the privacy policy URL for your PlayStore submission:

1. First login to admin panel
2. Go to System > Privacy Policy
3. Use the URL provided there in your app store submissions

![Privacy](/img/flutter-partner-app/privacy.webp)

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

   ![Modify Path](/img/flutter-partner-app/modifyPath.webp)
   ![Remember Password](/img/flutter-partner-app/remeberPassword.webp)
   ![Success](/img/flutter-partner-app/success.webp)

2. Reference the keystore from the app:

   - Create a file named [project]/android/key.properties that contains a reference to your keystore:

   ![Create File](/img/flutter-partner-app/createfile.webp)

   - Copy below code, paste into key.properties file and change as per your configuration:
     ```
     storePassword=<password from previous step>
     keyPassword=<password from previous step>
     keyAlias=upload
     storeFile=<location of the key store file, such as /Users/username/upload-keystore.jks>
     ```

   ![Set Path](/img/flutter-partner-app/setPath.webp)

3. Run one of the following commands in Terminal:
   - To generate an APK:
     ```
     flutter build apk
     ```
   - To generate an App Bundle:
     ```
     flutter build appbundle
     ```
     ![Generate APK](/img/flutter-partner-app/generateAPK.webp)

## Publish iOS App

1. Open your Project's Runner.xcworkspace file in Xcode
2. Add your Team [Your Apple Developer ID]
3. Insert GoogleService-Info.plist file [Downloaded from Firebase Project] inside the folder named Runner

   ![iOS 1](/img/flutter-partner-app/ios1.webp)

4. Select **Any iOS Device (armv7,arm64)**

   ![iOS 2](/img/flutter-partner-app/ios2.webp)

5. Select **Archive** from the Product Menu of Xcode

   ![iOS 3](/img/flutter-partner-app/ios3.webp)

6. Once Build/Archive is generated, a popup window will be shown
7. Validate app first, and after successful validation, you can distribute the app to AppStore

   ![iOS 4](/img/flutter-partner-app/ios4.webp)

8. After successful submission of the build file, it will be reflected in your Apple Developer Account

For detailed help, see [Submit Your App to the App Store](https://codewithchris.com/submit-your-app-to-the-app-store/)
