import React from 'react'
import Dr1 from "../../assets/Images/Dressing Room/dressing1.png"
import Dr2 from "../../assets/Images/Dressing Room/dr2.png"
import Dr3 from "../../assets/Images/Dressing Room/dr3.png"
import Dr4 from "../../assets/Images/Dressing Room/dr4.png"
import Dr5 from "../../assets/Images/Dressing Room/dr5.png"
import Dr6 from "../../assets/Images/Dressing Room/dr6.png"
import Dr7 from "../../assets/Images/Dressing Room/dr7.png"
import Dr8 from "../../assets/Images/Dressing Room/dr8.png"
import Dr9 from "../../assets/Images/Dressing Room/dr9.png"
import Dr10 from "../../assets/Images/Dressing Room/dr10.png"
import Dr11 from "../../assets/Images/Dressing Room/dr11.png"

export default function Dressing() {
  return <>
    <div style={{paddingTop:'108px'}} className="doors">
  <h3 className='ms-5 my-5' style={{fontSize:'50px',color:'#48AE9E',fontWeight:'700'}}>Gallery <i className="fa-solid fa-arrow-right"></i> <span style={{color:'black'}}>Dressing Room</span></h3>

  <div className="row mx-4 my-4">
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr1} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr2} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr3} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr4} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr5} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr6} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr7} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr8} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr9} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr10} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Dr11} alt="" />
    </div>
 
  </div>
  </div>
  </>
  
}