
exports.getAllTeachers = (request,response,next)=>{
    response.json({
        message:"all Teachers"
    })
};

exports.addTeacher = (request,response,next)=>{
    response.json({
        message:"added"
    })
};

exports.getTeacher = (request,response,next)=>{
    response.json({
        message:"teacher"
    })
};

exports.updateTeacher = (request,response,next)=>{
    response.json({
        message:"updated"
    })
};
exports.deleteTeacher = (request,response,next)=>{
    response.json({
        message:"deleted"
    })
}

exports.getSupervisor = (request,response,next)=>{
    response.json({
        message:"supervisor"
    })
}