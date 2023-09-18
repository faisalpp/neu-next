import React, { useEffect } from 'react'
import Swiper from 'swiper'

import "swiper/swiper.css"

const D3Slider = () => {

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);


  return (
    <>
      <div className="swiper-container h-[300px] w-52">
        <div className="swiper-wrapper ">
          <div className="swiper-slide">
            <img src="p1.webp" alt="Card 1" />
          </div>
          <div className="swiper-slide">
            <img src="p1.webp" alt="Card 1" />
          </div>
          <div className="swiper-slide">
            <img src="p1.webp" alt="Card 2" />
          </div>
          {/* Add more swiper-slide elements for additional cards */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  )
}

export default D3Slider