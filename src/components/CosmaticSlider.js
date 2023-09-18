'use client';

import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import ProductCard2 from './ProductCard2';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CosmaticSlider = ({ sliderstyle }) => {

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.08,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const PrevButton = ({ onClick }) => (
    <button onClick={onClick} className='hidden sm:block prev-button absolute top-0 -left-3 md:-left-8 z-40 h-full pointer-events-none'>
      <div className='flex bg-black/30 hover:bg-black cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
        <BsArrowLeftShort className='text-xl' />
      </div>
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button onClick={onClick} className='hidden sm:block next-button absolute top-0 -right-3 md:-right-8 z-40 h-full pointer-events-none'>
      <div className='flex bg-black/30 hover:bg-black cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
        <BsArrowRightShort className='text-xl' />
      </div>
    </button>
  );

  return (
    <>
      <div className='mt-8'>
        <Slider {...settings} prevArrow={<PrevButton />} nextArrow={<NextButton />} className='relative maxmd:pb-5'>
          <ProductCard2 sliderstyle={sliderstyle} stars={4} />
          <ProductCard2 sliderstyle={sliderstyle} stars={5} />
          <ProductCard2 sliderstyle={sliderstyle} stars={4} />
          <ProductCard2 sliderstyle={sliderstyle} stars={5} />
          <ProductCard2 sliderstyle={sliderstyle} stars={4} />
          <ProductCard2 sliderstyle={sliderstyle} stars={5} />
          <ProductCard2 sliderstyle={sliderstyle} stars={4} />
        </Slider>
      </div>
    </>
  )
}

export default CosmaticSlider