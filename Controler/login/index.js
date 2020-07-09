const express = require("express");
const Router = express.Router();
Router.post("/login", (req, res) => {
  let body = req.body;
  console.log(body);
  res.send(body);
});

module.exports = Router;
