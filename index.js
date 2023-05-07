const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"teacherImages")));


const userRouter = require("./routes/userRouter");
const loginRouter =require("./routes/auth");
const teacherRouter = require("./routes/teacherRouter");
const adminRouter =require("./routes/adminRouter");
const childRouter = require("./routes/childrenRouter");
const classRouter = require("./routes/classRouter");



app.use("/users",userRouter);
app.use("/login",loginRouter);
app.use("/teachers",teacherRouter);
app.use("/child",childRouter);
app.use("/class",classRouter);
app.use("/admin",adminRouter);


app.use((request,response,next)=>{
    response.json({
        message:"page not found"
    })
});

app.use((error,request,response,next)=>{
    response.json({
        message:error+""
    })
});


module.exports = app;