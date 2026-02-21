const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// ✅ API route for error handling
app.post("/api/error", (req, res) => {
  const { error } = req.body;

  // Basic solution message (you can expand logic later)
  const solution = "Try restarting the service or reinstall dependencies.";

  res.json({ solution });
});

// Catch-all route to avoid 404 errors for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));