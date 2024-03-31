import React, { useContext } from "react";
import { useStoryContext } from "../../StoryContext/StoryContext";
import News from "../NewsSection/News";
import { useParams } from "react-router-dom";

const Filter = ({ filterKey=null }) => {
  const { query } = useParams();
  console.log(query);
  const show= filterKey ==null ? 'SHOWING RESULTS FOR :':' ';
  const { stories } = useStoryContext();
  if(filterKey===null)
  {
    filterKey=query;
  }
  const filteredStories = stories.filter((story) => {
    return story.Domain.some((domain) =>
      domain.trim().toLowerCase().includes(filterKey.trim().toLowerCase())
    );
  });
  return (
    <div className="flex flex-wrap  p-2  pl-4 gap-4 justify-start w-full">
      <span className="flex text-2xl font-semibold text-black">
       {`${show} ${filterKey.toUpperCase()}`}
       </span>
       <div className=" flex justify-evenly  lg:justify-around gap-3 w-full flex-wrap ">
        
          {filteredStories.map((filteredStory, index) => {
          return (
          <News
            key={index}
            id={filteredStory._id}
            Headline={filteredStory.Headline}
            Article={filteredStory.Article}
            HeaderImage={filteredStory.HeaderImage}
            Domain={filteredStory.Domain}
          />
        );
        })}
     
      </div>

 </div>

  );}
export default Filter;

