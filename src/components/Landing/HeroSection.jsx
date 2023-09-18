import React, { useState } from 'react'
import { AiOutlineArrowRight, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoCloseOutline, IoMenu } from 'react-icons/io5'
import { MdOutlinePhone } from 'react-icons/md'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    const [mobMenu, setMobMenu] = useState(false);
    return (
        <>
            <header className='relative'>
                <img src="landing.webp" alt="landing" className='absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10 pointer-events-none' />
                {/* Navigation */}
                <nav className='max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto py-5 flex justify-between items-center'>
                    <Link to="/">
                        <img src="/neu.webp" alt="neuappliances" className='h-10' />
                    </Link>
                    <div className='flex gap-6 items-center'>
                        <button type='button' className='md:hidden text-white inline-flex items-center justify-center font-medium text-xs px-4 py-3 bg-[rgba(255,255,255,0.08)] rounded-lg relative'>
                            <AiOutlineShoppingCart className='text-base' />
                            <span className='bg-b3 text-white py-1 px-[6px] font-bold text-sm absolute rounded-full -right-2 -top-2'>
                                0
                            </span>
                        </button>
                        {mobMenu ? <button type='button' onClick={() => setMobMenu(false)} className='md:hidden flex items-center justify-center bg-b2 w-12 h-12 rounded-full text-white' ><IoCloseOutline className='text-white text-2xl' /></button> : <button type='button' onClick={() => setMobMenu(true)} className='md:hidden flex justify-center items-center bg-b2 w-12 h-12 rounded-full text-white' ><IoMenu className='text-2xl' /></button>}
                    </div>
                    <div className={`${mobMenu ? 'maxmd:fixed' : 'maxmd:hidden'} flex maxmd:flex-col maxmd:p-10 rounded-md gap-4 md:gap-6 maxmd:h-auto right-0 top-16 maxmd:bg-b1 maxmd:w-2/3 maxmd:overflow-y-scroll py-5 z-50`}>
                        <Link to="" className='text-white inline-flex gap-1 items-center justify-center font-medium text-xs px-4 py-3 bg-[rgba(255,255,255,0.08)] rounded-lg'>
                            <AiOutlineShoppingCart className='text-base' />
                            <span>
                                Go to Store
                            </span>
                        </Link>
                        <button type='button' className='maxmd:hidden relative text-white inline-flex items-center justify-center font-medium text-xs px-4 py-3 bg-[rgba(255,255,255,0.08)] rounded-lg'>
                            <AiOutlineShoppingCart className='text-base' />
                            <span className='bg-b3 text-white py-1 px-[6px] font-bold text-sm absolute rounded-full -right-2 -top-2'>
                                0
                            </span>
                        </button>
                        <Link to="tel:(512) 992-2714" className='text-white text-xs font-medium flex gap-1 items-center'>
                            <MdOutlinePhone className='text-base' />
                            <span>(512) 992-2714</span>
                        </Link>
                        <Link to="tel:(512) 992-2714" className='text-white text-xs font-medium flex gap-1 items-center'>
                            <TfiHeadphoneAlt className='text-base' />
                            <span>Need Help?</span>
                        </Link>
                    </div>
                </nav>
                {/* End Navigation*/}
                <div className='pt-60px pb-120px'>
                    <div className='md:grid gap-10 flex flex-col grid-cols-2 items-center 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                        <div className='flex flex-col gap-1 lg:gap-2' >
                            <div>
                                <span className='text-sm text-b16 font-semibold py-2 px-3 rounded-full bg-b4 inline-flex items-center justify-center'>
                                    Amazing Deals!!!
                                </span>
                            </div>
                            <h1 className='text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] font-extrabold text-white leading-[80px] lg:leading-[120px]' >30% OFF</h1>
                            <p className='text-xl lg:text-2xl text-white'>
                                on all our 3 stars appliances.
                            </p>
                            <div className="text-white pt-8">
                                <Link to="" className='inline-flex gap-1 items-center justify-center rounded-lg bg-b3 text-white py-3 px-6 font-semibold'>View All <AiOutlineArrowRight className='text-lg' /></Link>
                            </div>
                        </div>
                        <div className='flex justify-end' >
                            <img src="/landing_banner.webp" alt='refrigrators' className='2xl:w-[568px] 2xl:h-[457px] mx-auto' />
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default HeroSection