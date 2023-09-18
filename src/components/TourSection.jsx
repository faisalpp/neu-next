'use client'

import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { getSingleVideoMedia } from '@/api/frontEnd'
import IframeLoader from '@/components/Loader/IframeLoader'

const Iframe = lazy(() => import('@/components/Reusable/Ifram'))

const TourSection = () => {

  const [loopVideo, setLoopVideo] = useState([])

  useEffect(() => {
    const GetSingleVideoMedia = async () => {
      const data = { section: 'home-page-tour-section' }
      const res = await getSingleVideoMedia(data);
      console.log(res)
      if (res.status === 200) {
        setLoopVideo(res.data.media[0])
      }
    }
    GetSingleVideoMedia()
  }, []);

  return (
    <div id="tour">
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-7 maincontainer py-10 lg:py-14 xl:py-24' >
        {/* <IframeLoader/> */}
        <Suspense fallback={<IframeLoader />} >
          {loopVideo && loopVideo.type === 'iframe' ? <Iframe style="w-full h-72 lg:h-96 xl:h-full rounded-[20px]" src={loopVideo.url} title={loopVideo.url} /> : null}
        </Suspense>
        {loopVideo && loopVideo.type !== 'iframe' ? <video controls src={loopVideo.url} className='w-full object-cover h-72 lg:h-96 xl:h-full rounded-[20px]' /> : null}
        <div className='bg-white rounded-[20px] shadow-xl 2xl:h-[640px] xl:h-[540px] py-5 h-full xl:px-[80px] lg:px-10 px-5 flex flex-col gap-y-5 justify-center lg:mt-0 mt-5' >
          <h4 className='xl:text-3xl lg:text-2xl text-xl font-bold' >Tour Our Outlet Store</h4>
          <p style={{ lineHeight: '24px' }} className='xl:text-[16px] lg:text-sm text-sm' >Neu Appliance&apos;s retail store is located smack dab in the middle of Austin, Tx. If you live nearby come check us out and meet the team or shop from the comfort of your own home online.</p>
          <div className='flex lg:justify-start justify-center' ><a href='' className='flex cursor-pointer items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='xl:text-[1rem] lg:text-sm text-[10px] ' >learn more about our Appliance Outlet Store</span><BsArrowRightShort className='text-2xl' /></a></div>
        </div>
      </div>
    </div>
  )
}

export default TourSection