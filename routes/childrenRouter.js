const express = require("express");
const childController = require("./../controller/childrenController");
const checkValidation = require("./../middlewares/validations/check-valditor");
const {addChildValditor,getChildValidator,updateValdiatorChild,deleteValidatorChild} = require("./../middlewares/validations/childValdiator/childValidation");

const router = express.Router();

router.route("/").get(childController.getAllChildren).post(addChildValditor,checkValidation,childController.addChild);
router.route("/:id").get(getChildValidator,checkValidation,childController.getChild).patch(updateValdiatorChild,checkValidation,childController.updateChild).delete(deleteValidatorChild,checkValidation,childController.deleteChild);

router.route("/:id/class").get(childController.getClass);

module.exports = router;