import React from 'react'

const MobileMenu = ({data}) => {
  return (
    <div className='MobileMenu'>
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