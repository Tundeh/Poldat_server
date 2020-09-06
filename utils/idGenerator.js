const Member = require("../models/member");
const idGenerator = (props) => {
  const { state, lga } = props;
  let id;
  let serial = Date.now().toString().substring(4);
  id = state + "/" + lga + "/" + serial;
  Member.find({ member_id: id }).then((user) => {
    if (user) {
      id = id + Math.random() * 10;
      return id;
    } else {
      return id;
    }
  });
  return id;
};

module.exports = idGenerator;
