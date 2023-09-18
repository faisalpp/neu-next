import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLocalPhone } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';

const PartnerCard = ({ image, title, description, imagestyle }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:flex gap-10 xl:gap-20'>
            <div className={`repairImages ${imagestyle}`}>
                <img src={`appliance/` + image} className='h-auto 2xl:h-full' alt={title} />
            </div>
            <div className='order-2 lg:order-none'>
                <div className='inline-flex justify-start'>
                    <div className='border-[1.38569px] border-b3 px-4 py-2 rounded-full'>
                        <img src="neulogo.webp" alt="neulogo" className='h-[16.536px] w-[92.006px]' />
                        <span className='block font-medium uppercase text-[5.09px]'>RECOMMENDS</span>
                    </div>
                </div>
                <h3 className='text-b18 text-2xl xl:text-3xl 2xl:text-[32px] font-extrabold mb-4 mt-2'>{title}</h3>
                <p className='text-b18 leading-8 mb-9'>
                    {description}
                </p>
                <div className='flex maxsm:flex-col gap-2'>
                    <Link to="" className='bg-b3 text-white rounded-lg px-4 py-3 flex justify-center gap-1 items-center text-xs font-medium'><MdOutlineLocalPhone className='text-sm' /><span>(512) 363-5327</span></Link>
                    <Link to="" className='border border-b3 rounded-lg px-4 py-3 text-b3 flex justify-center gap-1 items-center text-xs font-medium'><span>Learn More</span><AiOutlineArrowRight className='text-sm' /></Link>
                </div>
            </div>
        </div>
    )
}

export default PartnerCard