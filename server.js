const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("combined"));

const logs = [];
app.get("/", (req, res) => {
  logs.push(req.query);
  return res.json(req.query);
});

app.get("/logs", (req, res) => {
  return res.json(logs);
});

app.listen(3000);
