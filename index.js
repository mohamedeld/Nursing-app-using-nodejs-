const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const teacherRouter = require("./routes/teacherRouter");
const childRouter = require("./routes/childrenRouter");
const classRouter = require("./routes/classRouter");
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

app.use("/teachers",teacherRouter);
app.use("/child",childRouter);
app.use("/class",classRouter);

app.use((request,response,next)=>{
    response.json({
        message:"page not found"
    })
});
app.use((error,request,response,next)=>{
    response.json({
        message:error+""
    })
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})