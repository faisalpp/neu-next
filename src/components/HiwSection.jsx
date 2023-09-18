'use client';

import React from 'react'
import HiwCad from '@/components/HiwCad'
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const HiwSection = ({ learnmore }) => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    // draggable: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 425,
        settings: {
          draggable: true,
          slidesToShow: 1.04,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <div className='flex flex-col items-center bg-b8 space-y-10 py-10 lg:py-14 xl:py-20 w-full' >
      <h4 className='font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-5 mb-3 text-center' >How it Works</h4>
      <div className='maincontainer'>
        <Slider {...settings} className='howitworkslider'>
          <HiwCad icon="/hiw1.webp" title="Cosmetic Rating" txt=" We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!" />
          <HiwCad icon="/hiw2.webp" title="Tested" txt='Our Open Box and Scratch and Dent appliances are thoroughly tested and must pass our 100 point inspection. This ensures every appliance performs 100% to manufacturer specifications, even if they are "Scratch and Dent."' />
          <HiwCad icon="/hiw3.webp" title="Shop With Confidence" txt='Every scratch and dent appliance we offer receives their own 360° photos and video. This allows you to shop from home while seeing exactly where the cosmetic blemishes are (if any!)' />
          <HiwCad icon="/hiw4.webp" title="Fast Local Delivery&Installation" txt='Our Austin local appliance delivery Pros are fast and efficient. We offer delivery and installation services to Austin, Tx and surrounding areas.' />
          <HiwCad icon="/hiw5.webp" title="Neu Shield 1 Year Warranty" txt='Our customer preferred Neu Shield 1 year warranty was designed by the industries best services. Including onsite repair service, replacement options and storing customer info so you never have to save a receipt!' popup={learnmore} />
          <HiwCad icon="/hiw6.webp" title="Free Curbside Returns" txt="Shop with confidence. Upon delivery, if you decide the appliance isn't for you, we will return it free of charge!" />
        </Slider>
      </div>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 2xl:gap-10 3xl:gap-x-[60px] 3xl:gap-y-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
        <HiwCad icon="/hiw1.webp" title="Cosmetic Rating" txt=" We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!" />
        <HiwCad icon="/hiw2.webp" title="Tested" txt='Our Open Box and Scratch and Dent appliances are thoroughly tested and must pass our 100 point inspection. This ensures every appliance performs 100% to manufacturer specifications, even if they are "Scratch and Dent."' />
        <HiwCad icon="/hiw3.webp" title="Shop With Confidence" txt='Every scratch and dent appliance we offer receives their own 360° photos and video. This allows you to shop from home while seeing exactly where the cosmetic blemishes are (if any!)' />
        <HiwCad icon="/hiw4.webp" title="Fast Local Delivery&Installation" txt='Our Austin local appliance delivery Pros are fast and efficient. We offer delivery and installation services to Austin, Tx and surrounding areas.' />
        <HiwCad icon="/hiw5.webp" title="Neu Shield 1 Year Warranty" txt='Our customer preferred Neu Shield 1 year warranty was designed by the industries best services. Including onsite repair service, replacement options and storing customer info so you never have to save a receipt!' link="/" />
        <HiwCad icon="/hiw6.webp" title="Free Curbside Returns" txt="Shop with confidence. Upon delivery, if you decide the appliance isn't for you, we will return it free of charge!" />
      </div> */}
      {/* <div className='flex xl:flex-row lg:flex-row md:flex-col lg:items-stretch md:items-center flex-col 2xl:space-x-10 xl:space-x-10 lg:space-x-7 px-[8.33%] justify-evenly pb-10 w-full' >
    </div>  */}
    </div>
  )
}

export default HiwSection