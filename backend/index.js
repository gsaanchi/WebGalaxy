const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://disanggirlsiitg:disanggirlsiitg@cluster0.oelkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error:", err));
