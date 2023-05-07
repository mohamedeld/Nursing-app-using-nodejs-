const multer = require("multer");
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./teacherImages/")
    },
    filename:function(req,file,cb){
        cb(null,new Date().toDateString() + file.originalname)
    }
})
const upload = multer({
    storage
});

module.exports = upload;