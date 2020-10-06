const Group = require('../models/group');
const groupValidator = require('../Validation/group');

module.exports.getGroups = (req, res, next) => {
  Group.find()
    .then((groups) => res.status(200).json(groups))
    .catch((err) => res.status(400).json({ error: 'request unsuccessful' }));
};

module.exports.createGroup = (req, res, next) => {
  try {
    const { errors, isValid } = groupValidator(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
  } catch {
    const error = { message: 'invalid request body' };
    return res.status(400).json({ error: error });
  }

  const group = new Group({
    name: req.body.name,
    leader: req.body.leader_id,
  });

  group
    .save()
    .then((err, doc) => {
      res.status(200).json({ message: 'group successfully saved' });
    })
    .catch((err) => {
      res.status(500).json({ error: 'request was unsuccessful' });
    });
};

module.exports.updateGroup = (req, res, next) => {
  const group = new Group({
    name: req.body.name,
    leader: req.body.leader,
  });

  Group.updateOne({ id: req.params.id }, group)
    .then(res.status(200).json({ message: 'Group was successfully updated' }))
    .catch((error) => {
      res.status(500).json({ error: 'request was not successful' });
    });
};

module.exports.deleteGroup = (req, res, next) => {
  group
    .deleteOne({ _id: req.params.id })
    .then(res.status(200).json({ message: 'group successfully deleted' }))
    .catch((error) => {
      res.status(500).json({ error: 'request was not successful' });
    });
};
