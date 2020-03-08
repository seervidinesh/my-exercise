const express = require("express");
const debug = require("debug")("http");

const app = express();

const name = "My App";

debug("booting %o", name);
app.get("/", (req, res) => {
  debug(req.method + " " + req.url);
  res.send("Hello");
});

app.listen(3000);
