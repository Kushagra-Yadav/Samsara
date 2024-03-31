import mongoose from "mongoose"
const storySchema=new mongoose.Schema({
  Headline:{
    type:String,
    required:true
  },
  Article:{
    type:String,
    required:true,
  },
  HeaderImage:{
   type:String,
   required:true
  },
  CountViews:{
  type:Number,
  default:1
  },
  likesCount:{
  type:Number,
  default:1
  },
  ArticleImages:[{
    type:String,
    default:[]
  }],
  Domain:[
    {
      type:String,
      required:true
    }
  ]
},{timestamps:true});
const Story=mongoose.model("Story",storySchema);
export default Story;