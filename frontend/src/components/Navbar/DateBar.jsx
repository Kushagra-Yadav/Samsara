import React from 'react'
import  { useState, useEffect } from 'react';
const DateBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
         <div className='text-[12px] md:text-[15px]'>
         <p className='flex justify-center'>{currentDate.toLocaleDateString(undefined, options)}</p>
        </div>
      );
    };
    

export default DateBar;