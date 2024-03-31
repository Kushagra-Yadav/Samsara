import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdMic } from "react-icons/io";
import { useStoryContext } from "../../StoryContext/StoryContext";

const DetailedNews = () => {
  const { stories } = useStoryContext();
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const filteredStories = stories.filter(singleStory => singleStory._id === id);
        if (filteredStories.length > 0) {
          setResult(filteredStories[0]);
          if(result)
          await fetch(`/api/addView/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ viewCount: 1 }), // Assuming you're sending the updated view count
        });
        }
      } catch (error) {
        console.error('Error fetching story:', error);
      }
    };

    fetchStory();
  }, [id, stories]);

  const speakArticle = () => {
    if (result) {
      const val = new SpeechSynthesisUtterance(
        `The article with headline ${result.Headline} reads ${result.Article}`
      );
      window.speechSynthesis.speak(val);
    }
  };

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3 m-1 card card-normal bg-base-100 shadow-xl flex flex-col lg:flex-row-reverse">
      <figure className="flex flex-col gap-2">
        <img
          src={`http://localhost:3000/api/image/${result.HeaderImage}`}
          alt="Album"
          className="h-[50vh] w-full shadow-2xl"
        />
        <img
          src="https://blog.ipleaders.in/wp-content/uploads/2021/10/Advertisement-Media.jpg"
          alt="Advertisement"
          className="h-[50vh] shadow-2xl p-3"
        />
      </figure>
      <div className="card-body lg:w-2/3">
        <h2 className="card-title text-[24px] lg:text-[28px]">{result.Headline}</h2>
        <p className="text-[18px] lg:text-[20px]">{result.Article}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={speakArticle}>
            <IoMdMic />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedNews;
