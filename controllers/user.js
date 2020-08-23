const User = require("../models/user");
const validateUser = require("../Validation/user");
const User = require("../models/user");

module.exports.addUser = (req, res, next) => {
  let { errors, isValid } = validateUser(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  user = new User({
    email: req.body.email,
    password_hash: password_hash,
    user_type: req.body.user_type,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });

  user
    .save()
    .then(() => {
      res.status(200).json({ message: "user successfully saved" });
    })
    .catch((errors) => {
      console.log(errors);
      res.status(400).json({ error: "invalid request" });
    });
};

module.exports = user;
