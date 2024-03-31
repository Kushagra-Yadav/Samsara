import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate=useNavigate(null);
  const getStartedHandler=()=>{
     navigate('/home');
  }
  return (
    <div className="hero min-h-[500px] bg-base-200">
     <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">We are the students of IIIT Jabalpur working out to bring out the latest news and update  for you.We are the platform to make you avail the news of campus and even outside campus on a single place.</p>
      <button onClick={getStartedHandler} className="btn btn-primary" >Get Started</button>
    </div>
  </div>
</div>
  )
}

export default AboutUs