'use client'

import React from 'react'
import ProductCard2 from '@/components/ProductCard2'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const RatingProductSliderXl = ({ stars }) => {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={480}
        totalSlides={6}
        visibleSlides={4}
      >
        <ButtonNext className='absolute xl:top-56 xl:-left-16 lg:top-52 lg:-left-10 z-40'><div className='flex bg-black/30 hover:bg-cyan-400 px-2 py-2 rounded-full text-white'><BsArrowLeftShort className='text-lg' /></div></ButtonNext>
        <Slider className='ratingproductslider pb-44 coxl:pb-32 2xl:pb-20 3xl:pb-0' >
          <Slide index={0}>
            <ProductCard2 stars={stars} />
          </Slide>
          <Slide index={1}>
            <ProductCard2 stars={stars} />
          </Slide>
          <Slide index={2}>
            <ProductCard2 stars={stars} />
          </Slide>
          <Slide index={3}>
            <ProductCard2 stars={stars} />
          </Slide>
          <Slide index={4}>
            <ProductCard2 stars={stars} />
          </Slide>
          <Slide index={5}>
            <ProductCard2 stars={stars} />
          </Slide>
        </Slider>
        <ButtonBack className='absolute xl:top-56 xl:-right-14 lg:top-52 lg:-right-10 right-10 z-40'><div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl' /></div></ButtonBack>
      </CarouselProvider>
    </>
  )
}

export default RatingProductSliderXl