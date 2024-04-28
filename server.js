const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Node Server Listening on " + port + "!"));
