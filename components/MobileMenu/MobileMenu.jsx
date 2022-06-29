import React from 'react'
import styles from './mobilemenu.module.scss'

const MobileMenu = ({data}) => {
  return (
    <div className={styles.MobileMenu}>
        <ul>
         {data.map((item,index)=>(
        <li key={index + item.title}>{item.title}</li>
         ))}
         <li>account</li>
         <li>search</li>
        </ul>
    </div>
  )
}

export default MobileMenu