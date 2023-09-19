'use client';

import React from 'react'
import ProductCard from '@/components/ProductCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CosmaticCard = ({ customStyle }) => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    draggable: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
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
          slidesToShow: 1.03,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <>
      <div className={`xl:mt-14 maincontainer mt-14 h-auto ` + customStyle}>
        <Slider {...settings} className='pb-5 xl:pb-0'>
          <ProductCard title='Moderate Cosmetic Damage' customStyle="px-2 pb-4 xl:pr-[5px]" codmetics='Moderate' dicount='Massive' stars={3} type={1} discount={1} />
          <ProductCard title='Moderate Cosmetic Damage' customStyle="px-2 pb-4 xl:px-[5px]" codmetics='Minor' dicount='Huge' stars={4} type={2} discount={2} />
          <ProductCard title='Moderate Cosmetic Damage' customStyle="px-2 pb-4 xl:pl-[5px]" codmetics='Very Minor-None' dicount='Great' stars={5} type={3} discount={3} />
        </Slider>
      </div>
    </>
  )
}

export default CosmaticCard