import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import Subscription from './Subscription';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer footer-center py-4 px-1 md:p-10 bg-neutral-800 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <Link to="/samsara/aboutUs" className="link link-hover">About us</Link>
    <Link to="/samsara/contact"  className="link link-hover">Contact</Link>
    <Link to="/samsara/policy"  className="link link-hover">Policy</Link>
    <Link to="/api/auth/login"  className="link link-hover">Admin</Link>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4 text-xl">
      <a><FaInstagram/></a>
      <a><FaXTwitter/></a>
      <a><FaThreads/></a>
    </div>
  </nav> 
  <nav>
    <Subscription/>
  </nav>
  <aside>
    <p>Copyright © 2024 - All right reserved by The Samsára</p>
  </aside>
</footer>
  )
}

export default Footer