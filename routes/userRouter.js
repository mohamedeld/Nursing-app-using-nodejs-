const express = require("express");
const router = express.Router();
const {
  userValidation,
  getUserValidation,
  updateUserValidation,
  deleteUserValidation,
} = require("./../middlewares/validations/userValidation");
const userController = require("./../controller/userController");
const checkValidator = require("../middlewares/validations/check-valditor");

router
  .route("/")
  .get(userController.getUsers)
  .post(userValidation, checkValidator, userController.userCheckInfo);

router
  .route("/:id")
  .get(getUserValidation, checkValidator, userController.getUser)
  .patch(updateUserValidation, checkValidator, userController.updateUsers)
  .delete(deleteUserValidation, checkValidator, userController.deleteUser);

module.exports = router;
