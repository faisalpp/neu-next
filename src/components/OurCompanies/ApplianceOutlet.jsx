import React from 'react'
import { Link } from 'react-router-dom'
import ShieldSvg from '../../svgs/ShieldSvg'
import ScratchSvg from '../../svgs/ScratchSvg'
import BoxSvg from '../../svgs/BoxSvg'
import RoundedTick from '../../svgs/RoundedTick'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiPlayCircle } from 'react-icons/bi'

const ApplianceParts = () => {
    return (
        <div className='bg-[#F2F9FC] px-3 maxcosm:py-5 xs:p-10 2xl:p-7 3xl:p-10 rounded-3xl flex flex-col gap-6'>
            <Link to="/">
                <img src="/nueappliancesoutlet.webp" alt="nueappliancesoutlet" className='h-16' />
            </Link>
            <div className='flex flex-col gap-3 text-b18'>
                <h3 className='font-bold text-2xl'>Neu Appliance Outlet</h3>
                <p className='leading-6'>
                    Appliances can be expensive and the need to replace an appliance seems to always happen at an inconvenient time. Our website's live inventory provides our customers with reliable up to date - remote access to all of our discount appliance inventory in real time.
                </p>
            </div>
            <div className='text-b18 flex flex-col gap-3'>
                <p className='font-bold'>
                    Neu Appliance Outlet provides the solutions you have been looking for:
                </p>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='py-4 px-0 sm:px-4 lg:p-2 bg-[#F7FBFD] flex flex-col items-center gap-2 rounded-lg'>
                        <ShieldSvg className="w-10 h-10 mx-auto" />
                        <p className='text-b18 font-bold text-[10px] lg:text-xs text-center'>
                            Certified Refurbished Appliances
                        </p>
                    </div>
                    <div className='py-4 px-0 sm:px-4 lg:p-2 bg-[#F7FBFD] flex flex-col items-center gap-2 rounded-lg'>
                        <ScratchSvg className="w-10 h-10 mx-auto" />
                        <p className='text-b18 font-bold text-[10px] lg:text-xs text-center'>
                            Scratch & Dent Appliances
                        </p>
                    </div>
                    <div className='py-4 px-0 sm:px-4 lg:p-2 bg-[#F7FBFD] flex flex-col items-center gap-2 rounded-lg'>
                        <BoxSvg className="w-10 h-10 mx-auto" />
                        <p className='text-b18 font-bold text-[10px] lg:text-xs text-center'>
                            Open Box Appliances
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div className='text-b18 flex flex-col gap-3'>
                    <p className='font-bold'>
                        Our Website's Tools For Success include:
                    </p>
                    <ul className='flex flex-col gap-4'>
                        {toolsList.map((item, index) => (
                            <li key={index} className='flex items-center gap-3'>
                                <div className='w-5 h-5 md:w-6 md:h-6'>
                                    <RoundedTick />
                                </div>
                                <p className='maxmd:text-sm'>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='inline-flex maxmd:flex-col gap-2 pt-6'>
                    <Link to="/products" className='bg-[#071822] px-4 py-3 rounded-lg text-xs text-white justify-center flex gap-1 items-center font-medium'><HiOutlineShoppingCart className="text-white text-sm" /><span>Shop Now</span></Link>
                    <Link to="https://youtu.be/YliJxHkreaE" target="_blank" className='border border-[#071822] px-4 py-3  justify-center rounded-lg text-xs text-[#071822] flex gap-1 items-center font-medium'><BiPlayCircle className="text-[#071822] text-sm" /><span>Watch Video</span></Link>
                </div>
            </div>
        </div>
    )
}

export default ApplianceParts

const toolsList = ['High definition appliance pictures of the actual item you’re purchasing.', 'Detailed appliance specifications & dimensions.', 'Accurate condition descriptions.', 'Fast & convenient delivery.']