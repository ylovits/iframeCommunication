const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const cors = require("cors");

app.use(cors());

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/", router);

app.use(express.static(path.join(__dirname, "/static")));

app.listen(3001, () => {
  console.log("Running at Port 3001");
});
