import jwt from 'jsonwebtoken'

const jwtAuthMiddleware=(req,res,next)=>{

    // check the token is present or not
    const authorization=req.headers.authorization
    if(!authorization){
        return res.status(401).json({error:"Authorization is required"})
    }

    // extract the token
    const token=req.headers.authorization.split(" ")[1]


    // verfiy the token
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)

        req.user=decoded

        next()
        
    } catch (error) {
         res.status(401).json({error:"Bad Request Authorization is Invalid Please Login or SignUp"})
    }


}

const generateToken=(userData)=>{
   return  jwt.sign(userData,process.env.JWT_SECRET_KEY,{expiresIn:30000})
}


export {jwtAuthMiddleware,generateToken}