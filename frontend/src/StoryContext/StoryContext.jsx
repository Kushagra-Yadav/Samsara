import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export const StoryContext=createContext();

export const StoryContextProvider=({children})=>{
  const [stories,setStories]=useState([]);
  const [contentLoading,setContentLoading]=useState(false);
  const [headerImageLoading,setHeaderImageLoading]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      console.log("DATA");
      setContentLoading(true);
      try {
        const res = await fetch("/api/uploads/story");
        const data = await res.json();
        if (!data.error) {
          setStories(data.message);
          setContentLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setContentLoading(false);
      } 
    };
    fetchData();
    
  }, []);

  return <StoryContext.Provider value={{stories,setStories,contentLoading,headerImageLoading,setHeaderImageLoading}}>
    {children}
  </StoryContext.Provider>
}

export const useStoryContext=()=>{
   return useContext(StoryContext);
}
