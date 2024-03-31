import React from "react";
import SearchBar from "./SearchBar";
import { IoHomeOutline } from "react-icons/io5";
import { RxActivityLog } from "react-icons/rx";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoTrendingUpSharp } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import Notifications from "./Notifications";
import Date from "./DateBar";
import { Link } from "react-router-dom";
import DateBar from "./DateBar";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/*  <li>
            <Link to ="/trending">
              <div className="flex gap-1 items-center text-lg ">
            <IoTrendingUpSharp/>
            <span>Trending</span>
              </div></Link>
          </li> */}
            <li>
              <Link to="/home">
                <div className="flex gap-1 items-center text-md">
                  <IoHomeOutline />
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <details>
                <summary>
                  <div className="flex gap-1 items-center text-md">
                    <RxActivityLog />
                    <span>Student Activity</span>
                  </div>
                </summary>
                <ul className="p-2 z-10 text-sm">
                  <li>
                    <Link to="/studentActivity/cultural">Cultural</Link>
                  </li>
                  <li>
                    <Link to="/studentActivity/sports">Sports</Link>
                  </li>
                  <li>
                    <Link to="/studentActivity/technical">Technical</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/academic/news">
                <div className="flex gap-1 items-center text-md">
                  <HiOutlineAcademicCap />
                  <span>Academics</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/campusExplore/visit">
                <div className="flex gap-1 items-center text-md">
                  <AiOutlineVideoCameraAdd />
                  <span>Campus Explore</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/other/news">
                <div className="flex gap-1 items-center text-md">
                  <BiCategory />
                  <span>Other</span>
                </div>
              </Link>
            </li>
          </ul>
    </div>
    <div className="flex flex-col justify-around">
    <a className="btn btn-ghost p-[4px] md:p-[8px] text-[1.5rem] md:text-[2rem]">Samsára</a>
    <DateBar/>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/*  <li>
        <Link to ="/trending">
          <div className="flex gap-1 items-center text-lg ">
        <IoTrendingUpSharp/>
        <span>Trending</span>
          </div></Link>
      </li> */}
        <li>
          <Link to="/home">
            <div className="flex gap-1 items-center text-lg">
              <IoHomeOutline />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <details>
            <summary>
              <div className="flex gap-1 items-center text-lg">
                <RxActivityLog />
                <span>Student Activity</span>
              </div>
            </summary>
            <ul className="p-2 z-10">
              <li>
                <Link to="/studentActivity/cultural">Cultural</Link>
              </li>
              <li>
                <Link to="/studentActivity/sports">Sports</Link>
              </li>
              <li>
                <Link to="/studentActivity/technical">Technical</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link to="/academic/news">
            <div className="flex gap-1 items-center text-lg">
              <HiOutlineAcademicCap />
              <span>Academics</span>
            </div>
          </Link>
        </li>

        <li>
          <Link to="/campusExplore/visit" >
            <div className="flex gap-1 items-center text-lg">
              <AiOutlineVideoCameraAdd />
              <span>Campus Explore</span>
            </div>
          </Link>
        </li>
        <li className="md:hidden">
          <Link to="/other/news" >
            <div className="flex gap-1 items-center text-lg">
              <BiCategory />
              <span>Other</span>
            </div>
          </Link>
        </li>
       
      </ul>
  </div>
  <div className="navbar-end">
   <SearchBar />
  </div>
</div>

  );
};

export default Navbar;
