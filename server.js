const express = require('express');
const app = express();
const PORT = 5000;

// Allow backend to read JSON from frontend
app.use(express.json());

// Existing test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// NEW error-handling route
app.post('/api/error', (req, res) => {
  const { error } = req.body;

  // Simple demo logic: return a solution based on the error text
  let solution = "Try restarting your app.";
  if (error.toLowerCase().includes("port")) {
    solution = "It looks like a port conflict. Stop other processes or change the port.";
  } else if (error.toLowerCase().includes("not found")) {
    solution = "Check your file paths and ensure the resource exists.";
  }

  res.json({ solution });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});