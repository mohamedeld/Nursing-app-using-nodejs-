const express = require("express");
const childController = require("./../controller/childrenController");
const checkValidation = require("./../middlewares/validations/check-valditor");
const {addChildValidator,getChildValidator,updateChildValidator,deleteChildValidator} = require("../middlewares/validations/childValidation");
const auth =require("./../middlewares/authPermission");

const router = express.Router();

router.route("/").get(childController.getAllChildren).post(addChildValidator,checkValidation,auth,childController.addChild);
router.route("/:id").get(getChildValidator,checkValidation,childController.getChild).patch(updateChildValidator,checkValidation,auth,childController.updateChild).delete(deleteChildValidator,checkValidation,auth,childController.deleteChild);

// router.route("/:id/class").get(childController.getClass);

module.exports = router;