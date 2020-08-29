const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateLoginInput = (data) => {
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  errors = {};

  if (!validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Invalid Password";
  }
  return {
    errors,
    isValid: !(errors.length > 0),
  };
};

module.exports = validateLoginInput;
