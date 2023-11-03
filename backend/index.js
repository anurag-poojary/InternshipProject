// console.log("Hello Everyone");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/route");
const cors = require("cors");


const app = express();
app.use(cors());
// DB Connection
app.use(express.json());


app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://badaz:Anurag.12102003@cluster0.jtvibdz.mongodb.net/Movies"
  )
  .then(() => {
    console.log("Database is Connected Successfully 😎");
  })
  .catch((err) => {
    console.log(err, "Something Went Wrong");
  });


// Test API
app.get("/test", (req, res) => {
  res.send("This is Test Api ");
});

app.listen(5000, () => {
  console.log("Server Is Running On Port 5000");
});