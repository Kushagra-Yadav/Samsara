import React from "react";
import { TbPoint } from "react-icons/tb";
import { VscDebugBreakpointData } from "react-icons/vsc";
const Notifications = () => {
  return (
    <button className="btn btn-ghost btn-circle z-10 relative">
      <div className="dropdown dropdown-left">
        <div tabIndex={0} role="button" >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </div>
        <ul
          
          className="dropdown-content mt-8 z-[1] menu p-1 shadow bg-neutral-800 rounded-box md:w-80"
        >
          <li>
            <a><VscDebugBreakpointData/>Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1</a>
          </li>
          <li>
            <a><VscDebugBreakpointData/>Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2Item 2</a>
          </li>
          <li>
            <a><VscDebugBreakpointData/>Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3Item 3</a>
          </li>
          <li>
            <a><VscDebugBreakpointData/>Item 4</a>
          </li>
        </ul>
      </div>
    </button>
  );
};

export default Notifications;
