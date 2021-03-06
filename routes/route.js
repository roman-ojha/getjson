import express from "express";
import fs from "fs";
const router = express.Router();
let userData = [];
fs.readFile("./db/userDetails.json", "utf-8", (err, data) => {
  userData = JSON.parse(data);
});

router.get("/", (req, res) => {
  return res.redirect("https://getjson.netlify.app");
});

router.get("/user", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(userData, null, 3));
});

router.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id > userData.length) {
    res.setHeader("Content-Type", "application/json");
    return res.end(
      JSON.stringify(
        {
          success: false,
          msg: `${id} userID doesn't exist, Please try upto ${userData.length}`,
        },
        null,
        3
      )
    );
  }
  const singleUserData = userData.find((data) => data.id === id);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify(singleUserData, null, 3));
});

router.post("/user", (req, res) => {
  const newUser = req.body;
  if (
    !newUser.username ||
    !newUser.email ||
    !newUser.phoneNumber ||
    !newUser.picture
  ) {
    res.setHeader("Content-Type", "application/json");
    return res.end(
      JSON.stringify(
        {
          success: false,
          msg: "Required Field: username, email, phoneNumber, picture",
        },
        null,
        4
      )
    );
  }
  newUser["id"] = userData.length + 1;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify([newUser, ...userData], null, 3));
});

export default router;
