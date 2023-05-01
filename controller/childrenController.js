exports.getAllChildren = (request,response,next)=>{
    response.json({
        message:"all children"
    })
}

exports.getChild = (request,response,next)=>{
    response.json({
        message:"child"
    })
};

exports.addChild = (request,response,next)=>{
    response.json({
        message:"add child"
    })
};

exports.updateChild = (request,response,next)=>{
    response.json({
        message:"update child"
    })
};

exports.deleteChild = (request,response,next)=>{
    response.json({
        message:"delete child"
    })
};
exports.getClass = (request,response,next)=>{
    response.json({
        message:"children class"
    })
}