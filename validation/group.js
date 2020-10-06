const validator = require('validator');
const isEmpty = require('./isEmpty');

// isEmpty validation loop
const validateGroupInput = (group) => {
  let errors = new Error();
  let groupkeys = Object.keys(group);
  for (i = 0; i < groupkeys.length; i++) {
    group[groupkeys[i]] = !isEmpty(group[groupkeys[i]]) ? group[groupkeys[i]] : '';
  }

  // validate each input whether they meet requirements

  if (validator.isEmpty(group.name)) {
    errors.name = 'Group Name is empty';
  }

  if (validator.isEmpty(group.leader_id)) {
    errors.leader_id = 'Leader Id is empty';
  }

  return {
    errors,
    isValid: !(errors.length > 0),
  };
};

module.exports = validateGroupInput;
