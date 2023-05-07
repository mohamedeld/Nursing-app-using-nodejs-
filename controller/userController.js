const User =require("./../model/userModel");
const bcrypt = require("bcrypt");

exports.userCheckInfo = async (request,response,next)=>{
    try{
        let user = await User.findOne({email:request.body.email}).exec();
        if(user){
            response.status(400).json({
                message:"user is registered"
            })
        }
        let salt = await bcrypt.genSalt();
        let hashedPassword =await bcrypt.hash(request.body.password,salt);
        user = new User({
            name:request.body.name,
            email:request.body.email,
            isAdmin:request.body.isAdmin,
            password:hashedPassword
        });
        
        await user.save();
        const token = user.genAuthToken();
        response.header("x-auth-token",token);
        response.status(200).json({
            message:"ok",
            data:{
                user
            }
        })
    }catch(err){
        next(err);
    }
}