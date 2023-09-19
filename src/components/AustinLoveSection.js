import Image from 'next/image'
import React from 'react'

const AustinLoveSection = () => {
  return (
    <div className='relative' >
      <div className='flex items-center justify-center py-24 xl:py-[124px] h-full w-full text-white xl:text-5xl lg:text-4xl text-lg font-bold' ><p className='lg:w-7/12 text-center mx-auto leading-tight'>Austin Loves Our Star Rating System Here&apos;s Why</p></div>
      <Image width={200} height={200} quality={1} src="/austin_love.webp" alt='austin_love' className='absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full' />
    </div>
  )
}

export default AustinLoveSection