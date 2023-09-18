import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Washer from './Product/CompleteLaundry/Washer'
import Drayer from './Product/CompleteLaundry/Drayer'
import Filter from './Product/CompleteLaundry/Filter'

import { Link } from 'react-router-dom'

const CompleteLaundary = ({ closeModal }) => {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full overflow-y-auto h-screen bg-black/40 z-50 !m-0 px-12 lg:px-20'>
            <div className='max-w-[1440px] mx-auto my-10 bg-white rounded-3xl'>
                <div className='relative grid grid-cols-1 gap-60px mx-auto h-auto  p-10 lg:p-14 3xl:p-60px '>
                    <button type='button' onClick={closeModal} className='absolute -right-10 top-0 bg-b3 text-white flex p-1 justify-center items-center w-8 h-8 rounded-full'>
                        <IoCloseOutline className='text-3xl' />
                    </button>
                    <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-7 w-full justify-center items-center'>
                        {/* Washer */}
                        <Washer />
                        {/* ==== */}
                        <div><FaPlus className='text-b3 mx-auto' /></div>
                        {/* Drayer */}
                        <Drayer />
                        {/* ==== */}
                    </div>
                    <div className='grid grid-cols-2 rounded-xl overflow-hidden'>
                        <button type='button' className='bg-b3 p-4 w-full font-bold text-white'>
                            Washer
                        </button>
                        <button type='button' className='bg-b11 p-4 w-full font-medium'>
                            Dryers
                        </button>
                    </div>

                    <div className=''>
                        <Filter />
                    </div>
                </div>
                <div className='text-b16 flex flex-wrap gap-5 justify-between shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.10)] p-10 bg-white rounded-b-3xl'>
                    <div className='flex flex-wrap items-center gap-6'>
                        <div>
                            <span className='font-semibold'>
                                Selected Items
                            </span>
                            <div className='flex gap-3 items-center'>
                                <span className='font-medium'>
                                    2 Items
                                </span>
                                <div className='h-[18px] w-[1px] bg-[rgba(17,16,16,0.20)]'></div>
                                <button type='button' className='text-red-600 font-medium'>
                                    Reset
                                </button>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='text-center space-y-2'>
                                <div className='w-16 h-16 border flex justify-center items-center border-dashed border-b3 rounded-xl'>
                                    <img src="/p1.webp" alt="p1" className='w-10 h-10 object-contain' />
                                </div>
                                <span className='text-b16 text-sm font-medium'>
                                    Washer
                                </span>
                            </div>
                            <div className='text-center space-y-2'>
                                <div className='w-16 h-16 border flex justify-center items-center border-dashed border-b3 rounded-xl'>
                                    <FaPlus className='text-b3' />
                                </div>
                                <span className='text-b16 text-sm font-medium'>
                                    Dryer
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end flex-wrap gap-5 md:gap-10'>
                        <div>
                            <h3 className='text-xl font-semibold mb-4 text-black'>Subtotal</h3>
                            <p className='text-32px text-black font-semibold'>
                                $2,279.00
                            </p>
                        </div>
                        <div>
                            <Link to="" className='text-white py-4 px-8 flex gap-2 items-center justify-center text-center w-full bg-b7 rounded-lg'>
                                <AiOutlineShoppingCart className='text-2xl' />
                                Add Selected Items To Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteLaundary