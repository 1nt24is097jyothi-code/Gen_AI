const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// chatbot route
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  // test response
  res.json({
    reply: "Bot received: " + message
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});