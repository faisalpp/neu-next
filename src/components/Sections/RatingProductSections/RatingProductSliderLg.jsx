'use client'

import React from 'react'
import ProductCard2 from '../../ProductCard2'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const RatingProductSliderLg = ({ stars }) => {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={470}
        totalSlides={6}
        visibleSlides={3}
      >
        <ButtonNext className='absolute xl:top-56 xl:-left-10 lg:top-52 lg:-left-16 left-0 top-48 z-40'><div className='flex bg-black/30 hover:bg-cyan-400 px-2 py-2 rounded-full text-white'><BsArrowLeftShort className='text-lg' /></div></ButtonNext>
        <Slider className='ratingproductslider lg:mx-2' >
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
        <ButtonBack className='absolute xl:top-56 xl:-right-6 lg:top-52 lg:-right-8 top-48 right-0 z-40'><div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl' /></div></ButtonBack>
      </CarouselProvider>
    </>
  )
}

export default RatingProductSliderLg