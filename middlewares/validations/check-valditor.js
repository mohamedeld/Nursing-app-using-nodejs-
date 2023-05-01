const {validationResult} = require("express-validator");

module.exports = (request,response,next)=>{
    let result = validationResult(request);
    if(result.errors.length != 0){
        let errorString = result.errors.reduce((current,object)=> current+object.msg,",");
        let error = new Error(errorString);
        error.status = 442;
        throw error;
    }else{
        next();
    }
}