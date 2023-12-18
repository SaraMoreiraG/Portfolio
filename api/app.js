require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");

const app = express();
const emailRoutes = require("./routes/emailRoutes"); // Import the emailRoutes router

// Middleware for parsing JSON
app.use(express.json());

// Middleware for CORS
app.use(
  cors({
    origin: "*",
    methods: "POST",
    credentials: true,
  })
);

// Use the emailRoutes router for the /send-email endpoint
app.use("/email", emailRoutes);

// Define the root URL route
app.get("/", (req, res) => {
  res.send("Welcome to your API");
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send("Sorry, can't find that!");
});

// HTTPS options
const httpsOptions = {
  key: fs.readFileSync(
    "/etc/letsencrypt/archive/api.atleticosanabria.com/privkey1.pem",
    "utf8"
  ),
  cert: fs.readFileSync(
    "/etc/letsencrypt/archive/api.atleticosanabria.com/fullchain1.pem",
    "utf8"
  ),
};

// Start the server with HTTPS
const port = process.env.PORT || 3001;
https.createServer(httpsOptions, app).listen(port, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log("Server is running on port " + port + " with HTTPS");
  }
});
