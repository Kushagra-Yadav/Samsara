import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import UploadRouter from "./routes/Upload.route.js";
import AuthRouter from "./routes/Auth.route.js";
import jwt from "jsonwebtoken";
import Story from "./models/Story.models.js";
import LikeRouter from "./routes/Like.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const Port = 5000;
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
  console.log("wee");
 return res.status(200).send('Home');
});
app.post('/api/addView/:id',async(req,res)=>{
  try {
    const id=req.params.id;
    console.log("View");
    const resp = await Story.findByIdAndUpdate(id, { $inc: { CountViews: 1 } });
    console.log(resp);
    return ;
  } catch (error) {
    console.log(error);
    return ;
  }
})
app.use('/api/likes',LikeRouter);
app.use('/api/auth',AuthRouter);
app.use('/api/uploads',UploadRouter);
const ROOT_DIRECTORY = path.resolve(); // Adjust '..' if necessary

// Define the route to serve image files dynamically
app.get('/api/image/:HeaderImage', (req, res) => {
  // Construct the absolute path to the image file
  const imagePath = path.join(ROOT_DIRECTORY, "uploads", req.params.HeaderImage);
  // Send the image file to the client
  res.sendFile(imagePath);
});
app.listen(Port, () => {
  console.log("wee11");
  connectToMongoDB();
  console.log(`Server listening on port ${Port}`);
});
