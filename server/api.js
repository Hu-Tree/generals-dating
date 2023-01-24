/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const GameData = require("./models/gameData");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.get("/test", (req, res) => {
  // empty selector means get all documents
  res.send({ msg: "hi" });
});

router.get("/save", auth.ensureLoggedIn, (req, res) => {
  GameData.find({}).then((gameData) => res.send(gameData));
});

router.post("/save", auth.ensureLoggedIn, (req, res) => {
  console.log("hi");
  console.log(req.user);
  const NewGameData = new GameData({
    user_id: req.user._id,
    name: req.user.name,
    technical: req.body.technical,
    presentation: req.body.presentation,
    cooking: req.body.cooking,
    networking: req.body.networking,
    stat5: req.body.stat5,
    energy: req.body.energy,
    health: req.body.health,
    currentTime: req.body.currentTime,
    reputation1: req.body.reputation1,
    reputation2: req.body.reputation2,
    reputation3: req.body.reputation3,
    reputation4: req.body.reputation4,
  });

  NewGameData.save().then((user) => res.send(user));
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
