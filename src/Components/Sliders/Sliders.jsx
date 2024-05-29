import React from 'react'
import '../Sliders/Sliders.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { all_product } from '../../data';
const Sliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay:true,
        slidesToScroll: 2,
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
              slidesToShow: 1, 
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
    <div className='slider'>
       <Slider {...settings}>
      {
        all_product.map((e)=>{
            return <div className="box2" >
             <div className="box2" style={{background:`url(${e.image})`, backgroundPosition: 'center',   backgroundSize: 'cover', backgroundRepeat: 'no-repeat',margin:'20px'}}>
             <div className="box" >
             
            </div>
             </div>
            </div>
        })
      }
       </Slider>
      
    </div>
  )
}

export default Sliders