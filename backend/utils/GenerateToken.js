import jwt from "jsonwebtoken";

const generateJWTandSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_Secret_Key, {
    expiresIn: "15d"
  });
  // Set the cookie in the response (if needed)
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development"
  });
};
export default generateJWTandSetCookie;
