const validator = require("validator");
const isEmpty = require("./isEmpty");

// isEmpty validation loop
const validateMemberInput = (member) => {
  let errors = {};
  let memberkeys = Object.keys(member);
  for (i = 0; i < memberkeys.length; i++) {
    member[memberkeys[i]] = !isEmpty(member[memberkeys[i]])
      ? member[memberkeys[i]]
      : "";
  }

  // validate each input whether they meet requirements
  if (validator.isEmpty(member.first_name)) {
    errors.first_name = "first name is empty";
  }

  if (validator.isEmpty(member.last_name)) {
    errors.last_name = "last name is empty";
  }

  if (validator.isEmpty(member.gender)) {
    errors.gender = "gender is invalid";
  }

  if (validator.isEmpty(member.religion)) {
    errors.religion = "religion is invalid";
  }

  if (!validator.isDate(member.date_birth, "DD/MM/YYYY")) {
    errors.date_birth = "invalid date of birth";
  }

  if (!validator.isInt(member.age.toString(10), { min: 16, max: 120 })) {
    errors.age = "age is invalid";
  }

  if (!validator.isMobilePhone(member.mobile_number)) {
    errors.mobile_number = "mobile phone number is invalid";
  }

  if (!validator.isEmail(member.email_address)) {
    errors.email = "email is invalid";
  }
  if (
    !member.marital_status == "married" ||
    !member.marital_status == "single"
  ) {
    errors.marital_status = "marital_status is invalid";
  }
  if (validator.isEmpty(member.address)) {
    errors.address = "address is invalid";
  }
  if (validator.isEmpty(member.ward)) {
    errors.ward = "ward is invalid";
  }
  if (validator.isEmpty(member.city)) {
    errors.city = "city is invalid";
  }
  if (validator.isEmpty(member.lga)) {
    errors.lga = "lga is invalid";
  }
  if (validator.isEmpty(member.state)) {
    errors.state = "state is invalid";
  }
  if (validator.isEmpty(member.group)) {
    console.log(validator.isEmpty(member.group));
    errors.group = "group is invalid";
  }

  return {
    errors,
    isValid: !(errors.length > 0),
  };
};

module.exports = validateMemberInput;
