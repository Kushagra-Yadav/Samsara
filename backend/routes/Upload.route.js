import express from "express"
import protectedRoute from "../middleware/protectedRoute.js";
import { getStories, upload } from "../controllers/Upload.contoller.js";
import multer from "multer";

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    return cb(null,"./uploads");
  },
  filename:function(req,file,cb){
    return cb(null,`${Date.now()}-${file.originalname}`)
  }
});
const uploadFolder=multer({storage});

console.log("routee");
const UploadRouter=express.Router();
UploadRouter.post("/story",uploadFolder.single("HeaderImage"),upload);

UploadRouter.get("/story",getStories);


export default UploadRouter;