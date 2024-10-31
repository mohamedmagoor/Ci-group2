import React from 'react'
import Door1 from "../../assets/Images/Doors/door1.png"
import Door3 from "../../assets/Images/Doors/door2.png"
import Door4 from "../../assets/Images/Doors/door3.png"
import Door5 from "../../assets/Images/Doors/door4.png"
import Door6 from "../../assets/Images/Doors/door5.png"
import Door7 from "../../assets/Images/Doors/door6.png"
import Door8 from "../../assets/Images/Doors/door7.png"
import Door2 from "../../assets/Images/Doors/door8.png"

export default function Doors() {
  return <>
  <div style={{paddingTop:'108px'}} className="doors">
  <h3 className='ms-5 my-5' style={{fontSize:'50px',color:'#48AE9E',fontWeight:'700'}}>Gallery <i className="fa-solid fa-arrow-right"></i> <span style={{color:'black'}}>Doors</span></h3>

  <div className="row mx-4 my-4">
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Door1} alt="" />
    </div>
    <div className="col-md-4  p-2 col-lg-3 mb-5 text-center">
      <img src={Door2} alt="" />
    </div>
    <div className="col-md-4 p-2 col-lg-3 mb-5 text-center">
      <img src={Door3} alt="" />
    </div>
    <div className="col-md-4 p-2 col-lg-3 mb-5 text-center">
      <img src={Door4} alt="" />
    </div>
    <div className="col-md-4 p-2 col-lg-3 mb-5 text-center">
      <img src={Door5} alt="" />
    </div>
    <div className="col-md-4 p-2 col-lg-3 mb-5 text-center">
      <img src={Door6} alt="" />
    </div>
    <div className="col-md-4 p-2 col-lg-3 mb-5 text-center">
      <img src={Door7} alt="" />
    </div>
    <div className="col-md-4 p-2 col-lg-3 mb-5 text-center">
      <img src={Door8} alt="" />
    </div>
  </div>
  </div>

  </>
}
