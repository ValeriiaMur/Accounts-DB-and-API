const express = require("express");

const db = require("../data/dbConfig.js");
const accountRoute = require("./accounts/accountsRoute")

const server = express();

server.use(express.json());
server.use("/accounts", accountRoute);

module.exports = server;
