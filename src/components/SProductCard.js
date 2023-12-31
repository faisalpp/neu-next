import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SProductCard = ({ link, title, image }) => {
  return (
    <Link href={link} ><div className='maxmd:max-w-[330px] maxmd:mx-auto'>
      <div className='flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-200 bg-white p-10' >
        <Image width={200} height={200} src={image} alt={title} quality={1} className='h-56 w-full' />
      </div>
      <h4 className=' font-bold xl:text-xl text-lg mt-2' >{title}</h4>
    </div></Link>
  )
}

export default SProductCard