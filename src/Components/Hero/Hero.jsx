import React from 'react'
import '../Hero/Hero.css'
import Slider from "react-slick";
import { all_product } from '../../data';
import { Link } from 'react-router-dom';

const Hero = () => {
  
  return (
    <div className='hero flex-box'>
        <h1>NEW WATCHES <br />2024</h1>
        <Link to={"/shop"}><button>SHOP NOW</button></Link>
    </div>
  )
}

export default Hero