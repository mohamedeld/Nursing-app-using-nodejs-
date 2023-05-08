const express = require("express");
const childController = require("./../controller/childrenController");
const checkValidation = require("./../middlewares/validations/check-valditor");
const {addChildValidator,getChildValidator,updateChildValidator,deleteChildValidator} = require("../middlewares/validations/childValidation");
const auth =require("./../middlewares/authPermission");

const router = express.Router();

router.route("/").get(auth,childController.getAllChildren).post(auth,addChildValidator,checkValidation,auth,childController.addChild);
router.route("/:id").get(auth,getChildValidator,checkValidation,childController.getChild).patch(auth,updateChildValidator,checkValidation,auth,childController.updateChild).delete(auth,deleteChildValidator,checkValidation,auth,childController.deleteChild);

// router.route("/:id/class").get(childController.getClass);

module.exports = router;