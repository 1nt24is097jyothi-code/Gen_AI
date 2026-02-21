const express = require('express');
const app = express();

// VERY IMPORTANT (for deployment)
const PORT = process.env.PORT || 5000;

// Allow backend to read JSON
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Error handling route
app.post('/api/error', (req, res) => {
  const { error } = req.body;

  let solution = "Try restarting your app.";

  if (error?.toLowerCase().includes("port")) {
    solution = "It looks like a port conflict. Stop other processes or change the port.";
  } else if (error?.toLowerCase().includes("not found")) {
    solution = "Check your file paths and ensure the resource exists.";
  }

  res.json({ solution });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});