const express = require("express"); const router = express.Router();

// Home Route router.get("/", (req, res) => { res.json({ success: true, message: "ZabTube API Routes Working Successfully" }); });

// Videos Route router.get("/videos", (req, res) => { res.json({ success: true, videos: [ { id: 1, title: "Featured Demo Video", channel: "Demo Channel" }, { id: 2, title: "Music Trending Video", channel: "Music Channel" }, { id: 3, title: "Gaming Live Stream", channel: "Gaming Zone" } ] }); });

// Login Route router.post("/login", (req, res) => { const { email } = req.body;

res.json({ success: true, message: User login successful for ${email} }); });

// Profile Route router.get("/profile", (req, res) => { res.json({ success: true, user: { name: "ZabTube User", email: "user@example.com", subscribers: 1200 } }); });

// Library Route router.get("/library", (req, res) => { res.json({ success: true, message: "Library data fetched successfully" }); });

module.exports = router;
