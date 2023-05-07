
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const addressSchema = new mongoose.Schema({
    city:{type:String,required:true},
    street:{type:Number,required:true},
    building:{type:Number,required:true}
},{_id:false});

const childSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"your full name is required"]
    },
    age:Number,
    level:{
        type:String,
        enum:["PreKG","KG1","KG2"],
        required:[true,"your level is required"]
    },
    address:addressSchema
});
childSchema.plugin(autoIncrement.plugin,{
    model: 'childrens',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

const childrenModel = mongoose.model("childrens",childSchema);
module.exports = childrenModel;