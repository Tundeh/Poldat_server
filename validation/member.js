const validator = require("validator");
const isEmpty = require("./isEmpty");

const validateMemberInput = (member) => {
  let errors = {};
  let memberkeys = Object.keys(member);
  for (i = 0; i < memberkeys.length; i++) {
    member.memberkeys = !isEmpty(member[memberkeys[i]])
      ? member[memberkeys[i]]
      : "";
  }
  /*
  member.first_name = !isEmpty(member.first_name) ? member.first_name : "";
  member.last_name = !isEmpty(member.last_name) ? member.last_name : "";
  member.other_name = !isEmpty(member.other_name) ? member.other_name : "";
  member.gender = !isEmpty(member.gender) ? member.gender : "";
*/

  if (!validator.isEmpty(member.first_name)) {
    errors.first_name = "first name is empty";
  }

  if (!validator.isEmpty(member.last_name)) {
    errors.last_name = "last name is empty";
  }

  if (!validator.isEmpty(member.gender)) {
    errors.gender = "gender is invalid";
  }

  if (!validator.isEmpty(member.religion)) {
    errors.religion = "religion is invalid";
  }

  if (!validator.isDate(member.date_birth, "DD/MM/YYYY")) {
    errors.date_birth = "invalid date of birth";
  }

  if (!validator.isInt(member.age, { min: 16, max: 120 })) {
    errors.age = "age is invalid";
  }
  if (!validator.isMobilePhone(member.mobile_number)) {
    errors.mobile_number = "mobile phone number is invalid";
  }

  if (!validator.isEmail(member.email)) {
    errors.email = "email is invalid";
  }
  if (
    !member.marital_status == "married" ||
    !member.marital_status == "single"
  ) {
    errors.marital_status = "marital_status is invalid";
  }
  if (!validator.isEmpty(member.address)) {
    errors.address = "address is invalid";
  }
  if (!validator.isEmpty(member.ward)) {
    errors.ward = "ward is invalid";
  }
  if (!validator.isEmpty(member.city)) {
    errors.city = "city is invalid";
  }
  if (!validator.isEmpty(member.lga)) {
    errors.lga = "lga is invalid";
  }
  if (!validator.isEmpty(member.state)) {
    errors.state = "state is invalid";
  }
  if (!validator.isEmpty(group)) {
    errors.group = "group is invalid";
  }
};
