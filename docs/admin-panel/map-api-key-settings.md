---
sidebar_position: 19
---

# Google Maps & Firebase API Integration Guide

This document explains how to integrate Google Maps & Firebase APIs for:
- **Web**
- **Admin Panel**
- Key restrictions & security best practices
- Quota & alert setup

:::tip Google Maps or OpenStreetMap
**Map Provider** in Store Settings decides which map the customer and partner apps show. With **OpenStreetMap**, the apps' maps need no Google key, but the **Place API Key** below is still used for address search and address lookup. See [Map and Location Services](../flutter-app/map-location-services.md#google-maps-or-openstreetmap).
:::

---

## 1. WEB API INTEGRATION

Required APIs:
1. Maps JavaScript API  
2. Places API  
3. Places API (NEW)  
4. Geocoding API  

**Key Generation & Restriction:**
- Use **Browser API Key** (auto-generated from Firebase project).
- Restrict with:
  - **Firebase Auth Domain**: `https://firebaseappid.firebaseapp.com/*`
  - Additional custom domains if needed: `https://example.com/*`
- Enable required APIs:
  - Maps JavaScript API
  - Places API
  - Places API (NEW)
  - Geocoding API
  - FCM Registration API
  - Firebase Management API
  - Firebase App Check API
  - Firebase In-App Messaging API
  - Firebase Installations API
  - Firebase Remote Config API
  - Firebase Remote Config Realtime API
  - Cloud Storage for Firebase API
  - Identity Toolkit API
  - Token Service API
  - Cloud Logging API

![Web API Key Restriction Screenshot](/img/admin-panel/map-key-web.webp)

---

## 2. ADMIN PANEL API INTEGRATION

### Getting Started

**Create Google Cloud Project**

- Go to Google Cloud Console
- Create a new project or select existing one
- Enable billing for the project

**Required APIs**

Map API key (browser):
1. Maps JavaScript API
2. Geocoding API

Place API key (server):
1. Places API (New): address autocomplete and place details
2. Geocoding API
3. Routes API: delivery distance and ETA

### 2.1 Place API Key
- Used by the Laravel backend only (server key).
- Restrict by:
  - **IP Address**: `XXX.XXX.XXX.XXX` (Server IP)
- API restrictions:
  - Places API (New): address autocomplete and place details
  - Geocoding API
  - Routes API: delivery distance and ETA

![Panel API Key Restriction Screenshot](/img/admin-panel/map-key-penal-place-suggestion.webp)

### 2.2 Map API Key
- Used by the browser (map rendering and delivery zone drawing).
- Restrict by:
  - **HTTP referrer**: `admin.example.com` and subdomains
- API restrictions:
  - Maps JavaScript API
  - Geocoding API

![Panel API Key Restriction Screenshot](/img/admin-panel/map-key-penal-map-render.webp)

![Panel API Key Restriction Screenshot](/img/admin-panel/map-key-penal-setting.webp)

### Testing Configuration

**Verify Map Display**

- Check map loading
- Test location search
- Verify geocoding

**Test Features**

- Address autocomplete
- Distance calculation
- Route planning

### API Usage

**Store Location**

```javascript
// Example map initialization
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: YOUR_LAT, lng: YOUR_LNG },
    zoom: 15,
  });
}
```

**Delivery Zone**

```javascript
// Example delivery zone circle
const deliveryZone = new google.maps.Circle({
  map: map,
  center: storeLocation,
  radius: deliveryRadius,
});
```

**Address Autocomplete**

The address search box calls the server, which uses Places API (New) with the Place API key.

```
GET /map/places_autocomplete?input=...&source=web
GET /map/places_details?place_id=...&source=web
```

Params:
- `input`: search text (minimum 2 characters)
- `source`: `app` or `web`
- `language` (optional): 2 letters
- `types` (optional)
- `components` (optional): e.g. `country:in|country:us`
- `sessiontoken` (optional)

### Best Practices

**API Key Security**

- Restrict API key usage
- Monitor API usage
- Regular key rotation

**Performance**

- Load APIs asynchronously
- Use lazy loading
- Implement caching

**Error Handling**

- Handle API load failures
- Implement fallbacks
- Monitor errors

### Troubleshooting

**Map Not Loading**

- Check API key
- Verify domain restrictions
- Console for errors

**Geocoding Failures**

- Check API quota
- Verify address format
- Test API access

**Billing Issues**

- Check billing status
- Monitor usage
- Set budget alerts

### Important Notes

**Usage Limits**

- Monitor API usage
- Set up alerts
- Check pricing

**Updates**

- Keep APIs updated
- Check deprecations
- Follow changes

**Support**

- Google Maps support
- Documentation
- Community forums

---

## 3. QUOTA & ALERT SETUP

### **Quota Setup**
- Go to **Google Cloud Console → APIs & Services → Quotas**.
- Set limits for:
  - Requests per day
- Recommended quota limits:
    - **Maps JavaScript API**: 1000 requests/day  
    - **For Places API (New)**: set limit to 225 requests/day. This quota applies to the autocomplete and details calls.
    - **For other APIs (Maps, Distance, etc.)**: set limit to 1000, if not setting based on actual usage.
    - **Do not exceed 1000 for any API unless necessary.**
    - The Routes API is called for every delivery distance and ETA calculation, so a very low daily quota can block orders on busy days. Set it based on real usage.

### **Alert Setup**
- Go to **Google Cloud Console → Billing → Budgets & alerts**.
- Create budget alerts at:
  - **50% usage**
  - **75% usage**
  - **90% usage**
- Email alerts to the dev & admin team.

- **🔔 Set up Budget and Quota Notifications**
    - [Budget & Alert Setup Guide](https://drive.google.com/file/d/1bbDnAUpHPuF5xhkGuAe6FBrO8nwoKRNb/view?usp=sharing)
    - [Quota Setup Guide](https://drive.google.com/file/d/1_1zJSNMRnBfrXXYoCm9S4AMqmyTECV6E/view?usp=sharing)

---

## 4. REFERENCE LINKS
- [Google Cloud Console](https://console.cloud.google.com/)
- [Restricting API Keys](https://cloud.google.com/docs/authentication/api-keys#api_key_restrictions)
- [Firebase Project Settings](https://console.firebase.google.com/)

---

**⚠️ NOTE:** Always restrict your API keys to avoid unauthorized usage and unexpected billing.