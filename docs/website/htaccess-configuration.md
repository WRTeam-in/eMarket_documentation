---
sidebar_position: 11
title: .htaccess Configuration
---

This guide explains how to configure your Apache web server for both static and dynamic (SEO-enabled) deployments of the eBroker web application using .htaccess rules.

## Apache Configuration (.htaccess)

### Option 1: Static File Hosting (Default Configuration)

```
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^categories/$ /404.html [L]
    RewriteRule ^categories/([^/]+)/?$ /categories/[slug].html [L]

    RewriteRule ^order-detail/$ /order-detail.html [L]
    RewriteRule ^order-detail/([^/]+)/?$ /order-detail/[orderid].html [L]

    RewriteRule ^product/$ /products.html [L]
    RewriteRule ^product/([^/]+)/?$ /product/[slug].html [L]

    RewriteRule ^profile/orderhistory/$ /profile/orderhistory.html [L]
    RewriteRule ^profile/orderhistory/([^/]+)/?$ /profile/orderhistory/[orderid].html [L]

    RewriteRule ^profile/$ /profile.html [L]
    RewriteRule ^profile/activeorders$ /profile/activeorders.html [L]
    RewriteRule ^profile/address$ /profile/address.html [L]
    RewriteRule ^profile/notifications$ /profile/notifications.html [L]
    RewriteRule ^profile/orderhistory$ /profile/orderhistory.html [L]
    RewriteRule ^profile/transaction$ /profile/transaction.html [L]
    RewriteRule ^profile/wallethistory$ /profile/wallethistory.html [L]
    RewriteRule ^profile/wishlist$ /profile/wishlist.html [L]
    RewriteRule ^404$ /404.html [L]
    RewriteRule ^about-us$ /about-us.html [L]
    RewriteRule ^applications$ /applications.html [L]
    RewriteRule ^brands$ /brands.html [L]
    RewriteRule ^cancellation-policy$ /cancellation-policy.html [L]
    RewriteRule ^cart$ /cart.html [L]
    RewriteRule ^checkout$ /checkout.html [L]
    RewriteRule ^contact-us$ /contact-us.html [L]
    RewriteRule ^countries$ /countries.html [L]
    RewriteRule ^faqs$ /faqs.html [L]
    RewriteRule ^privacy-policy$ /privacy-policy.html [L]
    RewriteRule ^products$ /products.html [L]
    RewriteRule ^profile$ /profile.html [L]
    RewriteRule ^return-and-exchange-policy$ /return-and-exchange-policy.html [L]
    RewriteRule ^sellers$ /sellers.html [L]
    RewriteRule ^shipping-policy$ /shipping-policy.html [L]
    RewriteRule ^terms-and-conditions$ /terms-and-conditions.html [L]
    RewriteRule ^web-payment-status$ /web-payment-status.html [L]

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d

    RewriteRule ^(.*)$ /index.html [L]
</IfModule>
```

### Option 2: Reverse Proxy with SEO Optimization

```
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    
    # Allow SSL certificate verificatio
    RewriteRule ^./well-known/acme-challenge/(.*) /.well-known/acme-challenge/$1 [L]
    
    # Handle Next.js static files
     RewriteRule ^_next/static/(.*) /.next/static/$1 [L]

    # Allow direct access to common static files
    RewriteCond %{REQUEST_URI} \.(js|css|svg|jpg|jpeg|png|gif|ico)$
    RewriteRule ^ - [L]

    # Forward all other requests to Node.js server
    RewriteRule ^index.html http://127.0.0.1:8001/$1 [P]
    RewriteRule ^index.php http://127.0.0.1:8001/$1 [P]
    RewriteRule ^/?(.*)$ http://127.0.0.1:8001/$1 [P]
</IfModule>
```

## Important Notes

1. Port Configuration:

- Make sure the Node.js server port (8001) matches your package.json configuration
- Update the port in the configurations if you're using a different port

2. SSL/HTTPS

- For production, always use HTTPS
- Configure SSL certificates in your Apache virtual host configuration

3. File Permissions:

- Ensure proper file permissions for your web server
- Apache should have read access to all files
- Node.js process should have necessary permissions for dynamic content

4. Performance Tips:

- Enable gzip compression in Apache configuration
- Set appropriate cache headers for static content
- Use CDN for static assets in production

5. Troubleshooting:

- Check Apache error logs if you encounter issues
- Verify that mod_rewrite is enabled for Apache
- Make sure mod_proxy is enabled when using Option 2 (Reverse Proxy)
