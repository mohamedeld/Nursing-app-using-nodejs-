const express = require("express");
const router = express.Router();
const upload = require("./../middlewares/multerMW");
const teacherController = require("./../controller/teacherController");
const checkValidation = require("./../middlewares/validations/check-valditor");
const {addValidatorTeacher,getValidatorTeacher,updateValidatorTeacher,deleteValidatorTeacher} = require("../middlewares/validations/teacherValidation");
const auth =require("./../middlewares/authPermission");




router.route("/").get(teacherController.getAllTeachers).post(upload.single("image"),addValidatorTeacher,checkValidation,auth,teacherController.addTeacher);
router.route("/supervisor").get(teacherController.getSupervisor);

router.route("/:id").get(getValidatorTeacher,checkValidation,teacherController.getTeacher).patch(updateValidatorTeacher,checkValidation,auth,teacherController.updateTeacher).delete(deleteValidatorTeacher,checkValidation,auth,teacherController.deleteTeacher);


module.exports = router;