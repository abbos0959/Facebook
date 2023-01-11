const express = require("express");
const UserController = require("../controller/UserController");
const router = express.Router();

router.route("/register").post(UserController.register);

module.exports = router;
