import React, { useState, useEffect } from "react";
import News from "./News";
import { useStoryContext } from "../../StoryContext/StoryContext";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Loading from "../../pages/Loading";
const NewsSection = () => {
 
  const { stories ,contentLoading} = useStoryContext();

  console.log(stories);
  function check(story, keyword) {
    return story.some((storyDomain) =>
      keyword.some(
        (genreKeyword) =>
          storyDomain.trim().toLowerCase() === genreKeyword.trim().toLowerCase()
      )
    );
  }

  const [genres, setGenres] = useState([
    /*
    {
      type: "NewsNow",
      keyword:null//Based on date
    },
    */{
      type: "Cultural",
      keyword: ["Cultural Jazabaat Win"],
    },
    {
      type: "Sports",
      keyword: ["Game","Sports", "Sport", "InterIIIT", "Enthuse"],
    },
    {
      type: "Health",
      keyword: ["Health", "life", "Fitness"],
    },
  ]);
  return (
    <div className="flex flex-wrap py-4 md:p-4 gap-2 mx-1 md:mx-3 ">
      {genres.map((genre, indexing) => (
        //<div key={indexing} className="w-full">
        <React.Fragment key={indexing}>
          <span className="flex text-2xl text-black">
            <div className=" flex items-center gap-2">
              {genre.type.toUpperCase()} <MdKeyboardDoubleArrowRight />
            </div>
          </span>
          <div className="flex flex-col mb:1 md:mb-3 w-full ">
            <div className="flex flex-row justify-start gap-3 overflow-x-auto">
              {
                contentLoading? <Loading/>:(
                  stories
                    .filter((story) => check(story.Domain, genre.keyword))
                    .map((story, index) => (
                      <div className="w-[250px] h-[300px]  md:w-[300px] md:h-[400px] lg:w-[320px] lg:h-[420px]">
                        <News
                        key={index}
                        id={story._id}
                        Headline={story.Headline}
                        Article={story.Article}
                        HeaderImage={story.HeaderImage}
                        Domain={story.Domain}
                      />
                      </div>
                    ))
                )
              }
            </div>
          </div>
        </React.Fragment>
        // </div>
      ))}
    </div>
  );
};

export default NewsSection;
