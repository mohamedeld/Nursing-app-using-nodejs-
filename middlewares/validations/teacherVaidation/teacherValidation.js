const {query,param,body} = require("express-validator");

module.exports.addValidatorTeacher = [
    body("_id").isMongoId().withMessage("incorrect id should be mongodb object _id"),
    body("fullname").isAlpha().withMessage("full name should be string").isLength({min:6}).withMessage("please, your enter your full name"),
    body("password").isStrongPassword().withMessage("please enter a strong password"),
    body("email").isEmail().withMessage("please enter your correct name"),
    body("image").isAlpha().withMessage("enter upload your message")
];


module.exports.deleteValidatorTeacher = [
    param("id").isMongoId().withMessage("your id is not correct")
];


module.exports.getValidatorTeacher = [
    param("_id").isMongoId().withMessage("incorrect id should be mongodb object _id"),
];
module.exports.updateValidatorTeacher = [
    body("_id").optional().isMongoId().withMessage("incorrect id should be mongodb object _id"),
    body("fullname").optional().isAlpha().withMessage("please enter your full name"),
    body("email").optional().isEmail().withMessage("please enter correct email"),
    body("password").optional().isStrongPassword().withMessage("please enter strong password"),
    body("image").optional().isAlpha("please enter your image")
];