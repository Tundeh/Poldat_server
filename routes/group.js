const express = require('express');
const router = express.Router();
const groupCtrl = require('../controllers/group');

router.get('/', groupCtrl.getGroups);
router.post('/', groupCtrl.createGroup);
router.put('/', groupCtrl.updateGroup);
router.delete('/', groupCtrl.deleteGroup);

module.exports = router;
