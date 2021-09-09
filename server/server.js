const path = require("path");
const express = require("express");
const indexRouter = require("./routes/index");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));

server.use("/api/v1/index", indexRouter);

module.exports = server;
