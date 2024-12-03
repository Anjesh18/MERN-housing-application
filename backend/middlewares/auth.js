import jwt from 'jsonwebtoken'

export const isAuthenticated=async(req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(404).json({messaage:"Token not available", success:false})
        }
        const decode=jwt.verify(token, 'secret123')
        if(!decode){
            return res.status(406).json({message:"Could not verify token", success:false})
        }
        req.id=decode.userId
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error", success:false})
    }
}