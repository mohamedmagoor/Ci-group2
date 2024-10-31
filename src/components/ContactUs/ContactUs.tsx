import React, { useState } from 'react'
import styles from "./ContactUs.module.css"

type BoxType = 'Call' | 'Address' | 'Message' | null;


export default function ContactUs() {
  const [selectedBox, setSelectedBox] = useState<BoxType>(null);

  const openSelectedBox = (boxType: BoxType) => {
    setSelectedBox(boxType); 
  };
  const closeSelectedBox = () => {
    setSelectedBox(null); 
  };
  

  return <>
    <div style={{paddingTop:'108px',backgroundColor:'#F3F5FA'}} className="contact-us position-relative">
    <h3 className='ms-5 my-5' style={{fontSize:'50px',color:'#48AE9E',fontWeight:'700'}}>Contact Us </h3>
    <div className="container">
      <div style={{gap:'60px'}} className={`contaiber-boxs ${selectedBox ? 'blured' : ''}  p-5 flex-column d-flex flex-md-row align-items-center justify-content-center`}>
        <div onClick={() => openSelectedBox('Call')} style={{width:'200px',height:'200px',borderRadius:'100%'}} className="box bg-light cursor-pointer d-flex flex-column align-items-center justify-content-center"><i style={{fontSize:'40px'}} className="fa-solid fa-phone"></i><p style={{fontWeight:'700',fontSize:'40px',color:'#48AE9E'}}>Call</p></div>
        <div onClick={() => openSelectedBox('Address')} style={{width:'200px',height:'200px',borderRadius:'100%'}} className="box bg-light cursor-pointer d-flex flex-column align-items-center justify-content-center"><i style={{fontSize:'40px'}} className="fa-solid fa-location-dot"></i><p style={{fontWeight:'700',fontSize:'40px',color:'#48AE9E'}}>Address</p></div>
        <div onClick={() => openSelectedBox('Message')} style={{width:'200px',height:'200px',borderRadius:'100%'}} className="box bg-light cursor-pointer d-flex flex-column align-items-center justify-content-center"><i style={{fontSize:'40px'}} className="fa-solid fa-message"></i><p style={{fontWeight:'700',fontSize:'40px',color:'#48AE9E'}}>Message</p></div>
        
      </div>
      
    </div>

    {selectedBox &&<>
    <div   className={styles.selectedBox}>
     <i onClick={()=> closeSelectedBox() } className={` ${styles.closeBtn} fa-solid fa-square-xmark`}></i>
      {selectedBox == 'Call' ?<>
      <div className="telephones d-flex flex-column align-items-center p-5 ">

      <i style={{fontSize:'80px'}} className="fa-solid fa-phone"></i>
      <div style={{fontSize:'40px', color:'black',fontWeight:'700'}} className="phoneNumber">
        01023698745
      </div>
      
      <div style={{fontSize:'40px', color:'black',fontWeight:'700'}} className="phoneNumber">
        01069874745
      </div>
      
      <div style={{fontSize:'40px', color:'black',fontWeight:'700'}} className="phoneNumber">
        01025898745
      </div>
      
      </div>
      
      </>:''}

       {selectedBox == 'Address' ? <>
       <div className="address d-flex flex-column align-items-center p-3">
       <i style={{fontSize:'80px'}} className="fa-solid fa-location-dot"></i>
       <p className='text-center' style={{fontSize:'30px',textTransform:"capitalize", color:'black',fontWeight:'600'}}>Head office Zahraa El<br></br> Maadi <br></br>
7th sector ، <br></br>
build No: 7/38 </p>
       </div>
       
       </> : ''}   

       {selectedBox == 'Message' ? <>
       
       <div className="message p-3 mt-4">
        <div className="input mb-3 text-start">
          <span  style={{margin:'15px',width:'80px',fontWeight:'700'}}>NAME</span>
          <input style={{borderRadius:'10px',border:'none'}} type="text" />
        </div>
        <div className="input mb-3">
          <span style={{margin:'11px',width:'80px',fontWeight:'700'}}>PHONE</span>
          <input style={{borderRadius:'10px',border:'none'}} type="tel" />
        </div>
        <div className="input mb-3">
          <span style={{margin:'15px',width:'80px',fontWeight:'700'}}>EMAIL</span>
          <input style={{borderRadius:'10px',border:'none'}} type="email" />
        </div>
        <div className="input mb-3 d-flex align-items-center text-start">
          <span style={{margin:'15px',width:'63px',fontWeight:'700'}}>MESSAGE</span>
          <textarea style={{borderRadius:'10px',border:'none'}} name="" id=""></textarea>
        </div>
        <div className="submit text-center">
          <button>submit</button>
        </div>
        
       
       </div>
       
       </>:'' }
    </div>
    </>}
    

    

    </div>
    
  
  </>
}
