const express = require("express");
const refreshToken = require("../Controllers/refreshToken");
const Route = express.Router();

Route.post("/", refreshToken);

module.exports = Route;