'use client'

import React, { useEffect, useState } from 'react'
import SProductCard from '@/components/SProductCard'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
import { GetAppliances } from '@/api/frontEnd'
import Image from 'next/image'

const ApplianceSection = () => {

  const [applianceTypes, setApplianceTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAppliances = async () => {
      const res = await GetAppliances({ limit: 5 });
      if (res.status === 200) {
        setApplianceTypes(res.data.categories);
        setLoading(false)
      } else {
        console.log(res)
      }
    }
    getAppliances();
  }, [])

  return (
    <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 bg-b8' >
      <h4 className='xl:text-4xl text-xl font-bold text-center mb-4' >Shop By Appliance Type</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 2xl:gap-x-10 2xl:gap-y-14 mt-10 maincontainer' >
        {applianceTypes && applianceTypes.map((item, index) => <SProductCard key={index} title={item.title} image={item.image} link={`/appliances/${item.slug}`} />)}
        {/* All Appliances */}
        <Link href='/applianceTypes' >
          <div className='maxmd:max-w-[330px] maxmd:mx-auto'>
            <div className='flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-200 bg-white p-10' >
              <Image src='/all.webp' alt='all' quality={1} className='h-56' />
            </div>
            <h4 className=' font-bold xl:text-xl text-lg mt-2' >All Appliances</h4>
          </div>
        </Link>
      </div>
      <div className='flex justify-center mt-16' ><Link to='/applianceTypes' className='flex items-center border-[1px] border-b3 w-fit px-4 py-3 rounded-md text-b3 font-semibold' ><span className='xl:text-[16px] lg:text-sm' >View All Categories</span><BsArrowRightShort className='text-2xl' /></Link></div>
    </div>
  )
}

export default ApplianceSection