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
const GameData = require("./models/gameData");
const User = require("./models/user");
const UserStats = require("./models/userStats");

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
  res.send({ msg: "hi" });
});

router.get("/allSaves", (req, res) => {
  GameData.find().then((gameData) => res.send(gameData));
});

router.get("/allUserStats", (req, res) => {
  UserStats.find().then((userStats) => res.send(userStats));
});

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});

router.get("/userStats", async (req, res) => {
  await UserStats.deleteMany({});
  UserStats.find({ user_id: req.query.user_id }).then(async (userStats) => {
    const user = await User.findById(req.query.user_id);
    if (userStats.length === 0) {
      const newUserStatsObject = {
        user_id: req.query.user_id,
        name: user.name,
        games_played: 0,
        best_technical: 0,
        best_networking: 0,
        best_presentation: 0,
        best_cooking: 0,
        best_rep1: 0,
        best_rep2: 0,
        best_rep3: 0,
        best_rep4: 0,
      };
      const NewUserStats = new UserStats(newUserStatsObject);
      NewUserStats.save();
      res.send(newUserStatsObject);
    } else {
      res.send(userStats[0]);
    }
  });
});

router.post("/endingStats", (req, res) => {
  UserStats.find({ user_id: req.user._id }).then(async (userStatsList) => {
    const user = await User.findById(req.user._id);
    if (userStatsList.length === 0) {
      //First post
      const newUserStatsObject = {
        user_id: req.user._id,
        name: user.name,
        games_played: 1,
        best_technical: req.body.technical,
        best_networking: req.body.networking,
        best_presentation: req.body.presentation,
        best_cooking: req.body.cooking,
        best_rep1: req.body.reputation1,
        best_rep2: req.body.reputation2,
        best_rep3: req.body.reputation3,
        best_rep4: req.body.reputation4,
      };
      const NewUserStats = new UserStats(newUserStatsObject);
      res.send(await NewUserStats.save());
    } else {
      const NewUserStats = new UserStats({
        user_id: req.user._id,
        name: user.name,
        games_played: userStatsList[0].games_played + 1,
        best_technical: Math.max(userStatsList[0].best_technical, req.body.technical),
        best_networking: Math.max(userStatsList[0].best_networking, req.body.networking),
        best_presentation: Math.max(userStatsList[0].best_presentation, req.body.presentation),
        best_cooking: Math.max(userStatsList[0].best_cooking, req.body.cooking),
        best_rep1: Math.max(userStatsList[0].best_rep1, req.body.reputation1),
        best_rep2: Math.max(userStatsList[0].best_rep2, req.body.reputation2),
        best_rep3: Math.max(userStatsList[0].best_rep3, req.body.reputation3),
        best_rep4: Math.max(userStatsList[0].best_rep4, req.body.reputation4),
      });

      await UserStats.deleteMany({ user_id: req.user._id });
      res.send(await NewUserStats.save());
    }
  });
});

router.get("/leaderboard-profiles", async (req, res) => {
  UserStats.find().then((userStatsL) => {
    let userStatsList = [];
    for (let i = 0; i < userStatsL.length; i++) {
      userStatsList.push({
        overallrep:
          userStatsL[i].best_rep1 +
          userStatsL[i].best_rep2 +
          userStatsL[i].best_rep3 +
          userStatsL[i].best_rep4,
        overallskill:
          userStatsL[i].best_technical +
          userStatsL[i].best_cooking +
          userStatsL[i].best_networking +
          userStatsL[i].best_presentation,
        games_played: userStatsL[i].games_played,
        best_technical: userStatsL[i].best_technical,
        best_networking: userStatsL[i].best_networking,
        best_presentation: userStatsL[i].best_presentation,
        best_cooking: userStatsL[i].best_cooking,
        best_rep1: userStatsL[i].best_rep1,
        best_rep2: userStatsL[i].best_rep2,
        best_rep3: userStatsL[i].best_rep3,
        best_rep4: userStatsL[i].best_rep4,
        name: userStatsL[i].name,
      });
    }

    userStatsList.sort((a, b) => {
      return b["overallrep"] - a["overallrep"];
    });
    const overallrepl = userStatsList.slice(0, 5);
    userStatsList.sort((a, b) => {
      return b["overallskill"] - a["overallskill"];
    });
    const overallskilll = userStatsList.slice(0, 5);
    userStatsList.sort((a, b) => {
      return b["games_played"] - a["games_played"];
    });
    const gamesplayedl = userStatsList.slice(0, 5);
    userStatsList.sort((a, b) => {
      return b["best_rep1"] - a["best_rep1"];
    });
    const rep1l = userStatsList.slice(0, 5);
    userStatsList.sort((a, b) => {
      return b["best_rep2"] - a["best_rep2"];
    });
    const rep2l = userStatsList.slice(0, 5);
    userStatsList.sort((a, b) => {
      return b["best_rep3"] - a["best_rep3"];
    });
    const rep3l = userStatsList.slice(0, 5);
    userStatsList.sort((a, b) => {
      return b["best_rep4"] - a["best_rep4"];
    });
    const rep4l = userStatsList.slice(0, 5);

    res.send({
      overallrep: overallrepl,
      overallskill: overallskilll,
      gamesplayed: gamesplayedl,
      rep1: rep1l,
      rep2: rep2l,
      rep3: rep3l,
      rep4: rep4l,
    });
  });
});

router.get("/save", auth.ensureLoggedIn, (req, res) => {
  GameData.find({ user_id: req.user._id }).then((gameData) => res.send(gameData));
});

router.post("/save", auth.ensureLoggedIn, async (req, res) => {
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

  await GameData.deleteMany({ user_id: req.user._id });
  res.send(await NewGameData.save());
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
