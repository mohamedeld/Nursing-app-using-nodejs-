const {query,param,body} = require("express-validator");

module.exports.userValidation = [
    body("name").isAlpha().withMessage("please enter your name"),
    body("email").isEmail().withMessage("please enter your email"),
    body("isAdmin").isBoolean().withMessage("should me true or false"),
    body("password").isStrongPassword().withMessage("please enter your password")
]