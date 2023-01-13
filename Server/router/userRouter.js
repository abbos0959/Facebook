const express = require("express");
const UserController = require("../controller/UserController");
const router = express.Router();

router.route("/register").post(UserController.register);
router.route("/activate").post(UserController.activateAcount);
router.route("/login").post(UserController.login);

module.exports = router;
