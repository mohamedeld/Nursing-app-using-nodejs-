const express = require("express");
const router = express.Router();
const teacherController = require("./../controller/teacherController");
const checkValidation = require("./../middlewares/validations/check-valditor");
const {addValidatorTeacher,getValidatorTeacher,updateValidatorTeacher,deleteValidatorTeacher} = require("./../middlewares/validations/teacherVaidation/teacherValidation");





router.route("/").get(teacherController.getAllTeachers).post(addValidatorTeacher,checkValidation,teacherController.addTeacher);

router.route("/:id").get(getValidatorTeacher,checkValidation,teacherController.getTeacher).patch(updateValidatorTeacher,checkValidation,teacherController.updateTeacher).delete(deleteValidatorTeacher,checkValidation,teacherController.deleteTeacher);

router.route("/supervisor").get(teacherController.getSupervisor);

module.exports = router;