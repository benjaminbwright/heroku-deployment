// dependencies
// express
const express = require("express");

// app/port
const PORT = process.env.PORT || 4000;
const app = express();

// middlewares

// routes
app.get("/", (req, res) => res.send("The server works!"));

// start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
