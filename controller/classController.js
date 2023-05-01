exports.getClasses = (request,response,next)=>{
    response.json({
        message:"all classes"
    })
};

exports.getClass = (request,response,next)=>{
    response.json({
        message:"class"
    })
};
exports.addClass = (request,response,next)=>{
    response.json({
        message:"add class"
    })
};

exports.updateClass = (request,response,next)=>{
    response.json({
        message:"update class"
    })
};
exports.deleteClass = (request,response,next)=>{
    response.json({
        message:"delete class"
    })
};

exports.getClassesChildren = (request,response,next)=>{
    response.json({
        message:"class children"
    })
}
exports.getTeacherSupervisor = (request,response,next)=>{
    response.json({
        message:"teacher supervisor"
    })
}