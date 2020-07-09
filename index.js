const express = require("express");
const app = express();
let Port = 3000;
app.listen(Port, () => {
  console.log("THis server is running on Port ", Port);
});

app.get("/", (req, res) => {
  res.send({
    message: "Server is running",
  });
});
app.use(express.json());
app.use("/", require("./router/index.js"));
