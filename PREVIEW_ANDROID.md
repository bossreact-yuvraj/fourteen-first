# 📱 How to Preview on Android

## Method 1: Local Network (Recommended)

### Step 1: Make sure both devices are on the same Wi-Fi network
- Your computer and Android device must be connected to the same Wi-Fi network

### Step 2: Find your computer's local IP address

**On Windows:**
1. Open Command Prompt or PowerShell
2. Type: `ipconfig`
3. Look for "IPv4 Address" under your active network adapter (usually starts with 192.168.x.x or 10.0.x.x)

**On Mac/Linux:**
1. Open Terminal
2. Type: `ifconfig` or `ip addr`
3. Look for your local IP address (usually under `inet`)

### Step 3: Start the development server
```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.xxx:5173/
```

### Step 4: Access from your Android device
1. Open Chrome or any browser on your Android device
2. Type in the address bar: `http://YOUR_IP_ADDRESS:5173`
   - Example: `http://192.168.1.100:5173`
3. The app should load on your Android device!

---

## Method 2: Using USB Debugging (Alternative)

### Step 1: Enable USB Debugging on Android
1. Go to Settings → About Phone
2. Tap "Build Number" 7 times to enable Developer Options
3. Go back to Settings → Developer Options
4. Enable "USB Debugging"

### Step 2: Connect via USB
1. Connect your Android device to your computer via USB
2. On your phone, allow USB debugging when prompted

### Step 3: Use Chrome Remote Debugging
1. On your computer, open Chrome
2. Go to `chrome://inspect`
3. Your device should appear in the list
4. Click "inspect" to open DevTools
5. The app will be accessible through the remote debugging session

---

## Method 3: Using ngrok (For testing from anywhere)

### Step 1: Install ngrok
Download from: https://ngrok.com/download

### Step 2: Start your dev server
```bash
npm run dev
```

### Step 3: Create a tunnel
In a new terminal:
```bash
ngrok http 5173
```

### Step 4: Use the ngrok URL
1. Copy the HTTPS URL from ngrok (e.g., `https://abc123.ngrok.io`)
2. Open this URL on your Android device's browser
3. Works from anywhere, not just local network!

---

## Troubleshooting

### Can't access from Android?
1. **Check firewall**: Make sure Windows Firewall allows connections on port 5173
2. **Check IP address**: Make sure you're using the correct local IP
3. **Check network**: Ensure both devices are on the same Wi-Fi
4. **Try different browser**: Some browsers block local network access

### Firewall Fix (Windows):
1. Open Windows Defender Firewall
2. Click "Allow an app through firewall"
3. Add Node.js or allow port 5173

### Still not working?
Try accessing with your computer's hostname instead:
- Windows: `http://YOUR_COMPUTER_NAME:5173`
- Or use: `http://localhost:5173` if using USB debugging method

---

## Quick Test
Once connected, try:
- Tapping the "Yes" button
- Testing the evasive "No" button on the last question
- Checking if animations work smoothly
- Testing the WhatsApp link

Enjoy testing your cute Valentine's app! 💕
