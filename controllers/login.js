const User = require ("../model/user");

const signin = async (req, res) => {
    const user = { email, password} = req.body;
    const check = await User.findOne({email:email}).exec();
    if(!check){
        console.log("user not exist")
        return (res.status(201).json({msg:"User not exist"}))
    }else if(password!==check.password){
        console.log("password not match")
        return (
            res.status(201).json({
                msg:"Please check password"
            })
        )
    }else if(password=== check.password){
            console.log("login succeful")
            const user = check;
            return (
           res.status(200).json({
           msg:"Login Successful",user:user
         })
     )}
     else{
        
    return (
         res.status(201).json({msg:"Password not match"})
      )
    }
};

module.exports = signin;