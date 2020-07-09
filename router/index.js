const express = require("express");
const Router = express.Router();

Router.use("/v1/signup", require("./../Controler/Signup/index.js"));
Router.use("/v1/login", require("./../Controler/login/index.js"));

module.exports = Router;
