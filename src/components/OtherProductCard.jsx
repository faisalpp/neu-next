import React from 'react'
import { AiFillStar, AiOutlineQuestionCircle } from 'react-icons/ai'
import { IoBagCheckOutline } from 'react-icons/io5'
import ToolTip from './ToolTip'
import { Link } from 'react-router-dom'

const OtherProductCard = ({ rating }) => {
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar className='text-base' /> // Render the star icon component for each iteration
    ));

    return starIcons; // Render the array of star icons
  };
  return (
    <div className={`flex flex-col rounded-lg px-2 py-4 bg-white w-full ${rating === 5 ? 'border-2 border-b3 shadow-[0px_4px_30px_rgba(0,0,0,0.25)]' : 'border border-gray-300'}`} >
      <Link to="">
        <div className='flex items-center justify-between' >
          <div className='flex items-center gap-1'>
            <h6 className='text-[10px] w-max text-gray-500 font-semibold' >Cosmetic&nbsp;Rating</h6><ToolTip />
          </div>
          <div>
            <span className='flex items-center w-fit bg-b10 text-white text-[8px] px-3 rounded-xl py-1' ><IoBagCheckOutline className='text-[10px] mr-1' />In Stock</span>
          </div>
        </div>
        <div className={`flex items-center text-b7 bg-white rounded-xl text-xs w-fit px-2 py-1 ${rating === 5 ? 'bg-gray-300' : ''}`} >
          <StarIconPrinter numberOfTimes={rating} />
        </div>
        <div className='flex w-full justify-center my-3 items-center' >
          <img src="/p1.webp" className='w-28' alt='product' />
        </div>
        <div className='flex flex-col space-y-3' >
          <div className='flex items-center' ><h6 className='text-sm font-semibold text-b3' >$279.00</h6><div className='flex justify-end w-full text-xs text-gray-500' ><strike>$379.00</strike></div></div>
          <div className='flex items-center' ><h6 className='text-xs font-semibold text-gray-500' >Discount&nbsp;%</h6><div className='flex justify-end w-full' ><span className='bg-b4 rounded-2xl font-semibold lg:px-3 px-1 py-1 lg:text-[8px] text-[9px]' >-27%</span></div></div>
          <div className='flex w-full justify-center' ><div className='w-10/12 bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-10 h-2' ></span></div></div>
        </div>
      </Link>
    </div>
  )
}

export default OtherProductCard