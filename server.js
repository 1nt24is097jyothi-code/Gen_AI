// ===== IMPORTS =====
const express = require("express");
const cors = require("cors");

// ===== APP SETUP =====
const app = express();

// ===== MIDDLEWARE =====
app.use(cors()); // allow frontend requests
app.use(express.json()); // read JSON body

// ===== ROUTES =====

// Home route (IMPORTANT → fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Test API route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Example POST route
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `You said: ${message}`,
  });
});

// ===== START SERVER =====
// Railway/Render automatically provide PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});