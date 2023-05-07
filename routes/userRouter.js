const express =require("express");
const router = express.Router();
const {userValidation} = require("./../middlewares/validations/userValidation");
const userController = require("./../controller/userController");

router.route("/").post(userValidation,userController.userCheckInfo);

module.exports = router;