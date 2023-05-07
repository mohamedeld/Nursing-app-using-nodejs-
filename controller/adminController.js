const User = require("./../model/userModel");

exports.adminUpdated = async (request,response,next)=>{
    try{
        await User.findByIdAndUpdate({_id:request.params.id},{isAdmin:true},function(error,data){
            if(!error){
                if(data){
                    response.status(200).json({
                        message:"user role is set to admin",
                    })
                }else{
                    response.status(400).json({
                        message:"user not found"
                    })
                }
            }else{
                response.status(500).json({
                    message:"internal server error"
                })
            }
        })
    }catch(err){
        next(err)
    }
}