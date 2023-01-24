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

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");
const { ensureLoggedIn } = require("connect-ensure-login");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/save", ensureLoggedIn, (req, res) => {
  NewUser = new User({
    name: req.name,
    googleid: req.userId,
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

  NewUser.save().then((story) => res.send(story));
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
