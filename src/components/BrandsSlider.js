'use client'

import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const BrandsSlider = () => {
   const BrandSlider = ['/amana.webp', '/maytag.webp', '/frigdaire.webp', '/haier.webp', '/hisense.webp', '/kenmore.webp', '/lg.webp', '/samsung.webp', '/whirlpool.webp', '/midea.webp']
   return (
      <>
         {/* Brands Logo Slider Auto Start */}
         <div className='bg-white py-5' >
            <h4 className='text-center text-sm' >BRANDS WE SELL</h4>
            <div className='relative mt-2' >
               <Marquee velocity={12}>
                  {BrandSlider.map((item, index) => (
                     <Image width={200} height={200} key={index} quality={1} alt={item} src={item} />
                  ))}
               </Marquee>
            </div>
         </div>
         {/* Brands Logo Slider Auto End */}
      </>
   )
}

export default BrandsSlider