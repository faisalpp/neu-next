'use client';

import React from 'react';
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import ReviewExCard from '@/components/ReviewExCard';
import Image from 'next/image';

const ReviewEXSlider = ({ clientreviews, icon, dots }) => {
  const settings = {
    dots: dots,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1.08,
        },
      },
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 2,
        },
      }
    ],
  };

  const PrevButton = ({ onClick }) => (
    <button onClick={onClick} className='hidden sm:block prev-button absolute top-0 -left-3 z-40 h-full pointer-events-none'>
      <div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
        <BsArrowLeftShort className='text-xl' />
      </div>
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button onClick={onClick} className='hidden sm:block next-button absolute top-0 -right-3 z-40 h-full pointer-events-none'>
      <div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
        <BsArrowRightShort className='text-xl' />
      </div>
    </button>
  );
  // console.log(color)
  return (
    <div className='reviewslider-wrapper'>
      {clientreviews.length > 0 ? <Slider {...settings} prevArrow={<PrevButton />} nextArrow={<NextButton />} className='relative maxmd:mb-10'>
        {clientreviews.map((clientreview, index) => (
          <div key={index}>
            <ReviewExCard description={clientreview.content} author={clientreview.author} review={clientreview.rating} />
          </div>
        ))}
      </Slider> : <div className='flex items-center justify-center w-full' ><Image alt='loader-bg' src="/loader-bg.gif" className="w-10 h-10 " /></div>}
    </div >
  );
};

export default ReviewEXSlider;
