const express = require("express");
const classController = require("./../controller/classController");
const router = express.Router();
const {addClassValidator,getClassValidator,updateClassValidator,deleteClassValidator} = require("./../middlewares/validations/classValidation/classValidation.js");
const checkValidation = require("./../middlewares/validations/check-valditor");



router.route("/").get(classController.getClasses).post(addClassValidator,checkValidation,classController.addClass);
router.route("/:id").get(getClassValidator,checkValidation,classController.getClass).patch(updateClassValidator,checkValidation,classController.updateClass).delete(deleteClassValidator,checkValidation,classController.deleteClass);

router.route("/:id/class",classController.getClassesChildren);
router.route("/:id/teacher").get(classController.getTeacherSupervisor);

module.exports = router;