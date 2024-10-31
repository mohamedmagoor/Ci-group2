import React from 'react'
import Interior1 from "../../assets/Images/interior/interior1.png"
import Interior2 from "../../assets/Images/interior/interior2.png"
import Interior3 from "../../assets/Images/interior/interior3.png"
import Interior4 from "../../assets/Images/interior/interior4.png"
import Interior5 from "../../assets/Images/interior/inerior5.png"
import Interior6 from "../../assets/Images/interior/interior6.png"
import Interior7 from "../../assets/Images/interior/interuor7.png"

export default function Interior() {
  return <>
  <div style={{paddingTop:'108px'}} className="doors">
  <h3 className='ms-5 my-5' style={{fontSize:'50px',color:'#48AE9E',fontWeight:'700'}}>Gallery <i className="fa-solid fa-arrow-right"></i> <span style={{color:'black'}}>Interior Design</span></h3>

  <div className="row mx-4 my-4">
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Interior1} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Interior2} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Interior3} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Interior4} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Interior5} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Interior6} alt="" />
    </div>
    <div className="col-md-3 p-2  col-lg-3 mb-5 text-center">
      <img src={Interior7} alt="" />
    </div>
    </div>
    </div>
  </>
}
