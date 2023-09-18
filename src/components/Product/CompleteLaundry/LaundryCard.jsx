import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import ToolTip from '../../ToolTip'
import { Link } from 'react-router-dom'

const LaundryCard = () => {
    return (
        <div className='border grid grid-cols-1 sm:grid-cols-[150px_1fr] md:grid-cols-[240px_1fr] gap-5 border-b14 rounded-xl py-10 px-5'>
            <div className=''>
                <img src="/drayer.webp" className='w-40 h-40 sm:w-full sm:h-full md:w-60 md:h-60 object-contain' alt="" />
            </div>
            <div className='space-y-4'>
                <h3 className='line-clamp-2 text-lg md:text-xl font-semibold leading-6'>White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</h3>
                <div className='flex items-center gap-6' >
                    <span className='font-semibold text-xl text-b3' >$279.00</span>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <strike className="text-b23" >$279.00</strike>
                        <span className='flex bg-b4 text-xs text-b16 px-2 py-1 font-semibold rounded-full' >-27%</span>
                    </div>
                </div>
                <div className='flex items-center gap-5' >
                    <div className='flex items-center gap-1' >
                        <h4 className='lg:text-sm text-xs font-semibold w-max text-b15' >Cosmetic <br /> Rating</h4>
                        <ToolTip color="text-b15/80" />
                    </div>
                    <div className='flex items-center'>
                        <AiFillStar className='text-b7 lg:text-2xl text-xs' /><AiFillStar className='text-b7 lg:text-2xl text-xs' /><AiFillStar className='text-b7 lg:text-2xl text-xs' />
                    </div>
                </div>
                <div className='lg:flex hidden items-center gap-x-14' >
                    <div className='flex font-semibold text-sm text-b15' ><h4>Discount</h4>&nbsp;%</div>
                    <div className='w-full bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-32 h-2' ></span></div>
                </div>
                <Link to="" className='text-white py-3 px-4 flex gap-1 items-center justify-center text-center w-full bg-b7 rounded-lg text-xs font-bold'>
                    Select Item
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default LaundryCard