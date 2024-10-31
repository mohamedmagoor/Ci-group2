import React from 'react'
import styles from "./Footer.module.css"

import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
     <div style={{backgroundColor:"#DDDDDD"}} className="footer">

      <div className="row">
        <div className="col-md-4 p-5 text-center d-flex align-items-center justify-content-center">
          <img src="/public/Images/cabientLogo.png" alt="" />
          <img src="/public/Images/dentalSecrets.png" alt="" />
        </div>
        <div className="col-md-4 p-5 text-center">
          <div style={{gap:'30px',fontSize:'20px'}} className="links-nav d-flex justify-content-center align-items-center">
          <Link to={'/'} style={{color:'#48AE9E',fontWeight:'700'}}>Home</Link>
          <Link to={'about'} style={{color:'#48AE9E',fontWeight:'700'}}>About Us</Link>
          <Link to={'gallery'} style={{color:'#48AE9E',fontWeight:'700'}}>Gallery</Link>
          
          </div>
           <div className="social-links mt-4 text-center">
          <i style={{fontSize:'35px' ,color:'#48AE9E'}} className="fa-brands fa-facebook mx-3 cursor-pointer"></i>
          <i  style={{fontSize:'35px' ,color:'#48AE9E'}} className="fa-brands fa-instagram mx-3 cursor-pointer"></i>
          <i style={{fontSize:'35px' ,color:'#48AE9E'}} className="fa-brands fa-twitter mx-3 cursor-pointer"></i>
          <i style={{fontSize:'35px' ,color:'#48AE9E'}} className="fa-brands fa-whatsapp mx-3 cursor-pointer"></i>          
          </div>
         

        </div>
      </div>
     </div>
  </>
}
