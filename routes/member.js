const express = require("express");
const router = express.Router();
const memberCtrl = require("../controllers/member");

router.get("/list", memberCtrl.getAllMembers);
router.post("/add", memberCtrl.addMember);

module.exports = router;
