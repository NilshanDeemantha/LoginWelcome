const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const testUserName = "testUser";
const testPassword = "abc123";

app.post("/login", (req, res) => {
  const {userName, password} = req.body;
  if (testUserName === userName && testPassword === password) {
    res.status(200).send();
  } else if (testUserName !== userName && testPassword !== password) {
    res.status(401).send({msg: "Both Are invalid"});
  } else if (testUserName !== userName) {
    res.status(401).send({msg: "Username invalid"});
  } else if (testPassword !== password) {
    res.status(401).json({msg: "Password invalid"});
  }
});

exports.app = functions.https.onRequest(app);
