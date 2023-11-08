import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const port = 4000;
const testUserName = "testUser";
const testPassword = "abc123";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { userName, password } = req.body;
  if (testUserName === userName && testPassword === password) {
    res.status(200).send();
  } else if (testUserName !== userName && testPassword !== password) {
    res.status(401).send({ msg: "Both Are invalid" });
  } else if (testUserName !== userName) {
    res.status(401).send({ msg: "Username invalid" });
  } else if (testPassword !== password) {
    res.status(401).json({ msg: "Password invalid" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
