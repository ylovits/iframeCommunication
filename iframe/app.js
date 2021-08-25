const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const cors = require("cors");

app.use(cors());

router.get("/", function (req, res) {
  setTimeout(() => {
    res.sendFile(path.join(__dirname + "/index.html"));
  }, 1000);
});

router.get("/page2", function (req, res) {
  setTimeout(() => {
    res.sendFile(path.join(__dirname + "/page2.html"));
  }, 1000);
});

router.get("/page3", function (req, res) {
  setTimeout(() => {
    res.sendFile(path.join(__dirname + "/page3.html"));
  }, 1000);
});

app.use("/", router);

app.use(express.static(path.join(__dirname, "/static")));

app.listen(3000, () => {
  console.log("Running at Port 3000");
});

