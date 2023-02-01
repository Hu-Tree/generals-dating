const mongoose = require("mongoose");

const UserStatsSchema = new mongoose.Schema({
  user_id: String,
  games_played: Number,
  best_technical: Number,
  best_networking: Number,
  best_presentation: Number,
  best_cooking: Number,
  best_rep1: Number,
  best_rep2: Number,
  best_rep3: Number,
  best_rep4: Number,
  // achievementBoolString: String,
});

// compile model from schema
module.exports = mongoose.model("userStats", UserStatsSchema);
