# Mentor LMS - Installation Issues & Solutions

## Server Setup & Configuration Log
**Date:** November 9, 2025  
**Domain:** https://lms.cajiibcreative.com  
**Application:** Mentor LMS v2.3.0 (Laravel 12 + React)

---

## Issue #1: Log File Permission Error

### Short Info
Laravel could not write to the log file during cache operations, causing view caching to fail.

### Issues Display
```
UnexpectedValueException

The stream or file "/var/www/lms.cajiibcreative.com/storage/logs/laravel-2025-11-09.log" 
could not be opened in append mode: Failed to open stream: Permission denied

The exception occurred while attempting to log: Unable to locate a class or view 
for component [certificate::layouts.master].
```

### Solution Used
```bash
# Set proper permissions on storage/logs directory
sudo chmod -R 775 storage/logs

# Set group ownership to www-data
sudo chgrp -R www-data storage/logs

# Create log file with proper permissions
touch storage/logs/laravel-2025-11-09.log
sudo chmod 664 storage/logs/laravel-2025-11-09.log
sudo chgrp www-data storage/logs/laravel-2025-11-09.log
```

---

## Issue #2: Database Driver Configuration Error

### Short Info
Application was configured to use database driver for sessions and cache before database tables existed, causing errors during installer access.

### Issues Display
```
SQLSTATE[42S02]: Base table or view not found: 1146 Table 'lms.sessions' doesn't exist 
(Connection: mysql, SQL: select * from `sessions` where `id` = ITIXHMLAhsnAuQODVwlgXc5WCCTTqQu5YvL4XqLk limit 1)

SQLSTATE[42S02]: Base table or view not found: 1146 Table 'lms.cache' doesn't exist 
(Connection: mysql, SQL: delete from `cache`)
```

### Solution Used
**Modified `.env` file** to use file-based drivers before installation:

```env
# Changed from:
SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=database

# Changed to:
SESSION_DRIVER=file
CACHE_STORE=file
QUEUE_CONNECTION=sync
```

**Note:** After installation completes, these can be switched back to database drivers if desired.

---

## Issue #3: Middleware Property Access Error

### Short Info
The `HandleInertiaRequests` middleware attempted to access the `fields` property on a null `$system` object when database tables didn't exist yet.

### Issues Display
```
ErrorException

Attempt to read property "fields" on null

at /var/www/lms.cajiibcreative.com/app/Http/Middleware/HandleInertiaRequests.php:80
```

### Solution Used
**Modified** `/var/www/lms.cajiibcreative.com/app/Http/Middleware/HandleInertiaRequests.php`:

```php
// Line 80 - Added null check before accessing properties
$direction = Cookie::get('direction', 'ltr');
if ($system && array_key_exists('direction', $system->fields)) {
    $systemDirection = $system->fields['direction'];
    if ($systemDirection !== 'none') {
        $direction = $systemDirection;
    }
}
```

---

## Issue #4: Installer Route Middleware Loading All System Data

### Short Info
The Inertia middleware was loading all system settings, navbar, footer, and notifications even for installer routes, causing database errors before installation.

### Issues Display
```
ErrorException

Attempt to read property "fields" on null

Internal Server Error during installer access
```

### Solution Used
**Modified** `/var/www/lms.cajiibcreative.com/app/Http/Middleware/HandleInertiaRequests.php`:

Added early return for installer routes (lines 56-66):

```php
public function share(Request $request): array
{
    // Skip data loading for installer routes
    if ($request->is('install/*')) {
        return [
            ...parent::share($request),
            'flash' => [
                'error' => fn() => $request->session()->get('error'),
                'warning' => fn() => $request->session()->get('warning'),
                'success' => fn() => $request->session()->get('success'),
            ],
        ];
    }
    
    // Rest of the code continues...
}
```

---

## Issue #5: Navbar and Footer Database Query Error

### Short Info
Application tried to load navbar and footer data from non-existent database tables during installer access.

### Issues Display
```
SQLSTATE[42S02]: Base table or view not found: 1146 Table 'lms.navbars' doesn't exist 
(Connection: mysql, SQL: select * from `navbars` where `slug` = navbar_1 and `active` = 1 limit 1)
```

### Solution Used
**Modified** `/var/www/lms.cajiibcreative.com/app/Http/Middleware/HandleInertiaRequests.php`:

Added table existence check before loading navbar/footer (lines 99-105):

```php
// Load navbar and footer only if tables exist
$navbar = null;
$footer = null;
if (Schema::hasTable('navbars') && Schema::hasTable('footers')) {
    $navbar = $this->settingsService->getNavbar('navbar_1');
    $footer = $this->settingsService->getFooter('footer_1');
}

return [
    ...parent::share($request),
    'page' => app('intro_page'),
    'auth' => ['user' => $user],
    'system' => $system,
    'customize' => $request->query('customize', false),
    'navbar' => $navbar,
    'footer' => $footer,
    // ...
];
```

---

## Issue #6: .env File Write Permission Error

### Short Info
Installer could not write updated configuration to the `.env` file due to insufficient permissions.

### Issues Display
```
Error: file_put_contents(/var/www/lms.cajiibcreative.com/.env): 
Failed to open stream: Permission denied
```

### Solution Used
```bash
# Set .env file to be writable by web server
sudo chmod 664 .env
sudo chown karshe:www-data .env

# Ensure storage directories have proper permissions
sudo chown -R karshe:www-data storage/app
sudo chmod 775 storage/app/public
```

---

## Issue #7: 502 Bad Gateway - Nginx FastCGI Buffer Size Error

### Short Info
Nginx was unable to handle large response headers from PHP-FPM, causing a 502 Bad Gateway error when accessing the application.

### Issues Display
```
502 Bad Gateway
nginx/1.24.0 (Ubuntu)

Nginx error log showed:
upstream sent too big header while reading response header from upstream, 
client: 197.220.92.25, server: lms.cajiibcreative.com, request: "GET / HTTP/2.0", 
upstream: "fastcgi://unix:/var/run/php/php8.3-fpm.sock:"
```

### Root Cause
Laravel/Inertia applications send very large response headers containing preload links for all frontend assets (CSS, JS, etc.). The default Nginx FastCGI buffer configuration (4k-8k buffers) was insufficient to handle these large headers, causing Nginx to reject the response from PHP-FPM.

### Solution Used
**Modified** `/etc/nginx/sites-available/lms.cajiibcreative.com`:

Added increased buffer sizes to the PHP location block:

```nginx
# PHP-FPM processing
location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
    include fastcgi_params;
    
    # Increase buffer sizes for large headers
    fastcgi_buffers 16 16k;
    fastcgi_buffer_size 32k;
}
```

**Commands executed:**
```bash
# Copy updated configuration
sudo cp /tmp/lms.cajiibcreative.com.conf /etc/nginx/sites-available/lms.cajiibcreative.com

# Test Nginx configuration
sudo nginx -t

# Reload Nginx to apply changes
sudo systemctl reload nginx
```

**Verification:**
```bash
curl -I https://lms.cajiibcreative.com
# Result: HTTP/2 200 ✅ (Previously returned 502)
```

---

## Complete Setup Summary

### ✅ Completed Tasks

1. **Application Deployment**
   - Unzipped `lms (2).zip` to `/var/www/lms.cajiibcreative.com/`
   - Moved all files to correct root directory
   - Kept original zip file

2. **Environment Configuration**
   - Created `.env` from `.env.example`
   - Configured database credentials (lms/lms/Hnajiib12345$)
   - Set APP_URL to `https://lms.cajiibcreative.com`
   - Changed drivers to file-based for installation

3. **File Permissions**
   - Set ownership to `karshe:www-data`
   - Applied `775` permissions to `storage/` and `bootstrap/cache/`
   - Set `664` permissions on `.env` file
   - Created storage symlink

4. **Dependencies & Build**
   - Composer dependencies already installed
   - Installed 791 npm packages
   - Built frontend assets with Vite (45 seconds)
   - Created `public/build/` with compiled assets

5. **Web Server Configuration**
   - Nginx already configured with SSL (Let's Encrypt)
   - PHP-FPM 8.3 running and verified
   - Added FastCGI buffer size configuration for large headers
   - Configuration tested and reloaded

6. **Middleware Fixes**
   - Added installer route bypass in HandleInertiaRequests
   - Added null checks for system settings
   - Added table existence checks for navbar/footer
   - Ensured installer can run before database setup

### Server Stack

- **PHP:** 8.3.25
- **Composer:** 2.8.9
- **Node.js:** v20.19.5
- **NPM:** 10.8.2
- **MySQL:** 8.x (database: lms)
- **Web Server:** Nginx with SSL (Let's Encrypt)

### Installation Access

**Installer URL:** https://lms.cajiibcreative.com/install/step-1

### Post-Installation Steps

After installer completes:
1. Login to admin dashboard
2. Configure SMTP for email notifications
3. Set up payment gateways (PayPal, Stripe, Razorpay, etc.)
4. Customize homepage and branding
5. Create categories and courses
6. Optionally switch back to database drivers in `.env`:
   ```env
   SESSION_DRIVER=database
   CACHE_STORE=database
   QUEUE_CONNECTION=database
   ```
7. Run `php artisan config:cache` after any `.env` changes

---

## Files Modified During Setup

1. `/var/www/lms.cajiibcreative.com/.env` - Database and driver configuration
2. `/var/www/lms.cajiibcreative.com/app/Http/Middleware/HandleInertiaRequests.php` - Middleware protection for installer
3. `/etc/nginx/sites-available/lms.cajiibcreative.com` - Nginx FastCGI buffer configuration

## Critical Lessons Learned

1. **Always check database table existence** before querying in middleware
2. **Use file-based drivers** during installation before database tables exist
3. **Set proper permissions** for web server write access (www-data group)
4. **Add installer route bypasses** to prevent loading non-existent data
5. **Increase Nginx FastCGI buffers** for Laravel/Inertia applications with large headers
6. **Test installer access** before declaring setup complete
7. **Check Nginx error logs** (`/var/log/nginx/error.log`) for detailed error messages

---

## Issue Summary

**Total Issues Encountered:** 7  
**All Issues Resolved:** ✅

1. ✅ Log File Permission Error
2. ✅ Database Driver Configuration Error
3. ✅ Middleware Property Access Error
4. ✅ Installer Route Middleware Loading Error
5. ✅ Navbar and Footer Database Query Error
6. ✅ .env File Write Permission Error
7. ✅ 502 Bad Gateway - Nginx FastCGI Buffer Size Error

---

**Document Created:** November 9, 2025  
**Last Updated:** November 9, 2025 - 15:41 UTC  
**Status:** ✅ All issues resolved - Application online and ready for installation wizard  
**Installer URL:** https://lms.cajiibcreative.com/install/step-1
