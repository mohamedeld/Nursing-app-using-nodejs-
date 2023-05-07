const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const classSchema = new mongoose.Schema({
    // _id:{
    //     type:Number,
    //     required:true,
    //     unique:true
    // },
    name:{
        type:String,
        required:[true,"your name is required"]
    },
    supervisor:{
        type:Number,
        ref:"Teachers"
    },
    children:[{
        type:Number,
        ref:"childrens"
    }]
});
classSchema.plugin(autoIncrement.plugin, {
    model: 'classes',
    field: '_id',
    startAt: 1,
    incrementBy: 1
  });

const classModel = mongoose.model("classes",classSchema);

module.exports = classModel;