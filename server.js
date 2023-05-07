const app = require("./index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:"./config.env"});
const port = process.env.PORT || 8080;

mongoose.connect(process.env.DATABASE_LOCAL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    family:4
}).then(()=>{
    console.log("connected to database");
    app.listen(port,()=>{
        console.log(`app listening on port ${port}`);
    });    
}).catch((err)=>{
    console.log("connection error" + err);
});