
import User from "../models/User.models.js";
import bcryptjs from "bcryptjs";
import generateJWTandSetCookie from "../utils/GenerateToken.js";
import jwt from "jsonwebtoken"
export const getCookies=(req,res)=>{
  const token = req.cookies.jwt;
  console.log(token);
  // Check if token exists
  if (!token) {
    return res.status(401).json({ success: false });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded);
    // Attach decoded payload to request object
    if(decoded)
    return res.status(200).json({ success: true });
    throw new Error();
    // Proceed to the next middleware or route handler
    
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ success: false });
  }
};


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "No such user exist" });
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) 
      return res.status(400).json({ error: "Incorrect Password" });
    generateJWTandSetCookie(user._id, res);
    console.log("Verified User");
    return res.status(200).json({ message: user });
  } catch (error) {
    console.log("Error message in login", error.message);
    return res.status(500).send({ InternalError: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:"0"});
    return res.redirect("/api/auth/login");
  } catch (error) {
    console.log("Error message in logout", error.message);
    return res.redirect("/api/auth/login");
  }
};
