import React from 'react'
import { AiFillStar, AiOutlineQuestionCircle } from 'react-icons/ai';
import StackableSvg from '../svgs/StackableSvg';
import SteamSvg from '../svgs/SteamSvg';
import GasSvg from '../svgs/GasSvg';


const WasherCard = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full lg:w-[380px] xl:w-[450px]' >
        <h4 className='text-xl font-semibold' >Washer</h4>
        <div className='flex flex-col items-center py-10 bg-white border-[1px] border-b3 rounded-xl w-full' >
          <img src='/p1.webp' className='w-52' alt='' />
          <div className='flex flex-col space-y-5 px-10 w-full mt-5' >
            <p className='text-sm font-semibold' >White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</p>
            <div className='flex items-center space-x-5' ><h4 className='font-bold lg:text-xl text-xl text-b3 ' >$279.00</h4><strike className="text-sm text-black/60" >$279.00</strike><span className='flex bg-b4 lg:text-[10px] text-[10px] text-black px-4 py-1 font-semibold rounded-full' >-27%</span></div>
            <div className='flex items-center lg:space-x-5 space-x-5 lg:mt-4 mt-2' ><div className='flex items-center gap-1' ><h4 className='lg:text-sm text-xs font-semibold w-max text-b15' >Cosmetic Rating</h4><AiOutlineQuestionCircle /></div><div className='flex mt-2 items-center' ><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /></div></div>
            <div className='flex items-center lg:space-x-10 space-x-5 lg:mt-4 mt-2' ><h4 className='lg:text-sm text-xs font-semibold w-max text-b15' >Appliance Brand</h4><h4 className='lg:text-sm text-xs font-medium w-max text-black' >Whirlpool</h4></div>
            <div className='lg:flex hidden items-center space-x-14 mt-2' >
              <div className='flex font-semibold text-sm text-b15' ><h4>Discount</h4>&nbsp;%</div>
              <div className='w-52 bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-32 h-2' ></span></div>
            </div>
            <ul className='flex flex-col mt-5 space-y-2 text-sm font-normal' >
              <li>. Lorem ipsum dolor alter miler amigos</li>
              <li>. Lorem ipsum dolor alter miler amigos</li>
              <li>. Lorem ipsum dolor alter miler amigos</li>
              <li>. Lorem ipsum dolor alter miler amigos</li>
            </ul>
            <div className='flex flex-col' >
              <h5 className='text-sm font-semibold' >Dryer Options</h5>
              <div className='flex flex-wrap gap-2 mt-2' >
                <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><StackableSvg /><h5 className='text-xs font-medium' >STACKABLE</h5></div>
                <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><SteamSvg /><h5 className='text-xs font-medium' >STEAM</h5></div>
                <div className='flex items-center space-x-2 border-[1px] border-gray-300 w-fit rounded-lg px-3 py-2' ><GasSvg /><h5 className='text-xs font-medium' >GAS</h5></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WasherCard