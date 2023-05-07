const {query,param,body} = require("express-validator");

module.exports.authValidation = [
    body("email").isEmail().withMessage("please enter valid email"),
    body("password").isStrongPassword().withMessage("please enter your message")
];

