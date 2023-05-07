const express = require("express");
const router = express.Router();
const {authValidation} = require("./../middlewares/validations/authValidation");
const authController = require("./../controller/authController");


router.route("/").post(authValidation,authController.checkAuthUser);
module.exports = router;