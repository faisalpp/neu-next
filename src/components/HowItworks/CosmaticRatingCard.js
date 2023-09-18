import React from 'react'
import { AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlinePercentage } from 'react-icons/ai'

const CosmaticRatingCard = ({ rating, damage, discount, description }) => {
    return (
        <div className='p-6 md:p-10 flex flex-col gap-[26px] bg-white shadow-[0px_20px_40px_0px_rgba(0,0,0,0.07)] rounded-3xl'>
            <h3 className='text-b18 text-2xl text-center'><span className='font-bold'>Cosmetic Rating:</span> {rating} Stars </h3>
            <p className='text-b29 text-center font-semibold'>
                {damage}
            </p>
            <div className='flex justify-center'>
                <span className='bg-b10 font-bold text-white rounded-3xl inline-flex items-center gap-2 px-3 py-[6px]'>
                    <AiOutlineCheckCircle />
                    <span>
                        100% Functional
                    </span>
                </span>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-black/50 maxmd:text-sm flex gap-1 font-semibold items-center'>
                    Discount <AiOutlinePercentage />
                </span>
                <span className='flex gap-2'>
                    <span className='flex gap-x-1'>
                        <span className='flex bg-b30 w-2 h-4 mt-2' ></span><span className='flex bg-b30 w-2 h-5 mt-1' ></span><span className='flex bg-b7 w-2 h-6' ></span>
                    </span>
                    <span className='text-sm text-b15'>
                        {discount}
                    </span>
                </span>
            </div>
            <p className='leading-6 line-clamp-[11] max-h-[264px]'>
                {description}
            </p>
            <button className='px-4 py-3 border border-b3 rounded-lg flex gap-2 justify-center items-center text-b3 font-semibold'>
                Shop {rating} Star Appliances
                <AiOutlineArrowRight className='text-base' />
            </button>
        </div>
    )
}

export default CosmaticRatingCard