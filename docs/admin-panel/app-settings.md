---
sidebar_position: 14
---

# App Settings

Set here app settings like version and URL.

![App Settings](/img/admin-panel/app_settings.webp)

## Mobile App Configuration

Configure settings for the eMarket mobile application.

### Basic Settings

1. **App Information**

   - App Name
   - Version Number
   - Build Number
   - Package Name

2. **Appearance**
   - Theme Colors
   - App Logo
   - Splash Screen
   - App Icons

### Feature Configuration

1. **Authentication**

   ```env
   ENABLE_SOCIAL_LOGIN=true
   ENABLE_PHONE_LOGIN=true
   ENABLE_BIOMETRIC=true
   ```

2. **Payment Options**

   ```env
   ENABLE_STRIPE=true
   ENABLE_PAYPAL=true
   ENABLE_COD=true
   ```

3. **Notifications**
   ```env
   ENABLE_PUSH_NOTIFICATIONS=true
   NOTIFICATION_SOUND=true
   NOTIFICATION_VIBRATION=true
   ```

## Integration Settings

### Firebase Configuration

```json
{
  "project_id": "your-project-id",
  "app_id": "your-app-id",
  "api_key": "your-api-key",
  "messaging_sender_id": "your-sender-id"
}
```

### Maps Integration

```env
GOOGLE_MAPS_API_KEY=your_api_key
ENABLE_LOCATION_TRACKING=true
DEFAULT_MAP_ZOOM=15
```

### Analytics Setup

```env
ANALYTICS_TRACKING_ID=your_tracking_id
ENABLE_CRASH_REPORTING=true
ENABLE_PERFORMANCE_MONITORING=true
```

## Feature Controls

### Shopping Features

1. **Cart Settings**

   - Maximum Items
   - Minimum Order Value
   - Cart Expiry Time

2. **Order Settings**

   - Order Tracking
   - Delivery Options
   - Return Policy

3. **Product Display**
   - Image Quality
   - Cache Duration
   - List View Options

### User Features

1. **Profile Settings**

   - Address Book
   - Payment Methods
   - Order History

2. **Preferences**

   - Language Selection
   - Currency Format
   - Time Zone

3. **Security**
   - Session Timeout
   - PIN Protection
   - Data Encryption

## Performance Settings

### Cache Configuration

```env
ENABLE_IMAGE_CACHE=true
CACHE_DURATION=86400
OFFLINE_MODE_ENABLED=true
```

### Network Settings

```env
API_TIMEOUT=30
RETRY_ATTEMPTS=3
ENABLE_COMPRESSION=true
```

### Storage Settings

```env
MAX_OFFLINE_DATA=100MB
CLEAR_CACHE_INTERVAL=7
AUTO_UPDATE_ENABLED=true
```

## Testing Configuration

1. **Test Mode**

   ```env
   APP_ENV=testing
   ENABLE_MOCK_LOCATION=true
   TEST_PAYMENT_GATEWAY=true
   ```

2. **Debug Options**

   - Console Logging
   - Network Monitor
   - Performance Stats

3. **Test Accounts**
   - Test Users
   - Test Products
   - Test Orders

## Best Practices

1. **Performance**

   - Optimize Images
   - Minimize API Calls
   - Efficient Caching

2. **Security**

   - Secure Storage
   - API Security
   - Data Privacy

3. **User Experience**
   - Fast Loading
   - Offline Support
   - Error Handling

## Troubleshooting

### Common Issues

1. **App Crashes**

   - Check Logs
   - Memory Usage
   - API Responses

2. **Performance Issues**

   - Cache Status
   - Network Speed
   - Resource Usage

3. **Integration Problems**
   - API Keys
   - Service Status
   - Version Compatibility

## Important Notes

1. **Updates**

   - Version Control
   - Change Log
   - Update Policy

2. **Monitoring**

   - Usage Analytics
   - Error Tracking
   - User Feedback

3. **Support**
   - Documentation
   - Help Center
   - Contact Info
