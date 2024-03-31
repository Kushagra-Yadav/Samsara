import Story from "../models/Story.models.js";

export const addLike=async(req,res)=>{
  try {
    const id=req.params.id;
  await Story.findByIdAndUpdate(id,{$inc:{likesCount:1}});

  console.log("LIked");
   return res.status(200).json({success:true});
    } catch (error) {
    console.log(error);
    return res.status(500).json({success:false});
  }
  
};

export const removeLike=async(req,res)=>{
  try {
    const id=req.params.id;
  await Story.findByIdAndUpdate(id,{$dec:{likesCount:-1}});
  console.log("DisLIked");
  return res.status(200).json({success:true});
  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false});
  }
  
};