'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getSingleVideoMedia } from '@/api/frontEnd'
import IframeLoader from '@/components/Loader/IframeLoader'

const Iframe = lazy(() => import('@/components/Reusable/Ifram'));

const HeroSection = () => {

  const [heroVideo, setHeroVideo] = useState([])

  useEffect(() => {
    const GetSingleVideoMedia = async () => {
      const data = { section: 'home-page-hero-section' }
      const res = await getSingleVideoMedia(data);
      // console.log(res)
      if (res.status === 200) {
        setHeroVideo(res.data.media)
      }
    }
    GetSingleVideoMedia()
  }, [])

  return (
    <>
      <div className='bg-b5 py-10 lg:py-16 xl:py-20'>
        <div className='md:grid gap-10 flex flex-col grid-cols-2 items-center maincontainer' >
          <div className='flex flex-col space-y-10' >
            <h1 className='2xl:text-6xl xl:text-5xl lg:text-4xl maxxl:leading-tight text-40px lg:text-start text-center font-extrabold' >Austin&apos;s Best Deals For Scratch & Dent Appliances</h1>
            <div className='flex lg:justify-start justify-center' ><a href="/" className='flex text-white rounded-md space-x-2 font-semibold items-center justify-center bg-b7 w-full md:w-56 px-3 h-[56px] text-sm' ><AiOutlineShoppingCart className='text-xl' /><span>Discover The Savings</span></a></div>
          </div>
          <div className='flex justify-end' >
            <div className='relative w-full' >
              <img src="/45.webp" alt="45.webp" className='absolute xl:-top-14 xl:-left-10 lg:-top-10 lg:-left-10 2xl:w-[152px] 2xl:h-[152px] xl:w-[135px] xl:h-[135] lg:w-[125px] lg:h-[125px] h-20 -top-8 -left-5' />
              {/* <IframeLoader/> */}
              <Suspense fallback={<IframeLoader />} >
                {heroVideo.length > 0 && heroVideo[0].type === 'iframe' ? <Iframe style="2xl:h-[504px] lg:h-96 lg:w-full h-52 w-full md:w-80 rounded-2xl" src={heroVideo[0].url} title="Introducing our Next Generation of High End Kitchen Appliances | Miele" /> : null}
              </Suspense>
              {heroVideo.length > 0 && heroVideo[0].type !== 'iframe' ? <video controls className='2xl:h-[504px] object-cover lg:h-96 lg:w-full h-52 w-full md:w-80 rounded-2xl ' src={heroVideo[0].url} /> : null}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HeroSection