import React from 'react'
import styles from "./Navbar.module.css"
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {

  const location = useLocation()
  const isHomePage = location.pathname === '/';
  const navbarStyle = {
    backgroundColor: isHomePage ? '#ffffff' : '#48AE9E', 
  }
  const linkStyle = {
    color: isHomePage ? '#48AE9E' : '#ffffff',
  };

  return <>
  <nav style={navbarStyle} className="navbar navbar-expand-lg  fixed-top">
  <div className="container">
    <Link className="navbar-brand" to={'/'}>
      <img src="/public/Images/Ci Group Logo aqua png 1.png" alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item px-4">
          <NavLink style={linkStyle} className="nav-link" aria-current="page" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item px-4">
          <NavLink style={linkStyle} className="nav-link"  to={'gallery'}>Gallery</NavLink>
        </li>
        <li className="nav-item px-4">
          <NavLink style={linkStyle} className="nav-link" to={'about'}>About Us</NavLink>
        </li>
        <li className="nav-item px-4">
          <NavLink style={linkStyle} className="nav-link" to={'contact'}>Contact Us</NavLink>
        </li>
      </ul>
      <i className="fa-solid fa-globe fs-3 d-none d-lg-block "></i>
    </div>
  </div>
</nav>
  </>
}
