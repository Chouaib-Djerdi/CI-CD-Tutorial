const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi, CI/CD!");
});

app.get("/greet", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).send("Bad Request");
  }
  res.send(`Hello, ${name}!`);
});

app.get("/haihai", (req, res) => {
  res.send("captain ole ola!");
});

module.exports = app;
