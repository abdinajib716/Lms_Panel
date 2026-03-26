#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}======================================${NC}"
echo -e "${GREEN}   LMS Deployment Script${NC}"
echo -e "${GREEN}======================================${NC}"
echo ""

# Navigate to project directory
cd /var/www/lms.cajiibcreative.com

# Step 1: Build Frontend Assets
echo -e "${YELLOW}[1/5] Building frontend assets...${NC}"
echo -e "${YELLOW}Increasing Node memory limit...${NC}"
if NODE_OPTIONS="--max-old-space-size=4096" npm run build; then
    echo -e "${GREEN}✓ Frontend assets built successfully${NC}"
else
    echo -e "${RED}✗ Failed to build frontend assets${NC}"
    echo -e "${YELLOW}Tip: Try running 'npm run dev' for development mode${NC}"
    exit 1
fi
echo ""

# Step 2: Clear Laravel Cache
echo -e "${YELLOW}[2/5] Clearing Laravel cache...${NC}"
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
echo -e "${GREEN}✓ Laravel cache cleared${NC}"
echo ""

# Step 3: Optimize Laravel
echo -e "${YELLOW}[3/5] Optimizing Laravel...${NC}"
php artisan config:cache
php artisan route:cache
php artisan view:cache
echo -e "${GREEN}✓ Laravel optimized${NC}"
echo ""

# Step 4: Set Permissions
echo -e "${YELLOW}[4/5] Setting permissions...${NC}"
chmod -R 755 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
echo -e "${GREEN}✓ Permissions set${NC}"
echo ""

# Step 5: Restart Services (optional - uncomment if needed)
echo -e "${YELLOW}[5/5] Restarting services...${NC}"
# Uncomment the services you need to restart:
# sudo systemctl restart php8.3-fpm
# sudo systemctl restart nginx
# sudo supervisorctl restart all
echo -e "${GREEN}✓ Services restart skipped (enable manually if needed)${NC}"
echo ""

echo -e "${GREEN}======================================${NC}"
echo -e "${GREEN}   Deployment Complete! 🚀${NC}"
echo -e "${GREEN}======================================${NC}"
echo -e "${YELLOW}Your changes are now live!${NC}"
