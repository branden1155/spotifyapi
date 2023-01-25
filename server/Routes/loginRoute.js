const express = require("express");
const loginApi = require("../Controllers/Login");
const Route = express.Router();

Route.post("/", loginApi);;

module.exports = Route;