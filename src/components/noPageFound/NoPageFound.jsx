import React from 'react'
import './NoPageFound.css'
import image from '../../assets/images/404_not_found.png'
const NoPageFound = () => {
  return (
    <div className='wrapper'>
      <img src={image} alt="404_image" />
      <h2>Page Not Found</h2>
      <p>We can't seem to find the page you are looking for.</p>
    </div>
  )
}

export default NoPageFound