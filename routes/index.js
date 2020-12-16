var express = require("express");
var router = express.Router();
const myDB = require("../db/myMongoDB.js");

router.get("/posts", async (req, res) => {
  // await myDB.initialize();
  let posts = await myDB.getPosts();
  console.log("done");
  res.send(JSON.stringify(posts));
});

router.get("/getdogs", async (req, res) => {
  let posts = await myDB.getPosts();
  console.log("done");
  res.json(posts);
});

module.exports = router;
