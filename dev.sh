#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}======================================${NC}"
echo -e "${GREEN}   LMS Development Mode${NC}"
echo -e "${GREEN}======================================${NC}"
echo ""

# Navigate to project directory
cd /var/www/lms.cajiibcreative.com

echo -e "${YELLOW}Starting Vite development server...${NC}"
echo -e "${YELLOW}Changes will be reflected in real-time!${NC}"
echo ""
echo -e "${GREEN}Press Ctrl+C to stop${NC}"
echo ""

# Start Vite dev server
npm run dev
