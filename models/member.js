const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Create Schema
const memberSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  other_name: { type: String },
  member_id: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  religion: { type: String, required: true },
  date_birth: { type: Date, required: true },
  age: { type: Number, required: true },
  marital_status: { type: String, required: true },
  email_address: { type: String },
  mobile_number: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  ward: { type: String, required: true },
  city: { type: String, required: true },
  lga: { type: String, required: true },
  state: { type: String, required: true },
  group: { type: String },
  image_url: { type: String },
});

memberSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Member', memberSchema);
