import Image from 'next/image'
import React from 'react'

const HomeImagesSection = () => {
  return (
    <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col w-full' >
      <div className='relative xl:w-1/2 w-full' ><div className='absolute xl:left-8 lg:left-8 top-20 w-full' ><span className='flex justify-center w-full' ><Image width={200} height={200} quality={1} className='xl:w[593px] xl:h-[90px] lg:w-9/12 w-10/12' alt='ht1' src="/ht1.webp" /></span></div><Image width={200} className='h-auto max-h-full w-full' height={200} quality={1} src="/h1.webp" alt='h1' /></div>
      <div className='relative xl:w-1/2 w-full' ><div className='absolute top-20 w-full' ><span className='flex justify-center w-full' ><Image width={200} height={200} quality={1} className='xl:w[593px] xl:h-[90px] lg:w-9/12 w-10/12' src="/ht2.webp" alt='ht2' /></span></div><Image width={200} height={200} quality={1} className='h-auto max-h-full w-full' src="/h2.webp" alt='h2' /></div>
    </div>
  )
}

export default HomeImagesSection