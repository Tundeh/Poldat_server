const router = require("express").Router();
const passport = require("passport");
const userCtrl = require("../controllers/user");

// @route   Post user/login
// @desc    Post user
// @access  Public
router.post("/login", userCtrl.loginUser);

// @route   GET user/list
// @desc    Get users
// @access  Private
router.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  userCtrl.getUsers
);

// @route   POST User
// @desc    Post Users
// @access  Private
router.post("/add", userCtrl.addUser);

// @route   DELETE api/user
// @desc    Delete users
// @access  Private
router.delete("/:user_id", userCtrl.deleteUser);

// @route   PUT api/user
// @desc    Put user
// @access  private
router.put("/:user_id", userCtrl.updateUser);

module.exports = router;
