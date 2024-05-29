import React from 'react'
import Slider from 'react-slick'
import '../BrandList/BrandList.css'
import b1 from '../Assets/brand1.png'
import b2 from '../Assets/brand2.png'
import b3 from '../Assets/brand3.png'
import b4 from '../Assets/brand4.png'
import b5 from '../Assets/brand5.png'
import b6 from '../Assets/brand6.png'
import b7 from '../Assets/brand7.png'
const BrandList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='brand-list'>
        <Slider className='slider flex-box' {...settings}>
          <div className="brand">
            <img src={b1} alt="" />
          </div>
          <div className="brand">
            <img src={b2} alt="" />
          </div>
          <div className="brand">
            <img src={b3} alt="" />
          </div>
          <div className="brand">
            <img src={b4} alt="" />
          </div>
          <div className="brand">
            <img src={b5} alt="" />
          </div>
          <div className="brand">
            <img src={b6} alt="" />
          </div>
          <div className="brand">
            <img src={b7} alt="" />
          </div>

        </Slider>
    </div>
  )
}

export default BrandList