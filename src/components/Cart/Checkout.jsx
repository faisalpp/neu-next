import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Checkout = () => {

    return (
        <div className='border border-b26 rounded px-5 py-10 md:p-10 flex flex-col gap-6'>
            <h2 className='text-b16 font-bold text-xl'>Order Summary</h2>
            <div className='flex justify-between'><span>4 Items</span><span>$2,279.00</span></div>
            <div className='flex justify-between'><span>Delivery Fee</span><span>$80</span></div>
            <hr className='border-[rgba(0,0,0,0.08)]' />
            <div className='flex justify-between p-2'><span>Order Total</span><span className='text-2xl'>-</span></div>
            <Link to="/mycart/information" className='px-4 py-3 flex gap-2 justify-center text-xs rounded-lg bg-b3 text-white font-semibold'>
                <span>
                    Proceed to Checkout
                </span>
                <AiOutlineArrowRight className='text-base' />
            </Link>
        </div>
    )
}

export default Checkout