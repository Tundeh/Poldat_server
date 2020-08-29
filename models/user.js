const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password_hash: { type: String, required: true },
  user_type: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  avatar_url: { type: String },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
