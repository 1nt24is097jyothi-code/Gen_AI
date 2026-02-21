app.post("/chat", async (req, res) => {
  const { message } = req.body;
  const msg = message.toLowerCase();

  let solution = "❌ Sorry, I couldn't identify this error.";

  if (msg.includes("404")) {
    solution = "✅ 404 Error: API route or page not found. Check your backend URL, route path, and deployment.";
  } 
  else if (msg.includes("500")) {
    solution = "✅ 500 Error: Internal server error. Check backend logs, syntax errors, and server crash.";
  }
  else if (msg.includes("cors")) {
    solution = "✅ CORS Error: Enable CORS in backend using app.use(cors()).";
  }
  else if (msg.includes("netlify")) {
    solution = "✅ Netlify Error: Check build logs, environment variables, and build command.";
  }
  else if (msg.includes("railway")) {
    solution = "✅ Railway Error: Check service logs and deployed routes.";
  }
  else if (msg.includes("fetch")) {
    solution = "✅ Fetch Error: Check API URL, method type, headers, and backend route.";
  }
  else if (msg.includes("timeout")) {
    solution = "✅ Timeout Error: Server taking too long. Optimize backend or increase timeout.";
  }

  res.json({ solution });
});