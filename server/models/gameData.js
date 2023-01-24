const mongoose = require("mongoose");

const GameDataSchema = new mongoose.Schema({
  name: String,
  user_id: String,
  technical: Number,
  presentation: Number,
  cooking: Number,
  networking: Number,
  stat5: Number,
  energy: Number,
  health: Number,
  currentTime: Number,
  reputation1: Number,
  reputation2: Number,
  reputation3: Number,
  reputation4: Number,
});

// compile model from schema
module.exports = mongoose.model("gameData", GameDataSchema);
