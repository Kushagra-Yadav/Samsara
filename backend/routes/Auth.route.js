import express from "express"
import { getCookies, login, logout } from "../controllers/Auth.controller.js";

const AuthRouter=express.Router();
AuthRouter.post("/login",login);
AuthRouter.get("/logout",logout);
AuthRouter.get("/admin/cookies",getCookies);
export default AuthRouter;