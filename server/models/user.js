const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
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
module.exports = mongoose.model("user", UserSchema);
