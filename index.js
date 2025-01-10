const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Salom alaykum");
});

app.use("/", (req, res) => {
  res.send("Salom alaykum");
});

app.listen(4080, () => {
  console.log("Server is running on port 4080");
});
