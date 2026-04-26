// backend/auth.js

const jwt = require("jsonwebtoken");

// Dummy secret key (real project में .env में रखना चाहिए)
const SECRET_KEY = "ZABTUBE_SECRET_KEY";

// User login function (demo)
function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email aur password required hai"
    });
  }

  // demo user check (real DB later)
  const user = {
    id: 1,
    email: email
  };

  // JWT token generate
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "7d" });

  res.json({
    success: true,
    message: "Login successful",
    token: token
  });
}

// Token verify function
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.json({
      success: false,
      message: "Token missing"
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.json({
      success: false,
      message: "Invalid token"
    });
  }
}

module.exports = {
  loginUser,
  verifyToken
};
