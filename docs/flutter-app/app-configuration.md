---
sidebar_position: 3
---

# App Configuration

## Open and Run eMarket App

1. Go to file > open > then choose your downloaded project location to open the project

![Open Project](/img/flutter-app/open2.webp)

2. If you see "enable dart support" in the upper right corner, click that and go to pubspec.yaml file
3. In the upper right part, click pub get or package get and then press the run button

If you are getting errors, you can perform these troubleshooting steps:

- If firewall is on in your system, temporarily disable it and try to run the project
- If your flutter channel is not stable, change it to stable. Check your flutter channel in terminal by typing `flutter channel`

![Check Channel](/img/flutter-app/ch1.webp)

- If not in stable, type `flutter channel stable`
- Go to Tools > Flutter > Flutter Clean
- Go to file > invalidate cache/restart

## Change App Icon

### For Android

Open android > app > src > main > res > mipmap and add your logo according to device screen size

![Android Logo](/img/flutter-app/logo_1.webp)

### For iOS

Open ios > Runner > Assets.xcassets > AppIcon.appiconset and put your logo according to different sizes

![iOS Logo](/img/flutter-app/logo_2.webp)

## Change App Version

1. Go to pubspec.yaml
2. Update version: A.B.C+X in pubspec.yaml

![Version Change](/img/flutter-app/version_1.webp)

For Android:

- A.B.C represents the versionName such as 1.0.0
- X (the number after the +) represents the versionCode such as 1, 2, 3, etc.

For iOS:

- A.B.C represents the CFBundleShortVersionString such as 1.0.0
- X (the number after the +) represents the CFBundleVersion such as 1, 2, 3, etc.

**Do not forget** to execute flutter packages get, flutter build or flutter run after this step

## Change App Theme

To change app color, add your color code in lib > helper > styles > colorsRes.dart

In Flutter, color code starts with 0xff so you have to add your color hex after these 4 digits. You can change primary, secondary, font color.

![App Color](/img/flutter-app/appcolor.webp)

## Change App Name

### For Android

To change the label shown below Android app icon, open android > app > src > main > mainfest.xml and change the label string.

![Android App Name](/img/flutter-app/appname2.webp)

### For iOS

To change the label shown below iOS app icon, open ios > Runner > Info.plist and find `<key>CFBundleName</key>` to change that string.

![iOS App Name](/img/flutter-app/appname3.webp)

## Change Package Name

1. To change package name press ctrl + shift + R and enter, or you can change it manually by replacing the package name

![Package Name 1](/img/flutter-app/packagename_1.webp)

2. After step 1 follow below image:

![Package Name 2](/img/flutter-app/packagename_2.webp)

3. When changing package name, you also need to change the names of folders according to your package name in (android\app\src\main\kotlin\) location in the project
   - For example, if Package name is "com.wrteam.emarket" then inside kotlin folder, the folder structure is com\wrteam\emarket
   - If your package name is "com.wrteam.emarket.customer", you'd have \com\wrteam\emarket\customer
4. Copy first command and paste it into android studio terminal and press enter

![Package Name 3](/img/flutter-app/packagename_3.webp)

5. For changing the names of these folders, open your project folder, navigate inside the kotlin folder, and rename the folders according to your package name

![Package Name 4](/img/flutter-app/packagename_4.webp)

## Change Assets Images

Go to Assets > images folder. Here you have 2 folders: 1.webp and 2.svg. You can change your image to existing image with the same name.

![Change Images](/img/flutter-app/imageschange.webp)

## Manage Languages

You can manage all app and website languages from the admin panel:

1. Go to Admin Panel > Language > Add Language OR Manage Languages

![Manage Languages](/img/flutter-app/lan1.webp)

## Change Font Family

1. You need to select font from Google Fonts only. Visit [https://fonts.google.com/](https://fonts.google.com/)

![Google Fonts](/img/flutter-app/google-font.webp)
