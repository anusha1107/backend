import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Simple route to test server
app.get("/", (req, res) => {
  res.send("✅ Server is running successfully on Render!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
