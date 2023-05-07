const {query,param,body} = require("express-validator");

module.exports.addValidatorTeacher = [
    body("id").optional().isMongoId().withMessage("incorrect id should be mongodb object _id"),
    body("fullName").isAlpha().withMessage("full name should be string").isLength({min:6}).withMessage("please, your enter your full name"),
    body("password").isStrongPassword().withMessage("please enter a strong password"),
    body("email").isEmail().withMessage("please enter your correct name"),
    body("image")
    .custom((value, { req }) => {
      if (!req.file) {
        throw new Error("please upload an image");
      }
      return true;
    })
    .withMessage("please upload your image"),
];

module.exports.getValidatorTeacher = [
    param("id").isMongoId().withMessage("incorrect id should be mongodb object _id"),
];


module.exports.updateValidatorTeacher = [
    body("id").optional().isMongoId().withMessage("incorrect id should be mongodb object _id"),
    body("fullName").optional().isAlpha().withMessage("please enter your full name"),
    body("email").optional().isEmail().withMessage("please enter correct email"),
    body("password").optional().isStrongPassword().withMessage("please enter strong password"),
    body("image").optional()
    .custom((value, { req }) => {
      if (!req.file) {
        throw new Error("please upload an image");
      }
      return true;
    })
    .withMessage("please upload your image"),
];

module.exports.deleteValidatorTeacher = [
    param("id").isMongoId().withMessage("your id is not correct")
];