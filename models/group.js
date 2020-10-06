const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//Create Schema
const groupSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  leader_id: { type: String },
});

groupSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Group', groupSchema);
