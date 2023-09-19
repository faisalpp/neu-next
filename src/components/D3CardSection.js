'use client';

import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import D3Cards from '@/components/Carousel/D3Cards';
import { v4 as uuidv4 } from 'uuid'
import PproductCard from '@/components/PproductCard';
import Image from 'next/image';
import Link from 'next/link';

const D3CardSection = () => {

  const ItemLists = [
    { icon: 'starss', description: 'We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!' },
    { icon: 'pig', description: 'We provide our Austin neighbors the best savings on  floor models , returns and scratch and dent appliances.' },
    { icon: 'circle', description: 'Every appliance we sell is tested with our 100-point inspection process. We ensure every appliance functions the way it is supposed to and provide you the best discounts possible.' },
    { icon: 'pin', description: 'Discover why our Austin neighbors trust us to provide great appliances at better savings. Lets find the perfect appliance for your needs at an unbeatable price by clicking below.' },
  ]

  let cards = [
    {
      key: uuidv4(),
      content: (
        <PproductCard type={1} stars={3} discount={1} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <PproductCard type={2} stars={2} discount={2} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <PproductCard type={3} stars={5} discount={3} />
      )
    },

  ];

  return (

    <div className='grid lg:grid-cols-2 gap-14 2xl:gap-20 3xl:gap-32 maincontainer py-14 lg:py-20'>
      <div className='flex flex-col space-y-5 w-full' >
        {ItemLists.map((item, index) => (
          <div key={index} className='flex space-x-2' ><Image width={200} height={200} quality={1} src={`/${item.icon}.webp`} alt={item.icon} className='h-5 w-5 object-contain' /><p>{item.description}</p></div>
        ))}
        <div className='flex lg:justify-start' ><Link href='' className='flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='text-sm' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></Link></div>
      </div>

      <div className='flex w-full lg:mt-0 mt-14 parent-container' >
        <D3Cards
          cards={cards}
          class="h-[400px] w-[95%] sm:w-[380px] xl:w-[70%] mx-auto my-0"
          offset={1}
          showArrows={false}
        />
      </div>
    </div>
  )
}

export default D3CardSection