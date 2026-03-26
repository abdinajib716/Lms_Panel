# 🚀 LMS Deployment Scripts

This guide explains how to use the deployment scripts for real-time updates in production.

---

## 📋 Available Scripts

### 1. **`./deploy.sh`** - Full Production Deployment
**Use this after making changes to .tsx, .ts, .jsx files**

```bash
./deploy.sh
```

**What it does:**
- ✅ Builds frontend assets (React/TypeScript) with increased memory
- ✅ Clears all Laravel cache
- ✅ Optimizes Laravel for production
- ✅ Sets proper file permissions
- ✅ Ready for service restart (optional)

**When to use:**
- After editing `.tsx`, `.ts`, `.jsx`, `.css` files
- After making frontend changes
- For production deployments

---

### 2. **`./dev.sh`** - Development Mode (Recommended for Development)
**Use this for real-time hot reload during development**

```bash
./dev.sh
```

**What it does:**
- 🔥 Starts Vite development server
- 🔄 Auto-reloads on file changes
- ⚡ No build required - instant updates
- 💾 Uses less memory

**When to use:**
- During active development
- When testing changes in real-time
- To avoid build memory issues

**Note:** Keep this running in a separate terminal while developing!

---

### 3. **`./refresh.sh`** - Quick Cache Refresh
**Use this after PHP/Backend changes only**

```bash
./refresh.sh
```

**What it does:**
- 🗑️ Clears Laravel cache
- ⚡ Re-caches config, routes, views
- 🚫 Does NOT rebuild frontend

**When to use:**
- After changing `.php` files
- After changing `.env` file
- After changing routes or config
- When cache needs refresh without frontend rebuild

---

## 🎯 Usage Examples

### Scenario 1: You changed `curriculum.tsx` (like today)
```bash
# Option A: Production build (slower but production-ready)
./deploy.sh

# Option B: Development mode (faster, real-time)
./dev.sh  # Keep running, see changes instantly
```

### Scenario 2: You changed PHP controller
```bash
./refresh.sh  # Quick cache refresh only
```

### Scenario 3: You changed both frontend and backend
```bash
./deploy.sh  # Full deployment
```

---

## 🔧 Troubleshooting

### Build gets "Killed" (Out of Memory)
The `deploy.sh` script now includes increased Node memory (4GB). If still failing:

1. **Use development mode instead:**
   ```bash
   ./dev.sh
   ```

2. **Or increase swap memory on server:**
   ```bash
   sudo fallocate -l 4G /swapfile
   sudo chmod 600 /swapfile
   sudo mkswap /swapfile
   sudo swapon /swapfile
   ```

### Changes not reflecting
```bash
# Hard refresh everything
./deploy.sh

# Then clear browser cache (Ctrl + Shift + R)
```

---

## 📝 Quick Reference

| Script | Speed | Use Case |
|--------|-------|----------|
| `./dev.sh` | ⚡ Fastest | Development with hot reload |
| `./refresh.sh` | 🚀 Fast | PHP/Backend changes only |
| `./deploy.sh` | 🐢 Slower | Full production deployment |

---

## 🎨 Your Recent Change

For the curriculum button visibility fix you just made:

```bash
# Best option for testing:
./dev.sh

# Or for production:
./deploy.sh
```

Then refresh your browser to see the lesson action buttons now always visible!

---

## 💡 Pro Tips

1. **During development:** Keep `./dev.sh` running for instant updates
2. **Before going live:** Always run `./deploy.sh` for optimized production build
3. **Quick PHP fixes:** Use `./refresh.sh` to save time
4. **Low memory?** Use `./dev.sh` instead of building

---

**Created:** November 21, 2025  
**Last Updated:** November 21, 2025
