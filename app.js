const express = require("express");
const app = express();
const router = require("./routes/taskRoutes");
require("./db/connect");

// ACTIVATE MIDDLEWARE xd
app.use(express.json());

// ROUTES
app.get("/hello", (req, res) => {
  res.send("SUCCESS");
});

app.use("/api/v1/tasks", router);

module.exports = app;
