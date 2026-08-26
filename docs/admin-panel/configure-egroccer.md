---
sidebar_position: 5
---

# Configure eMarket

**Note**
In order to Configure eMarket you must have Admin Account.

Use the given guide to configure and customize eMarket as you need. Login as admin by

1. Enter Admin Login id and Password. Click Login

   ![Login](/img/admin-panel/login.webp)

2. Great! You have logged in as Admin.
   ![Dashboard](/img/admin-panel/dashboard.webp)




## Admin Panel

After completing the installation process, you can access the admin panel by logging in with the credentials you set during installation.

![Login](/img/admin-panel/login.webp)

Once logged in, you'll be directed to the dashboard where you can manage your eMarket store.

![Dashboard](/img/admin-panel/dashboard.webp)

## Initial Configuration

After installing eMarket, you need to configure various settings to get your store up and running.

### Basic Configuration Steps

1. **Access Admin Panel**

   - Go to `yourdomain.com/admin`
   - Login with your admin credentials

2. **System Settings**

   - Set timezone
   - Configure currency
   - Set default language
   - Configure date/time formats

3. **Store Information**
   - Store name
   - Store logo
   - Store favicon
   - Contact information
   - Store address

### Required Configurations

1. **Database Settings**

   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

2. **Mail Settings**

   ```env
   MAIL_MAILER=smtp
   MAIL_HOST=smtp.your-provider.com
   MAIL_PORT=587
   MAIL_USERNAME=your-email@domain.com
   MAIL_PASSWORD=your-password
   MAIL_ENCRYPTION=tls
   ```

3. **File Storage**
   ```env
   FILESYSTEM_DISK=local
   AWS_ACCESS_KEY_ID=your-key
   AWS_SECRET_ACCESS_KEY=your-secret
   AWS_DEFAULT_REGION=your-region
   AWS_BUCKET=your-bucket
   ```

### Integration Settings

1. **Payment Gateway**

   - Configure payment methods
   - Set API credentials
   - Test payment flow

2. **SMS Gateway**

   - Set up SMS provider
   - Configure API keys
   - Test SMS delivery

3. **Social Login**
   - Configure OAuth providers
   - Set redirect URLs
   - Test social login

## Advanced Configuration

### Cache Settings

```env
CACHE_DRIVER=redis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

### Queue Settings

```env
QUEUE_CONNECTION=redis
REDIS_QUEUE=default
```

### Session Settings

```env
SESSION_DRIVER=redis
SESSION_LIFETIME=120
```

## Security Configuration

### Application Security

```env
APP_KEY=your-secure-key
APP_DEBUG=false
APP_ENV=production
```

### API Security

```env
API_DEBUG=false
API_STRICT=true
RATE_LIMIT=60
```

## Performance Optimization

1. **Caching**

   - Enable page cache
   - Configure object caching
   - Set up CDN

2. **Database**

   - Optimize queries
   - Configure indexes
   - Set up replication

3. **Assets**
   - Minify CSS/JS
   - Optimize images
   - Enable compression

## Maintenance Mode

### Enable Maintenance Mode

```bash
php artisan down
```

### Disable Maintenance Mode

```bash
php artisan up
```

## Important Notes

1. **Backup Configuration**

   - Regular database backups
   - Configuration file backups
   - Media file backups

2. **Monitoring**

   - Error logging
   - Performance monitoring
   - Security auditing

3. **Updates**
   - Regular system updates
   - Security patches
   - Feature updates
