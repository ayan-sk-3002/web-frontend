import React from 'react'
import '../Banner/Banner.css'
import banner1 from '../../Components/Assets/Banner/banner-1.jpg'

const Banner = () => {
  return (
    <div className='banner' style={{background:`url(${banner1})`, backgroundPosition: 'left',   backgroundSize: '150%', backgroundRepeat: 'no-repeat'}}>
        <div className="description">
            <h1>AS AN OFFICIAL STOCKIST OF ALL BRANDS, WE OFFER <br />WATCHES FOR MEN & LADIES.</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web.</p>
            <button>VIEW MORE</button>

        </div>
    </div>
  )
}
 
export default Banner