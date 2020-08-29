const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateUserInput = (user) => {
  let errors = {};

  // isEmpty validation loop
  let userkeys = Object.keys(user);
  for (i = 0; i < userkeys.length; i++) {
    user[userkeys[i]] = !isEmpty(user[userkeys[i]]) ? user[userkeys[i]] : "";
  }

  if (!validator.isEmail(user.email)) {
    errors.email = "email is invalid";
  }
  if (validator.isEmpty(user.password) || user.password.length < 5) {
    errors.password = "password is invalid";
  }
  if (
    validator.isEmpty(user.user_type) ||
    !(user.user_type == "admin" || user.user_type == "employee")
  ) {
    errors.user_type = "user type is invalid";
  }
  if (validator.isEmpty(user.first_name)) {
    errors.first_name = "first name is invalid";
  }
  if (validator.isEmpty(user.last_name)) {
    errors.last_name = "last name is invalid";
  }

  return {
    errors,
    isInValid: errors.length > 0,
  };
};

module.exports = validateUserInput;
