const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECT);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("connected to database"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postsRoute = require("./routes/posts_route");
app.use("/posts", postsRoute);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
