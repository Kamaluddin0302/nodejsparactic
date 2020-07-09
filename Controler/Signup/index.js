const express = require("express");
const Router = express.Router();

Router.get("/getData", (req, res) => {
  res.send({
    message: "Now you can Add sign up data",
  });
});
Router.post("/signup", (req, res) => {
  let body = req.body;
  console.log("body", body);
  res.send({ message: body.emailk });
});

module.exports = Router;