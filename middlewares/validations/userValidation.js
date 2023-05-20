const { query, param, body } = require("express-validator");

module.exports.userValidation = [
  body("name").isAlpha().withMessage("please enter your name"),
  body("email").isEmail().withMessage("please enter your email"),
  body("isAdmin").isBoolean().withMessage("should me true or false"),
  body("password").isStrongPassword().withMessage("please enter your password"),
];

module.exports.getUserValidation = [
  param("id").isMongoId().withMessage("id should be number"),
];

module.exports.updateUserValidation = [
  body("name").optional().isAlpha().withMessage("please enter your name"),
  body("email").optional().isEmail().withMessage("please enter your email"),
  body("isAdmin").optional().isBoolean().withMessage("should me true or false"),
  body("password")
    .optional()
    .isStrongPassword()
    .withMessage("please enter your password"),
];

module.exports.deleteUserValidation = [
  param("id").isMongoId().withMessage("id should be number"),
];
