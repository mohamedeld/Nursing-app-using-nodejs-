// const mongoose = require("mongoose");
const Classes = require("../model/childModel");
const Teachers = require("./../model/teacherModel");
// require("./../model/teacherModel");
// const teachers = mongoose.model("teachers");

exports.getAllTeachers = async (request,response,next)=>{
    try{
        let teachers = await Teachers.find();
        response.status(200).json({
            data:{
                teachers
            }
        })
    }catch(err){
        next(err);
    }
};

exports.addTeacher =(request,response,next)=>{
    // const image = request.protocol + '://' + req.get('host') + '/teacherImages'  + request.file.filename;
    let teachers = new Teachers({
        fullName:request.body.fullName,
        email:request.body.email,
        password:request.body.password,
        image:request.file.path
    })
    teachers.save().then((data)=>{
        response.status(200).json(data)
    }).catch(err => next(err));
    // try{
    //     let teachers = await Teachers.create(request.body);
    //     response.status(200).json({
    //         data:{
    //             teachers
    //         }
    //     })
    // }catch(err){
    //     next(err);
    // }
    
};

exports.getTeacher = async (request,response,next)=>{
    try{
        let teacher = await Teachers.findById(request.params.id);
        if(teacher == null){
            throw new Error("Teacher not found");
        }
        response.status(200).json({
            data:{
                teacher
            }
        })
    }catch(err){
        next(err);
    }
};

exports.updateTeacher = async (request,response,next)=>{
    try{
        let newTeacher = await Teachers.findByIdAndUpdate(request.params.id,request.body,{
            new:true
        });
        if (!newTeacher) {
            throw new Error("Teacher not found");
        }
        response.status(200).json({
            status:"success",
            data:{
                newTeacher
            }
        })
    }catch(err){
        next(err);
    }
};
exports.deleteTeacher =async (request,response,next)=>{
    try{
        let deletedTeacher = await Teachers.findByIdAndDelete(request.params.id);
        if(!deletedTeacher){
            throw new Error("teacher was not found");
        }
        response.status(200).json({
            message:"deleted"
        })
    }catch(err){
        next(err);
    }
}

exports.getSupervisor = (request,response,next)=>{
    Classes.find().populate({
        path:"supervisor",
        strictPopulate: false,
    }).then((object)=>{
        response.status(200).json(object);
    }).catch(err => next(err))
};
