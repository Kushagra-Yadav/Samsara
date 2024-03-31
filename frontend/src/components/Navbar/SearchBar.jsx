import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const navigate=useNavigate();
  const [search,setSearch]=useState("");
  const submitSearchHandler=(event)=>{
   event.preventDefault();
   if (search.trim() === "")
   toast.error("Empty search not possible", {
    position: "top-right"
  });
   else
   navigate(`/search/${search}`);
  }
  return (
    <div className='flex gap-1 items-center'>
    <div className="form-control">
      <input type="text" onChange={(e)=>{
        setSearch(e.target.value);
      }} placeholder="Search" className="input input-bordered w-24 md:w-auto h-[2rem]" />
    </div>
    <button onClick={submitSearchHandler} className="btn-sm btn-circle btn-outline flex items-center justify-center">
    <div className='text-xl font-extrabold'> <IoSearchOutline /></div>
    </button>
    </div>
  )
}

export default SearchBar




