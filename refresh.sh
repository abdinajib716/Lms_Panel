#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Refreshing Laravel cache...${NC}"

cd /var/www/lms.cajiibcreative.com

# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Recache
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo -e "${GREEN}✓ Cache refreshed successfully!${NC}"
