const express = require("express");

const router = express.Router();
const auth =require("./../middlewares/authPermission");
const adminController = require("./../controller/adminController");

router.route("/:id").put(auth,adminController.adminUpdated);
module.exports = router;