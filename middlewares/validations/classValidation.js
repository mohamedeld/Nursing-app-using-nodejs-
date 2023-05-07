const {query,param,body} = require("express-validator");

module.exports.addClassValidator = [
    body("name").isAlpha().withMessage("name must be string"),
    body("supervisor").isInt().withMessage("supervisor id must be integer"),
    body("children").isArray().withMessage("children must be an array")
];
module.exports.getClassValidator = [
    param("id").isInt().withMessage("id must be integer get")
];
module.exports.updateClassValidator = [
    body("name").optional().isAlpha().withMessage("name must be string"),
    body("supervisor").optional().isInt().withMessage("supervisor id must be integer"),
    body("children").optional().isArray().withMessage("children must be an array")
];
module.exports.deleteClassValidator = [
    param("id").isInt().withMessage("id must be integer delete")
];