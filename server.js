const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const port = process.env.PORT || 9000;
app.use(express.json());

const usersRoute = require("./routes/usersRoute");

app.use("/api/users", usersRoute);

app.listen(port, () => console.log("Node Server Listening on " + port + "!"));
