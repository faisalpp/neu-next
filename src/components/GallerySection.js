'use client'

import React, { useState, useEffect } from 'react'
import GallerySlider from '@/components/GallerySlider'
import { BsArrowRightShort } from 'react-icons/bs'
import { getGalleryImages } from '@/api/frontEnd'
import Link from 'next/link'

const GallerySection = () => {
  const [media, setMedia] = useState([]);
  const [img, setImg] = useState('');

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)

  const GetLoopMedia = async () => {
    const res = await getGalleryImages({ page: page, limit: limit });
    console.log(res)
    if (res.status === 200) {
      setMedia(prev => [...prev, ...res.data.gallery])
      setImg(res.data.gallery[0].url)
      setTotalPages(Math.ceil(res.data.totalCount / limit))
      setLoading(false)
      // console.log(res.data.totalCount)
    } else {
      setLoading(false)
      setMedia([])
    }
  }

  useEffect(() => {
    GetLoopMedia()
  }, [page])


  return (
    <div className='bg-b3 '>
      <div className='flex flex-col py-10 lg:py-12 maincontainer' >
        <div className=' lg:mt-10 xl:mt-10 mt-5' >
          {loading ? <div className='flex justify-center items-center bg-black/10 xl:h-[565px] lg:h-[400px] h-52 w-full' ><img src="/loader-bg.gif" /></div> : <img src={img} className='xl:h-[565px] lg:h-[400px] h-52 w-full rounded-3xl' />}
          <div>
            <GallerySlider page={page} setPage={setPage} totalPages={totalPages} media={media} setImg={setImg} img={img} />
          </div>
        </div>
        <div className='flex justify-center py-5' ><Link href='' className='flex items-center border-[1px] border-white w-fit px-4 xl:py-2 py-1 rounded-md font-semibold text-white' ><span className='text-sm xl:text-[16px]' >Shop Now</span><BsArrowRightShort className='text-2xl xl:text-3xl' /></Link></div>
      </div>
    </div>
  )
}

export default GallerySection