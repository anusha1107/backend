// index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.post("/submit", (req, res) => {
  const { name, message } = req.body;

  // Log to backend console when frontend submits form
  console.log(`Form submitted by ${name}`);

  // Send response back to frontend
  res.send(`Hi ${name}, your message '${message}' was received successfully!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

