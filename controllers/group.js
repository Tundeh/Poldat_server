import Group from '../models/group';

module.exports.getGroup = (req, res, next) => {
  Group.find()
    .then((groups) => res.status(200).json(groups))
    .catch(res.status(400).json({ error: 'request unsuccessful' }));
};

module.exports.createGroup = (req, res, next) => {
  const group = new Group({
    group_id: req.body.id,
    name: req.body.name,
    leader: req.body.leader,
  });

  group
    .save()
    .then(res.status(200).json({ message: 'group successfully saved' }))
    .catch((error) => {
      res.status(500).json({ error: 'request was unsuccessful' });
    });
};

module.exports.updateGroup = (req, res, next) => {
  const group = new Group({
    group_id: req.body.id,
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
