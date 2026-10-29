---
sidebar_position: 10
---

# Firebase Settings

Set here Firebase settings.
![Firebase Settings](/img/admin-panel/firebase_settings.webp)

## Firebase Integration

Configure Firebase for your eMarket store to enable features like authentication, cloud messaging, and more.

### Prerequisites

1. **Firebase Account**
   - Google account
   - Firebase project

### Configuration Steps

1. **Create Firebase Project**

   - Go to Firebase Console
   - Create new project
   - Set up app

2. **Set up Services**
   - Authentication
   - Cloud Messaging
   - Analytics
   - Crashlytics

### Firebase Setup & Keys Fields

All fields marked with `*` are required. Get the values from the Firebase Console.

**Get the web config values**

1. Go to [Firebase Console](https://console.firebase.google.com/) and open your project (or create one).
2. Click the **gear icon** → **Project settings** → **General** tab.
3. Scroll to **Your apps**. If no web app exists, click the **Web** icon (`</>`), enter an app nickname and click **Register app**.
4. Under **SDK setup and configuration**, select **Config**. You will see a block like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef",
  measurementId: "G-XXXXXXXXXX"
};
```

5. Copy each value (without the quotes) into the matching field in the admin panel.

| Admin panel field | Firebase config key | Where to find it |
|-------------------|---------------------|------------------|
| apiKey | `apiKey` | Project settings → General → Your apps → Config |
| authDomain | `authDomain` | Same config block. Usually `your-project.firebaseapp.com` |
| projectId | `projectId` | Same config block, or Project settings → General → Project ID |
| storageBucket | `storageBucket` | Same config block |
| messagingSenderId | `messagingSenderId` | Same config block, or Project settings → Cloud Messaging → Sender ID |
| appId | `appId` | Same config block, or Project settings → General → Your apps → App ID |
| measurementId | `measurementId` | Same config block. Shown only when Google Analytics is enabled for the project (starts with `G-`) |

:::note measurementId not visible?
Enable Google Analytics: Project settings → Integrations → Google Analytics, then check the config block again.
:::

**Firebase Json file**

The JSON file is a service account private key used by the server for Firebase services such as push notifications.

1. In Firebase Console go to **Project settings** → **Service accounts**.
2. Click **Generate new private key**, then confirm **Generate key**.
3. A `.json` file is downloaded. Upload it in the **Firebase Json file** box (drop the file or click to upload). Only the JSON format is supported.
4. Click **Update** to save. The status next to the label changes from "File not exists" once the file is uploaded.

:::warning Keep the JSON file private
This file gives server access to your Firebase project. Do not share it, post it publicly or commit it to a repository.
:::

For API key restrictions, see the [Google Maps & Firebase API Integration Guide](./map-api-key-settings.md).

### Authentication Setup

1. **Enable Auth Methods**
   - Email/Password
   - Phone
   - Google
   - Facebook

### Cloud Messaging

1. **Configure FCM**
   - Get server key
   - Set up Android
   - Set up iOS

### Important Notes

- Keep credentials secure
- Follow Firebase best practices
- Regular monitoring
- Stay updated with Firebase changes
