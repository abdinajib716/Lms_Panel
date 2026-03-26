#!/bin/bash

# Script to build assets with swap space if needed
# This helps when server has limited RAM

echo "Building WhatsApp Widget assets..."

# Check if we need more memory
FREE_MEM=$(free -m | awk 'NR==2{print $4}')
echo "Available memory: ${FREE_MEM}MB"

if [ "$FREE_MEM" -lt 2000 ]; then
    echo "Low memory detected. Creating temporary swap file..."
    
    # Create 2GB swap file
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    
    echo "Swap enabled. Building..."
fi

# Build the project
NODE_OPTIONS="--max-old-space-size=1536" npm run build

BUILD_STATUS=$?

# Clean up swap if we created it
if [ -f /swapfile ]; then
    echo "Cleaning up swap file..."
    sudo swapoff /swapfile
    sudo rm /swapfile
fi

if [ $BUILD_STATUS -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "WhatsApp Widget is now active on your site."
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi
