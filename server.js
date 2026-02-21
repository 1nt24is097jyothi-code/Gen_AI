const express = require("express");
const cors = require("cors");

const app = express();   // ✅ app is defined here

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// Chat route
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  // simple AI-like logic (demo solution engine)
  let solution = "";

  if (message.toLowerCase().includes("404")) {
    solution = "404 Error means the route/API is not found. Check backend route and API URL.";
  } 
  else if (message.toLowerCase().includes("cors")) {
    solution = "CORS error: Add app.use(cors()) in backend and redeploy.";
  }
  else if (message.toLowerCase().includes("network")) {
    solution = "Network error: Check backend deployment and BASE_URL.";
  }
  else if (message.toLowerCase().includes("database")) {
    solution = "Database error: Check DB connection string and server logs.";
  }
  else {
    solution = "General fix: Check server logs, API routes, and frontend fetch URL.";
  }

  res.json({
    reply: solution
  });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});