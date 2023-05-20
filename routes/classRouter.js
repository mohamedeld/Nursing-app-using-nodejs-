const express = require("express");
const classController = require("./../controller/classController");
const router = express.Router();
const {
  addClassValidator,
  getClassValidator,
  updateClassValidator,
  deleteClassValidator,
} = require("../middlewares/validations/classValidation");
const checkValidation = require("./../middlewares/validations/check-valditor");
const auth = require("./../middlewares/authPermission");

router
  .route("/")
  .get(auth, classController.getClasses)
  .post(auth, addClassValidator, checkValidation, classController.addClass);
router
  .route("/:id")
  .get(auth, getClassValidator, checkValidation, classController.getClass)
  .patch(
    auth,
    updateClassValidator,
    checkValidation,
    classController.updateClass
  )
  .delete(
    auth,
    deleteClassValidator,
    checkValidation,
    classController.deleteClass
  );

router.route("/:id/child", classController.getClassesChildren);
router.route("/:id/teacher").get(classController.getTeacherSupervisor);

module.exports = router;
