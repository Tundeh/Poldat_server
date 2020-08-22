const Member = require("../models/Member");
const validateMemberInput = require("../Validation/member");

module.exports.getAllMembers = (req, res, next) => {
  Member.find()
    .then((members) => {
      res.status(200).json(members);
    })
    .catch((error) => {
      res.status(500).json("invalid request");
      console.log(error);
    });
};

module.exports.addMember = (req, res, next) => {
  const { errors, isValid } = validateMemberInput(req.body);

  if (!isValid) {
    res.status(400).json({ errors });
  } else {
    const member = new Member({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      other_name: req.body.other_name,
      gender: req.body.gender,
      religion: req.body.religion,
      date_birth: req.body.date_birth,
      age: req.body.age,
      marital_status: req.body.marital_status,
      email_address: req.body.email_address,
      mobile_number: req.body.mobile_number,
      address: req.body.address,
      ward: req.body.ward,
      city: req.body.city,
      lga: req.body.lga,
      state: req.body.state,
      group: req.body.group,
    });

    member
      .save()
      .then(() => {
        res.status(200).json({ message: "request sucessfull" });
      })
      .catch((error) => {
        res.status(400).json(error);
        console.log(error);
      });
  }
};

module.exports.updateMember = (req, res, next) => {
  const member = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    other_name: req.body.other_name,
    gender: req.body.gender,
    religion: req.body.religion,
    date_birth: req.body.date_birth,
    age: req.body.age,
    marital_status: req.body.marital_status,
    email_address: req.body.email_address,
    mobile_number: req.body.mobile_number,
    address: req.body.address,
    ward: req.body.ward,
    city: req.body.city,
    lga: req.body.lga,
    state: req.body.state,
    group: req.body.group,
  };

  Member.updateOne({ _id: req.params.id }, member)
    .then(() => {
      res.status(200).json({ message: "update successful" });
    })
    .catch((error) => {
      res.status(400).json({ error: "update request was unsuccessful" });
      console.log(error);
    });
};

module.exports.getMember = (req, res, next) => {
  Member.findOne({ _id: req.params.id })
    .then((member) => {
      res.status(200).json(member);
    })
    .catch((error) => {
      res.status(400).json({ error: "request not sucessfull" });
      console.log(error);
    });
};

module.exports.deleteMember = (req, res, next) => {
  Member.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "successfully deleted" });
    })
    .catch((error) => {
      res.status(400).json({ error: "request not successfull" });
      console.log(error);
    });
};
