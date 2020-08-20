const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  leader: { type: String, required: true, unique: true },
  num_of_members: { type: Number, required: true, unique: true },
});

groupSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Group", groupModel);
