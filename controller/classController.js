const Classes = require("./../model/classModel");
// const Childrens = require("./../model/childModel");
exports.addClass = async (request, response, next) => {
  try {
    let classes = await Classes.create(request.body);
    response.status(200).json({
      data: {
        classes,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getClasses = async (request, response, next) => {
  // classes.find({}).then((data)=>{
  //     response.status(200).json(data)
  // }).catch(err => next(err));
  try {
    const allClasses = await Classes.find();
    response.status(200).json({
      data: {
        allClasses,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getClass = async (request, response, next) => {
  try {
    let classOne = await Classes.findById(request.params.id).populate({
      path: "children",
      select: "fullName",
    });
    response.status(200).json({
      data: {
        classOne,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateClass = async (request, response, next) => {
  try {
    let classUpdated = await Classes.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    response.status(200).json({
      data: {
        classUpdated,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.deleteClass = async (request, response, next) => {
  try {
    let deletedClass = await Classes.findByIdAndDelete(request.params.id);
    response.status(200).json({
      message: "deleted",
    });
  } catch (err) {
    next(err);
  }
};

exports.getClassesChildren = async (request, response, next) => {
  try {
    let classChild = await Classes.find(request.params.id).populate({
      path: "children",
      select: { name: 1, children: 1 },
    });
    response.status(200).json({
      data: {
        classChild,
      },
    });
  } catch (err) {
    next(err);
  }
};
exports.getTeacherSupervisor = async (request, response, next) => {
  try {
    let teacherSupervisor = await Classes.find({
      _id: request.params.id,
    }).populate(
      {
        path: "supervisor",
      },
      { select: { name: 1, supervisor: 1 } }
    );
    response.status(200).json({
      data: {
        teacherSupervisor,
      },
    });
  } catch (err) {
    next(err);
  }
};
