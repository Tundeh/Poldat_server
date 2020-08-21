const express = require("express");
const router = express.Router();
const memberCtrl = require("../controllers/member");

router.get("/list", memberCtrl.getAllMembers);
router.post("/add", memberCtrl.addMember);
router.get("/:id", memberCtrl.getMember);
router.put("/:id", memberCtrl.updateMember);
router.delete("/:id", memberCtrl.deleteMember);

module.exports = router;
