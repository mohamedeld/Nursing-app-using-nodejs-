const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        default:mongoose.Types.ObjectId,
        auto:true
    },
    fullName:{
        type:String,
        required:[true,"full name is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"]
    },
    image:{
        type:String,
        required:[true,"image is required"]
    }
});

const teacherModel = mongoose.model("Teachers",teacherSchema);

module.exports = teacherModel;


