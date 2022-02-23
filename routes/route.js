import express from "express";
import fs from "fs";
const router = express.Router();
let userData = [];
fs.readFile("./db/userDetails.json", "utf-8", (err, data) => {
  userData = JSON.parse(data);
});

router.get("/", (req, res) => {
  res.send("GetJson");
});

router.get("/user", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(userData, null, 3));
});

router.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res
      .status(400)
      .end(JSON.stringify({ success: false, msg: "Please send id" }, null, 3));
  }
  if (id > userData.length) {
    return res.status(400).end(
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
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(singleUserData, null, 3));
});

export default router;
