import React from 'react'
import styles from "./Gallery.module.css"
import Doors from "../../assets/Images/Doors.png"
import Dressing from "../../assets/Images/dressing.png"
import Kitchen from "../../assets/Images/kitchen.png"
import Interior from "../../assets/Images/interior.png"
import { Link } from 'react-router-dom'


export default function Gallery() {
  return <>
  <div style={{paddingTop:'108px'}} className="gallery">
    <div  className="row p-5">
        <div className="col-md-2 text-center">
          <h3 style={{fontSize:'50px',color:'#48AE9E',fontWeight:'700'}}>Gallery</h3>
        </div>
      
        <div className="col-md-4 text-center flex-column d-flex align-items-center justify-content-center">
       <Link to={'doors'}>
       <div className={`${styles.imageContainer} cursor-pointer mb-4`}>
      <img src={Doors} alt="Sample" className={styles.image} />
      <div className={styles.overlay}>
        <h2>Doors</h2>
      </div>
    </div>
       </Link>
        

        <Link to={'interior'}>
        <div className={`${styles.imageContainer} cursor-pointer`}>
      <img src={Interior} alt="Sample" className={styles.image} />
      <div className={styles.overlay}>
        <h2>Interior Design</h2>
      </div>
    </div>
        </Link>
        
        </div>
        <div className="col-md-4 text-center d-flex flex-column align-items-center justify-content-center">
       <Link to={'dressing'}>
       <div className={`${styles.imageContainer} cursor-pointer mb-4`}>
      <img src={Dressing} alt="Sample" className={styles.image} />
      <div className={styles.overlay}>
        <h2>Dressing Room</h2>
      </div>
    </div>
       </Link>
        

        <Link to={'kitchens'}>

         <div className={`${styles.imageContainer} cursor-pointer`}>
      <img src={Kitchen} alt="Sample" className={styles.image} />
      <div className={styles.overlay}>
        <h2>Kitchens</h2>
      </div>
    </div>
        </Link>
       
        </div>
  </div>
    </div>
  </>
}
