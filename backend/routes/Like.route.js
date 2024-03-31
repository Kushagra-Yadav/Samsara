import express from "express"
import { addLike, removeLike } from "../controllers/Like.controller.js";


const LikeRouter=express.Router();
LikeRouter.get('/addLike/:id',addLike);
LikeRouter.get('/removeLike/:id',removeLike)

export default LikeRouter;