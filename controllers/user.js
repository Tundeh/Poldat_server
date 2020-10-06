const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateLoginInput = require("../Validation/login");
const User = require("../models/user");
const validateUserInput = require("../Validation/user");
const keys = require("../config/keys");

//add user function
module.exports.addUser = (req, res, next) => {
  let { errors, isInValid } = validateUserInput(req.body);

  if (isInValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then((result) => {
      if (result) {
        errors.email = "Email already exist";
        return res.status(400).json(errors);
      } else {
        bcrypt.genSalt(10, (errs, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) {
              throw err;
            }
            let user = new User({
              email: req.body.email,
              password_hash: hash,
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
                res.status(500).json({ error: "server error" });
              });
          });
        });
      }
    })
    .catch((errors) => {
      res.status(500).json({ error: "server error" });
      console.log(errors);
    });
};

//log in user
module.exports.loginUser = (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt.compare(req.body.password, user.password_hash).then((isMatch) => {
        const pay_ld = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          user_type: user.user_type,
        };
        if (isMatch) {
          jwt.sign(
            pay_ld,
            keys.secretOrKey,
            { expiresIn: 604800 },
            (err, token) => {
              if (err) {
                throw err;
              }
              res.status(200).json({
                success: true,
                token,
                user: {
                  id: user.id,
                  first_name: user.first_name,
                  last_name: user.last_name,
                  email: user.email,
                },
              });
            }
          );
        } else {
          errors.password = "password incorrect";
          res.status(400).json(errors);
        }
      });
    })
    .catch((err) => {
      errors.server = "internal server error";
      console.log(err);
      res.status(500).json(errors);
    });
};
// get all users function
module.exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((errors) => {
      res.status(500).json({ error: "server error" });
    });
};

//update user function
module.exports.updateUser = (req, res, next) => {
  let { errors, isValid } = validateUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    user = {
      email: req.body.email,
      password: password_hash,
      user_type: req.body.user_type,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };

    User.updateOne({ _id: req.params.user_id }, user)
      .then(() => {
        res.status(200).json({ message: "user update was successful" });
      })
      .catch((errors) => {
        res.status(500).json({ message: "server error" });
      });
  }
};

// delete user function
module.exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.user_id })
    .then(() => {
      res.status(200).json({ message: "user successfully deleted" });
    })
    .catch((errors) => {
      res.status(500).json({ error: "server error" });
    });
};
