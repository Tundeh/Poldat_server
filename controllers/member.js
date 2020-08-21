const Member = require("../models/Member");
const { json } = require("body-parser");

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
  req.body.member = JSON.parse(req.body.member);

  const member = new Member({
    first_name: req.body.member.first_name,
    last_name: req.body.member.last_name,
    other_name: req.body.member.other_name,
    gender: req.body.member.gender,
    religion: req.body.member.religion,
    date_birth: req.body.member.date_birth,
    age: req.body.member.age,
    marital_status: req.body.member.marital_status,
    email_address: req.body.member.email_address,
    mobile_number: req.body.member.mobile_number,
    address: req.body.member.address,
    ward: req.body.member.ward,
    city: req.body.member.city,
    lga: req.body.member.lga,
    state: req.body.member.state,
    group: req.body.member.group,
  });

  member
    .save(() => {
      res.status(200).json({ message: "request sucessfull" });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
      console.log(error);
    });
};

module.exports.updateMember = (req, res, next) => {
  req.body.member = JSON.parse(req.body.member);
  const member = new thing({
    first_name: req.body.member.first_name,
    last_name: req.body.member.last_name,
    other_name: req.body.member.other_name,
    gender: req.body.member.gender,
    religion: req.body.member.religion,
    date_birth: req.body.member.date_birth,
    age: req.body.member.age,
    marital_status: req.body.member.marital_status,
    email_address: req.body.member.email_address,
    mobile_number: req.body.member.mobile_number,
    address: req.body.member.address,
    ward: req.body.member.ward,
    city: req.body.member.city,
    lga: req.body.member.lga,
    state: req.body.member.state,
    group: req.body.member.group,
  });

  Member.findOne({ mobile_number: req.body.member.mobile_number })
    .then((member) => {
      Member.updateOne({ _id: member.id }, member)
        .then(() => {
          res.status(200).json({ message: "update successful" });
        })
        .catch((error) => {
          res.status(400).json({ error: "update request was unsuccessful" });
          console.log(error);
        });
    })
    .catch((error) => {
      res.status(400).json({ error: "update request was unsuccessful" });
      console.log(error);
    });
};

module.exports.getMember = (req, res, next) => {
  req.body.member = JSON.parse(req.body.member);
  Member.findOne({ id: req.params.id })
    .then((member) => {
      res.status(200).json(member);
    })
    .catch((error) => {
      res.status(400).json({ error: "request not sucessfull" });
      console.log(error);
    });
};

module.exports.deleteMember = (req, res, next) => {
  Member.deleteOne({ id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "successfully deleted" });
    })
    .catch((error) => {
      res.status(400).json({ error: "request not successfull" });
      console.log(error);
    });
};
