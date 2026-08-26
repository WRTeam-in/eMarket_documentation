---
sidebar_position: 3
---

# Localhost Setup

You can set up eMarket on your localhost environment for development and testing purposes. Follow these steps:

1. Install XAMPP or similar local server environment
2. Create a database for eMarket
3. Extract the eMarket files to your web server directory
4. Access the installation wizard through your browser
5. Follow the installation steps as described in the Server Setup section

6. Install XAMPP and Composer.
7. Copy emarket code in (EX. C:/Xampp/htdocs/emarket) your folder (make sure all files move). If you going to setup it on server give root path to public folder (public_html/emarket/public).
8. Add Your Domain Name As `APP_URL=yourdomain` (Ex: wrteam.in or emarket.wrteam.in) in `.env` File. (Note:Only for Live Server)

**Note:** Be advised that if you do not find the `.env` file in the root folder, it is necessary to activate the "Unhide hidden files and folders" option in your settings.  
Check the .env file and ensure that INSTALL_MODE=server is set for installation on a live server hosting.

4. Create Database name 'emarket' and change `DB_DATABASE=emarket` `DB_USERNAME=database_user_name` `DB_PASSWORD=database_user_password` `INSTALL_MODE=localhost` in `.env` File.
5. Now, in root directory, run this command `composer install`
6. After Composer installed successfully, run this command `npm install`
7. After npm installed successfully, run this command `php artisan migrate` to add all required tables in database. (Note: Make Sure Database configure in `.env`)
8. After Migration run this command to add required database entries `php artisan db:seed`
9. For API's Authentication run command `php artisan passport:install`
10. For Images run command `php artisan storage:link`, If it is show link is already generated Please delete folder `public/storage` and run command again.
11. Now, in root directory, run this command `php artisan serve` (Note: This is only for localhost not for server)

## Troubleshooting

### Common Issues and Solutions

1. **Composer Memory Limit**

   ```bash
   COMPOSER_MEMORY_LIMIT=-1 composer install
   ```

2. **Permission Issues**

   ```bash
   chmod -R 775 storage bootstrap/cache
   ```

3. **Node.js Version**

   - Use Node.js version 14.x or higher
   - Use `nvm` to manage Node.js versions

4. **Database Connection**
   - Verify MySQL service is running
   - Check database credentials in `.env`
   - Ensure database exists

## Development Tips

1. Enable Debug Mode in `.env`:

   ```env
   APP_DEBUG=true
   ```

2. Clear Cache:

   ```bash
   php artisan config:clear
   php artisan cache:clear
   php artisan view:clear
   ```

3. Watch for Changes:

   ```bash
   npm run watch
   ```

4. Access Logs:
   - Check `storage/logs/laravel.log`
   - Enable debug bar for development
