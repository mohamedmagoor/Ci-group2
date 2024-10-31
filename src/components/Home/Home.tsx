import React from 'react'
import styles from "./Home.module.css"
import { Link } from 'react-router-dom'


export default function Home() {
  return <>
  <div className={styles.homeImg}>
    <div className="main-content">
       <div className='px-5' style={{ fontSize: '96px' , fontWeight : '800', textAlign:'center',marginTop:'150px' }}>
    <span style={{color:' #48AE9E'}}>CI Group</span> Is With You From Start To Finish
    </div>
    <p className='w-75 mt-3 mb-1' style={{fontWeight:'800',margin:'auto', fontSize:'36px',textAlign:'center', lineHeight:'54px'}}>The Planing And Design Must Reflect Attention To The Details That Will Help Create A Sense Of Trust And Comfort</p>
    <div className="homeLinks mt-5 d-flex align-items-center justify-content-center gap-3">
    <Link to={'about'} className={styles.homeBtn} >About Us</Link>
    <Link to={'contact'} className={styles.homeBtn} >Contact Us</Link>
  </div>
    </div>
   
  </div>
  
    <div className={styles.homeInfo}>
      <div className="container">
        <p>Take a peek at the design we created notice the modern style of clean lines and clutter-free designs with neutral tones and natural textures
      </p>
      </div>
  
    </div>
    <div style={{backgroundColor:'#48AE9E'}} className="gallery">
        
        <div className="row p-5">
        <div className="col-md-2 text-center">
          <h3 style={{fontSize:'50px',color:'white',fontWeight:'700'}}>Gallery</h3>
        </div>
        <div className="col-md-4 text-center">
          <img className='w-75 py-3 cursor-pointer' src="/public/Images/Doors.png" alt="" />
          <img className='w-75 py-3 cursor-pointer' src="/public/Images/interior.png" alt="" />
        </div>
        <div className="col-md-4 text-center">
        <img className='w-75 py-3 cursor-pointer' src="/public/Images/dressing.png" alt="" />
        <img className='w-75 py-3 cursor-pointer' src="/public/Images/kitchen.png" alt="" />
        </div>
        </div>

      </div>

     
      <div className={styles.secHomeImg}>
        <div className="container">
      <h4 style={{fontSize:'45px',fontWeight:'400'}} className='text-center pt-5'>We have the power to make your vision at reality by</h4>
        <div className="list-solutions mt-5 d-flex align-items-center justify-content-between">
          <ul style={{listStyle:'none',fontSize:'46px'}}>
            <li>Efficient solutions.
             </li>
            <li>Innovative designs.</li>
            <li>Excellent engineering.</li>
          </ul>
          <ul style={{fontSize:'46px'}}>
            <li>Delivery on time.

             </li>
            <li>Fitting within budget.</li>
            <li>High health and safety standards.</li>
          </ul>
        </div>
        </div>
        </div>

  
  
  
  
  </>
}
