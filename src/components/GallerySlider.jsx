'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const GallerySlider = ({ page, setPage, totalPages, media, setImg, img }) => {
  useEffect(() => {
    let box = document.getElementById('id6');
    setBox(box);
  }, []);

  const [Box, setBox] = useState();
  const btnprev = () => {
    page > 1 ? setPage(page - 1) : setPage(1);
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft - width;
  }
  const btnnext = () => {
    page < totalPages && setPage(page + 1)
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft + width;
  }

  return (
    <>
      <div className='relative my-8 mx-5' >
        <button onClick={btnprev} className='absolute top-0 -right-5 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl' /></div></button>
        <button onClick={btnnext} className='absolute top-0 -left-5 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowLeftShort className='text-xl' /></div></button>
        <div id="id6" className='flex lg:overflow-x-hidden overflow-x-scroll xl:space-x-[9px] space-x-4 lg:space-x-3 scroll-smooth' >
          {media.length > 0 ? media.map((item, index) => <Image alt={item.url} quality={1} key={index} onClick={() => setImg(item.url)} src={item.url} className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 rounded-2xl ${img === item.imageUrl ? 'border-2 border-white rounded-xl' : 'border-none'}  `} />) : null}
        </div>
      </div>

    </>
  )
}

export default GallerySlider