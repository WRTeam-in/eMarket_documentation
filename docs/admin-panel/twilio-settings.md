---
sidebar_position: 11
---

# Twilio Setting

Set here SMS setting. If you want Twilio SMS enable than first enable custom SMS gateway in Login Setting.

Open yout Twilio dashboard and get these information.

![Twilio Dashboard](/img/admin-panel/twilio_dashboard.webp)

Go to System->SMS Settings and fill those values

![Twilio Setting](/img/admin-panel/twilio_setting.webp)

If tou want change any SMS template, than Go to System->SMS Templates and edit message.

![SMS Templates](/img/admin-panel/sms_templates.webp)

## Twilio Integration

Configure Twilio SMS service for your eMarket store to enable SMS notifications and OTP verification.

### Prerequisites

1. **Twilio Account**

   - Create account at [Twilio](https://www.twilio.com)
   - Get Account SID
   - Get Auth Token
   - Get Phone Number

2. **Required Information**
   - Account SID
   - Auth Token
   - From Number
   - Service SID (for Verify)

### Configuration Steps

1. **Access Twilio Settings**

   - Login to admin panel
   - Navigate to Settings > Twilio
   - Enter credentials

2. **Basic Settings**
   ```env
   TWILIO_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_FROM=your_twilio_number
   TWILIO_SERVICE_SID=your_verify_service_sid
   ```

### SMS Templates

1. **Order Status**

   ```
   Your order #{{order_id}} has been {{status}}.
   Track at: {{tracking_url}}
   ```

2. **OTP Verification**

   ```
   Your eMarket verification code is: {{otp}}
   Valid for {{minutes}} minutes.
   ```

3. **Delivery Updates**
   ```
   Your order #{{order_id}} is {{status}}.
   Estimated delivery: {{eta}}
   ```

## Features Configuration

### SMS Notifications

1. **Order Updates**

   - New order
   - Order status change
   - Delivery updates

2. **Account Security**

   - Registration OTP
   - Login verification
   - Password reset

3. **Marketing Messages**
   - Promotions
   - Offers
   - Updates

### Verify Service

1. **Setup Verify**

   - Enable service
   - Configure templates
   - Set timeout

2. **Implementation**
   ```php
   // Example verification code
   Twilio::verify()->v2->services($serviceSid)
       ->verifications
       ->create($phoneNumber, "sms");
   ```

## Testing

### Test SMS Delivery

```php
// Example test message
$message = $twilio->messages->create(
    $to,
    [
        "from" => $from,
        "body" => "Test message from eMarket"
    ]
);
```

### Test OTP Verification

```php
// Example OTP verification
$verification = $twilio->verify->v2->services($serviceSid)
    ->verificationChecks
    ->create([
        "to" => $phoneNumber,
        "code" => $code
    ]);
```

## Best Practices

1. **Security**

   - Secure credentials
   - Monitor usage
   - Rate limiting

2. **Cost Management**

   - Monitor usage
   - Set alerts
   - Optimize sending

3. **Message Content**
   - Clear messages
   - Include opt-out
   - Follow regulations

## Troubleshooting

### Common Issues

1. **SMS Not Sending**

   - Check credentials
   - Verify phone format
   - Check balance

2. **OTP Issues**

   - Check service SID
   - Verify phone numbers
   - Check logs

3. **Cost Issues**
   - Monitor usage
   - Check pricing
   - Set limits

## Important Notes

1. **Compliance**

   - Follow SMS regulations
   - Get user consent
   - Honor opt-outs

2. **Monitoring**

   - Track delivery rates
   - Monitor costs
   - Check errors

3. **Support**
   - Twilio support
   - Documentation
   - API reference
