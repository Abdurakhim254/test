import  express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Salom Alaykum Uzbekiston olga vatanim");
});

app.use("/", (req, res) => {
  res.send("Asalom Alaykum");
});  





app.listen(3030, () => {
  console.log("Server is running on port 3030");  
});

///3ball