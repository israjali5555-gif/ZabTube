const express = require("express"); const app = express(); const PORT = 3000;

app.use(express.json()); app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => { res.send("ZabTube Backend Server Running Successfully 🚀"); });

app.get("/api/videos", (req, res) => { res.json({ success: true, message: "Video API working successfully", videos: [ { id: 1, title: "Featured Demo Video", channel: "Demo Channel" }, { id: 2, title: "Nature Beautiful Video", channel: "Nature Channel" }, { id: 3, title: "Learning Tutorial", channel: "Education Hub" } ] }); });

app.post("/api/login", (req, res) => { const { email } = req.body;

res.json({ success: true, message: Login successful for ${email} }); });

app.listen(PORT, () => { console.log(ZabTube server running on http://localhost:${PORT}); });
