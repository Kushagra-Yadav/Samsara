import jwt from "jsonwebtoken"
import User from "../models/User.models.js";
const protectedRoute=async(req,res,next)=>{
 try {
   const token=req.cookies.jwt;
   if(!token)
   res.status(401).json("Unauthorized : No Token Provided");
   const decoded=jwt.verify(token,process.env.JWT_Secret_Key);
   if(!decoded)
   {
    res.status(401).json("Unauthorized : Invalid Token Provided");
   }
   const user=await User.findById(decoded.userId).select("-password");
   if(!user)
   {
    res.status(404).json("User not found");
   }
   req.user=user;
   next();
 } catch (error) {
  console.log("Error in protected route",error.message);
  res.status(501).json({message:"Internal server error"});
 }
}
export default protectedRoute;


