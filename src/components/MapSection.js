'use client'

import React from 'react'
import DeliveryMap from '@/components/Map/DeliveryMap'
import Image from 'next/image'

const MapSection = () => {

  return (
    <>
      <h4 className='font-bold text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-10 lg:mt-14 xl:mt-20' >Neu Local Delivery Area</h4>
      <div className='relative py-10 lg:py-14 xl:py-20 h-full maincontainer' >
        <Image alt='free' quality={1} src="/free.webp" className='absolute z-40 xl:top-0 xl:w-52 xl:-right-10 lg:w-36 w-20 lg:top-5 top-10 right-0 lg:-right-8' />

        {/* Map Section End */}
        <DeliveryMap customStyle="flex flex-col lg:grid grid-cols-3 3xl:grid-cols-4 items-center [&>#map]:col-span-2 [&>#map]:3xl:col-span-3" />

        {/* <div className='bg-red-500 w-11/12 h-[490px] rounded-2xl' ></div> */}
      </div>
    </>
  )
}

export default MapSection