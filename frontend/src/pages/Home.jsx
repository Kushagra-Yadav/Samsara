import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import NewsSection from '../components/NewsSection/NewsSection'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useStoryContext } from '../StoryContext/StoryContext'
import Loading from './Loading'

const Home = () => {
 
  return (
    <div className='w-full flex-col'>
        <Navbar />
      <  Outlet/>
        <Footer/>
    </div>
  )
}

export default Home