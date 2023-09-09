const User = require ("../model/user");

const signup = async (req, res) => {
    const {name, email, password} = req.body;
    const check = await User.findOne({email:email}).exec();
    if(!check){
        const user = new User({
            name,
            email,
            password
        })
        const result = await user.save();
        return (
            res.status(200).json({
                msg:"User Registerd. Please login Now",
               // result
            })
        )
        }else{
return(
            res.status(200).json({
                msg:"User Already exist"
            })
    )}
        }


const getAllUser = async (req,res) => {
   const result = await User.find({}).exec();
   if(!result){
    return (
        res.status(400).json({msg:"some thing went wring"})
    )
   }
   else{
    return(
        res.status(200).json({
            msg:"All user data",result
        })
    )
   }
};

module.exports = {signup,getAllUser};