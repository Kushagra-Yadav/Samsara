import React, { useEffect, useState } from "react";
import { useStoryContext } from "../../StoryContext/StoryContext";
import { useNavigate } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";

const News = ({id, Headline, Article, HeaderImage, Domain }) => {
  const navigate=useNavigate();
  const [liked,setLiked]=useState(false);
  const handleReadArticle=(e)=>{
    e.preventDefault();
  navigate(`/detailed/${id}`);
  }
  const [imageURL, setImageURL] = useState("");
  const { headerImageLoading, setHeaderImageLoading } = useStoryContext();
  useEffect(() => {
    const getImage = async () => {
      console.log("Getting Image started");
      const localStore=localStorage.getItem(id);
      if(localStore==='true')
      setLiked(true);
      setHeaderImageLoading(true);
      try {
        const response = await fetch(`/api/image/${HeaderImage}`);
        console.log(response);
        if (response.ok) {
          const imageUrl = await response.url;
          setImageURL(imageUrl);
        }
      } catch (error) {
        console.log("Error in getting header image", error);
      }
      setHeaderImageLoading(false);
    };

    getImage();
  }, []);
  return (
    <div onClick={handleReadArticle} className=" card  w-[250px] h-[300px] cursor-pointer md:w-[300px] md:h-[400px] lg:w-[320px] lg:h-[420px] bg-base-100 shadow-xl ">
      <figure className="w-full h-1/2">
        {headerImageLoading ? (
          <div className="skeleton w-full h-full"></div>
        ) : (
          <img
            src={imageURL}
            alt="HeaderImage"
            className="w-full h-full object-cover"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm md:text-[20px] line-clamp-3">{Headline}</h2>
        <p className="line-clamp-2 md:line-clamp-4 overflow-ellipsis">{Article}</p>
        <button onClick={async(e)=>{
          e.stopPropagation();
          
          if(!liked)
          {
            const resp=await fetch(`/api/likes/addLike/${id}`);
            const data=await resp.json();
            if(data.success)
            {
              localStorage.setItem(id,"true");
              setLiked(true);
            }
          }
        else
        {
          const resp=await fetch(`/api/likes/removeLike/${id}`);
          const data=await resp.json();
            if(data.success)
            {
              localStorage.removeItem(id);
              setLiked(false);
            }
        }
        }} className="btn btn-sm  w-6 md:w-8 p-1">
        {
          liked ? <FcLike className="w-full h-full"/>: <GoHeart className="w-full h-full"/>
        }
       </button>
       
      </div>
    </div>
  );
};

export default News;
