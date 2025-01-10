const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Salom alaykum");
});

app.use("/", (req, res) => {
  res.send("Salom alaykum");
});

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
