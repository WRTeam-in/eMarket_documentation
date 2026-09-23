---
sidebar_position: 13
---

# Cart Reminder

Set here cart reminder notification time.

![Cart Reminder](/img/admin-panel/cart_setting.webp)

## Cart Reminder Configuration

Configure automated cart reminder notifications to recover abandoned carts.

### Basic Setup

1. **Enable Cart Reminders**

   - Login to admin panel
   - Go to Settings > Cart Reminders
   - Toggle Enable/Disable

2. **Reminder Schedule**
   ```env
   CART_REMINDER_INITIAL_DELAY=1 # hours
   CART_REMINDER_FREQUENCY=24 # hours
   CART_REMINDER_MAX_ATTEMPTS=3
   ```

### Notification Settings

1. **Email Templates**

   ```html
   Subject: Don't forget your items at eMarket! Hi {{customer_name}}, You have
   {{item_count}} items waiting in your cart: {{item_list}} Complete your
   purchase now: {{cart_url}}
   ```

2. **SMS Templates**

   ```
   eMarket: You have items in your cart!
   Complete your order now: {{cart_url}}
   Reply STOP to unsubscribe
   ```

3. **Push Notifications**
   ```json
   {
     "title": "Complete your purchase",
     "body": "Items in your cart are waiting!",
     "action_url": "{{cart_url}}"
   }
   ```

## Features Configuration

### Reminder Rules

1. **Timing Rules**

   - First reminder: 1 hour
   - Second reminder: 24 hours
   - Final reminder: 72 hours

2. **Conditions**

   - Minimum cart value
   - User logged in
   - Items in stock

3. **Exclusions**
   - Opted out users
   - Recent purchasers
   - Guest carts

### Notification Channels

1. **Email Settings**

   - Template customization
   - Scheduling options
   - Tracking enabled

2. **SMS Configuration**

   - Message templates
   - Delivery timing
   - Opt-out handling

3. **Push Notifications**
   - Browser notifications
   - Mobile app alerts
   - Click tracking

## Implementation

### Queue Configuration

```php
// Example queue setup
return [
    'cart_reminders' => [
        'driver' => 'redis',
        'connection' => 'default',
        'queue' => 'reminders',
        'retry_after' => 90,
    ],
];
```

### Scheduler Setup

```php
// Example scheduler
$schedule->command('cart:remind')
         ->hourly()
         ->withoutOverlapping();
```

## Analytics

### Tracking Metrics

1. **Cart Statistics**

   - Abandoned rate
   - Recovery rate
   - Average value

2. **Reminder Performance**

   - Open rates
   - Click rates
   - Conversion rate

3. **Channel Effectiveness**
   - Email success
   - SMS delivery
   - Push engagement

## Best Practices

1. **Timing Strategy**

   - Optimal intervals
   - Time zone respect
   - Frequency limits

2. **Content Optimization**

   - Personalization
   - Clear CTAs
   - Mobile friendly

3. **Testing**
   - A/B testing
   - Template variants
   - Timing tests

## Troubleshooting

### Common Issues

1. **Delivery Problems**

   - Check email setup
   - Verify SMS gateway
   - Test notifications

2. **Tracking Issues**

   - Check analytics
   - Verify links
   - Monitor logs

3. **Performance Issues**
   - Queue status
   - Server load
   - Database queries

## Important Notes

1. **Compliance**

   - Privacy laws
   - Opt-out handling
   - Data retention

2. **Monitoring**

   - Success rates
   - Error logs
   - Performance

3. **Optimization**
   - Regular testing
   - Content updates
   - Strategy review
