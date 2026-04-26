const APP_CONFIG = { appName: "ZabTube", version: "1.0.0",

youtube: { apiKey: "YOUR_YOUTUBE_API_KEY_HERE", channelId: "YOUR_CHANNEL_ID_HERE", maxResults: 20 },

googleAuth: { clientId: "YOUR_GOOGLE_CLIENT_ID_HERE", authDomain: "YOUR_PROJECT.firebaseapp.com" },

firebase: { apiKey: "YOUR_FIREBASE_API_KEY", authDomain: "YOUR_PROJECT.firebaseapp.com", projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_PROJECT.appspot.com", messagingSenderId: "YOUR_SENDER_ID", appId: "YOUR_APP_ID" },

features: { enableLogin: true, enableLibrary: true, enableSubscriptions: true, enableWatchLater: true, enableSearch: true } };

console.log(APP_CONFIG.appName + " config loaded successfully.");
