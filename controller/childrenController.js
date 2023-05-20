const Childrens = require("./../model/childModel");

exports.addChild = async (request, response, next) => {
  try {
    let child = await Childrens.create(request.body);
    response.status(200).json({
      status: "success",
      data: {
        child,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllChildren = async (request, response, next) => {
  try {
    let childs = await Childrens.find({});
    response.status(200).json({
      message: "ok",
      data: {
        childs,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getChild = async (request, response, next) => {
  // childrens.findOne({_id:request.params._id}).then((object)=>{
  //     if(object == null){
  //         throw new Error("children not found")
  //     }
  //     response.status(200).json(object)
  // }).catch((err)=> next(err));
  try {
    const child = await Childrens.findById(request.params.id);
    if (child == null) {
      throw new Error("Child not found");
    }
    response.status(200).json({
      status: "success",
      data: {
        child,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateChild = async (request, response, next) => {
  try {
    let childUpdated = await Childrens.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    if (!childUpdated) {
      throw new Error("child was not found");
    }
    response.status(200).json({
      data: {
        childUpdated,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteChild = async (request, response, next) => {
  try {
    let childDeleted = await Childrens.findByIdAndDelete({
      _id: request.params.id,
    });
    if (childDeleted.deletedCount == 0) {
      throw new Error("child was not found");
    }
    response.status(200).json({
      message: "deleted",
    });
  } catch (err) {
    next(err);
  }
};
// exports.getClass = (request,response,next)=>{
//     try{
//         response.status(200).json({
//             message:"deleted"
//         })
//     }catch(err){
//         next(err);
//     }
// }
