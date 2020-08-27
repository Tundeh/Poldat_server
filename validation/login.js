const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateLoginData = (data) => {
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  errors = {};
  if (!validator.isEmail(data.Email)) {
    errors.email = "Invalid Email";
  }
  if (validator.isEmpty(!data.password)) {
    errors.email = "Invalid Password";
  }
  return {
    errors,
    isValid: !(erros.length > 0),
  };
};
