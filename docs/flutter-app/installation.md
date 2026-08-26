---
sidebar_position: 2
---

# Flutter App Installation

## Setup Java JDK

If your System already has Java jdk-19.0.2 installed, you can skip this step.

1. Download Java-19.0.2 jdk from [JAVA jdk-19.0.2](https://www.oracle.com/java/technologies/javase/jdk19-archive-downloads.html)
2. Download Java-19.0.2 JDK for your version (32 bit or 64 bit)

![Java JDK Download](/img/flutter-app/java-jdk11.webp)

3. When you click on the Installation link, a popup will open. Click on "I reviewed and accept the Oracle Technology Network License Agreement for Oracle Java SE development kit"

<!-- Note: This image may need to be uploaded or renamed -->
<!-- ![Accept Agreement](/img/flutter-app/accept%20agreement.webp) -->

4. Once the Java JDK 19.0.2 download is complete, run the exe to install JDK. Click Next

![Java Install Next](/img/flutter-app/javainstall-next.webp)

5. Select the PATH to install Java in Windows. You can leave it Default. Click next

![Java Install Save](/img/flutter-app/javainstall-save.webp)

6. Once you install Java in Windows, click Close

![Java Install Close](/img/flutter-app/javainstall-close.webp)

7. Now set your environment variable:

   - From the Start search bar, type 'env' and select "Edit environment variables for your account"

   ![Environment Variables](/img/flutter-app/path.webp)

   - Under User variables check if there is an entry called Path
   - Click on Edit. From the dialog that opens, click on new and copy the path of the bin folder which is installed in JDK folder
   - Paste the path of bin folder in Variable value. Click on OK Button

   ![Path Setup](/img/flutter-app/path2.webp)

8. Repeat the above process but this time set variable name **JAVA_HOME** instead of "path/PATH", and set JDK bin folder path in the variable value
9. Restart your PC for changes to take effect
10. Check if everything is working by going to command prompt and typing javac commands

![Check Version](/img/flutter-app/checkversion.webp)

## Setup Flutter

1. Download Latest Flutter SDK from [Flutter sdk](https://flutter.dev/docs/get-started/install/windows)

![Flutter SDK Download](/img/flutter-app/setup.webp)

2. Extract the zip file and copy flutter folder into your desired installation location for the Flutter SDK (e.g., C:\src\flutter; do not install Flutter in a directory like C:\Program Files\)
3. Inside Flutter folder find flutter_console.bat. Start it by double-clicking

![Flutter Console](/img/flutter-app/setup2.webp)

4. Now set your environment variable:

   - From the Start search bar, type 'env' and select "Edit environment variables for your account"

   ![Environment Variables](/img/flutter-app/path.webp)

   - Under User variables check if there is an entry called Path
   - Click on Edit. From the new dialog, click on new and copy full path to flutter\bin as its value
   - Restart your PC for changes to take effect

   ![Path Setup](/img/flutter-app/path2.webp)

5. Check everything is working by opening cmd and running flutter doctor

![Flutter Check](/img/flutter-app/check.webp)

6. Now open Android Studio and create new flutter project, then select your flutter sdk file to the location where you downloaded it earlier

![Flutter Studio](/img/flutter-app/flutter.webp)

## Upgrade Flutter

1. To upgrade, go to terminal in Android Studio and type `flutter upgrade`. It will automatically pick the latest version with stable channel
2. If you have updated flutter 2.x after upgrade, run `flutter doctor`. If you see an error like "license status unknown":

![Upgrade Error](/img/flutter-app/upgrade1.webp)

- Go to SDK manager from upper right corner
- Go to Android SDK inside that SDK tools
- Uncheck "hide obsolete package"
- Check Android SDK command line tool (latest)
- Apply and OK to download the latest version

![SDK Manager](/img/flutter-app/upgrade2.webp)

3. Now run `flutter doctor` again and your error should be resolved
