import React from 'react'
import styles from './AboutUs.module.css'
export default function AboutUs() {
  return <>
  <div  className="about-us pt-[108px]">
    <h3 className='ps-5 text-[50px] text-[#48AE9E] font-bold pt-4 text-center text-md-start' >About Us</h3>
    <div className={styles.secLandPicContent}>
      <div className={styles.firstContent}>
      We are CI Group (Comprehensive International Group) with over 18 years of experience in general contracting and construction.

      </div>
      <p className={`${styles.largePg} font-medium text-2xl px-10 capitalize`} >The General Manager of (CI) Group, Engineer Islam Adel graduated from Higher Technological Institute in 2002. He established this company in 2004 after careful study and with great ambition and<br></br> determination.<br></br>
Since 2004, our company is one of the largest companies in Egypt specialized in the design and <br></br> implementation of all general contracting works, as well as the supply and installation of all<br></br> requirements for villas, apartments, and private offices.<br></br>
CI Group is much more than a typical supplying or designing company. Our experts elevate the <br></br> experience of creation and implementation to higher levels that leave a perfect impression on all <br></br> visitors to your place.<br></br>
The planning and design must reflect attention to the details that will help create a sense of trust and<br></br> comfort.
</p>

    </div>
  </div>
  
  
  <div className="our-services">
    <div className="grid grid-cols-1 md:grid-cols-2">
      
      <div className="p-5">
        <h3 className='text-center text-md-start font-black text-[50px]'>Services</h3>
        <p className='font-semibold capitalize text-[24px]'  >Many services that you need during the construction and renovation periods like:
A general contracting, including Plumping, Electricity, Partitions, Ceilings, Painting, Flooring, Gypsum Board, Doors, Windows, Lighting, Air conditioning, Decoration Accessory, Furniture, kitchens, dressing rooms...etc.
All work is done under the supervision of our architects to ensure we stick to quality and safety standards.</p>
      </div>
      <div className=" p-5">
        <h3 className='text-center text-md-start font-black text-[50px]'>Why Do You Need Us?

</h3>
        <p className='font-semibold capitalize text-[24px]'>You can relax in the knowledge that your project is being managed by a team of experts who will plan out the space efficiently with meticulous attention to detail and personal service.
        We understand the requirements of our customers and aim to make your home design reflects the sense of elegance and quality of execution.</p>
      </div>
    </div>
  </div>
  
 

  </>
}
