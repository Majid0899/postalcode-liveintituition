import { generateToken } from "../middleware/authMiddleware.js";
import User from "../model/User.js";
import bcrypt from 'bcrypt'




const handleRegisterUser=async (req,res)=>{
    try {
        const {username,email,password}=req.body

        // Check for empty
        if(!username || !email || !password){
            return res.status(400).json({error:"Please fill all the feilds!!!"})
        }

        // check if user already exist
        const existingUser=await User.findOne({email:email})
        if(existingUser){
            return res.status(400).json({error:"User already exist "})
        }

        // hashed the password

        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt);

        // create a user
        const user=new User({username,email,password:hashedPassword})

        await user.save()

        const payload={
            id:user._id,
            username:user.username
        }

        const token=generateToken(payload)

        res.status(200).json({user,token,message:"Registration Successfull"})


        

    } catch (error) {

        console.log(error)
        res.status(500).json({error:`Internal Server Error ${error.message}`})
        
    }
}

const hanldeLoginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        

        if(!email || !password){
            return res.status(400).json({error:"Please fill all the feilds"})
        }

        // Retreive the user from database and compare password

        const user=await User.findOne({email:email})

        if(!user){
            return res.status(404).json({"error":"No user is present Please Register User"})
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({error:"Wrong password please Enter correct password"})
        }

        const payload={
            id:user._id,
            username:user.username
        }

        const token=generateToken(payload)


        res.status(200).json({user,token,message:"Logged In Successfully"})



    } catch (error) {
        res.status(500).json({error:`Internal Server Error ${error.message}`})
    }

}

export {handleRegisterUser,hanldeLoginUser}