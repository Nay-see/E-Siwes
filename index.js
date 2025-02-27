require("dotenv").config();
const PORT = process.env.PORT || 8080;
const DBURI = process.env.DBURI;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(require("./requirements"));

app.get("/", (req, res) => {
  res.json({
    server: true,
    database: false,
  });
});

mongoose.connect(DBURI).then((res) => {
  console.log("Connected: ", true);
  app.listen(PORT, () => console.log(`Server started on ${PORT}`));
});
