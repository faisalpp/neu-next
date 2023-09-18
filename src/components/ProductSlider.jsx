'use client'

import React from 'react'
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Image from 'next/image';


const ProductSlider = ({ image, products }) => {
  // console.log(import.meta.env.REACT_APP_INTERNAL_PATH)
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const PrevButton = ({ onClick }) => (
    <button onClick={onClick} className='absolute top-0 bottom-0 flex items-center xl:left-10 lg:left-5 left-10 z-40 pointer-events-none'>
      <div className='flex items-center justify-center bg-black/30 hover:bg-cyan-400 w-8 h-8 rounded-full text-white pointer-events-auto'>
        <BsArrowLeftShort className='text-2xl' />
      </div>
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button onClick={onClick} className='absolute top-0 bottom-0 flex items-center xl:right-10 lg:right-5 right-10 z-40 pointer-events-none'>
      <div className='flex items-center justify-center bg-black/30 hover:bg-cyan-400 w-8 h-8 rounded-full text-white pointer-events-auto'>
        <BsArrowRightShort className='text-2xl' />
      </div>
    </button>
  );
  return (
    <>
      {products ? <Slider {...settings} prevArrow={<PrevButton />} nextArrow={<NextButton />} className='relative'>
        {products.map((product, index) => (
          <div key={index}>
            <div className='flex w-full justify-center' ><Image src={product.image} className='xl:w-1/2 lg:w-44 w-40 h-full mx-auto' alt='refrigrator' /></div>
          </div>
        ))}
      </Slider > :
        <Slider {...settings} prevArrow={<PrevButton />} nextArrow={<NextButton />} className='relative'>
          <div className='flex w-full justify-center' ><Image src={image} className='xl:w-1/2 lg:w-44 w-40 h-full mx-auto' alt='refrigrator' /></div>
          <div className='flex w-full justify-center' ><Image src={image} className='xl:w-1/2 lg:w-44 w-40 h-full mx-auto' alt='refrigrator' /></div>
          <div className='flex w-full justify-center' ><Image src={image} className='xl:w-1/2 lg:w-44 w-40 h-full mx-auto' alt='refrigrator' /></div>
        </Slider >}
    </>
  )
}

export default ProductSlider