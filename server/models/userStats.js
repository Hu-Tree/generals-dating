const mongoose = require("mongoose");

const UserStatsSchema = new mongoose.Schema({
  name: String,
  user_id: String,
  games_played: Number,
  games_won: Number,
  games_lost: Number,
  best_final_cooking: Number,
  best_final_X: Number,
  best_final_jp: Number,
  min_events: Number,
  achievementBoolString: String,
});

// compile model from schema
module.exports = mongoose.model("userStats", UserStatsSchema);
