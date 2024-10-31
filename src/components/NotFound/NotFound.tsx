import React from 'react'
import styles from './NotFound.module.css'

export default function NotFound() {
  return <>
      <div style={{paddingTop:'108px'}} className={`${styles.notFound} d-flex align-items-center justify-content-center`}>
        <img src="/public/Images/notFound.jpg" alt="" />
      </div>

  </>
}
