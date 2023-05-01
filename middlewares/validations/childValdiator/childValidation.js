const {query,param,body} = require("express-validator");

module.exports.addChildValditor = [
    body("id").isInt().withMessage("id must be a integer"),
    body("fullname").isAlpha().withMessage("fullname should string").isLength({min:6}).withMessage("full name lenth should be greater than 6 characters"),
    body("age").isInt().withMessage("age should be integer"),
    body("level").isIn(["PreKG","KG1","KG2"]).withMessage("level should be PreKG or KG1 or KG2"),
    body("address.city").isAlpha().withMessage("city should be string"),
    body("address.street").isInt().withMessage("street should have a number"),
    body("address.building").isInt().withMessage("building should have a number")
];
module.exports.deleteValidatorChild = [
    param("id").isInt().withMessage("id must be a integer")
];

module.exports.getChildValidator = [
    param("id").isInt().withMessage("please enter your id")
];
module.exports.updateValdiatorChild = [
    body("id").optional().isInt().withMessage("id must be a integer"),
    body("fullname").optional().isAlpha().withMessage("fullname should string").isLength({min:6}).withMessage("full name lenth should be greater than 6 characters"),
    body("age").optional().isInt().withMessage("age should be integer"),
    body("level").optional().isIn(["PreKG","KG1","KG2"]).withMessage("level should be PreKG or KG1 or KG2"),
    body("address.city").optional().isAlpha().withMessage("city should be string"),
    body("address.street").optional().isInt().withMessage("street should have a number"),
    body("address.building").optional().isInt().withMessage("building should have a number")
];
