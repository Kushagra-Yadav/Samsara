
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NewsSection from './components/NewsSection/NewsSection'

function App({check}) {
 return (
    < div className='w-full h-full bg-gray-300 font-times'>
       <div className='w-full flex-col'>
        <Navbar />
        {check==="true" ? <NewsSection/>:<Outlet/>} 
        <Footer/>
    </div>
      <Toaster/>
    </div>
  )
}

export default App
