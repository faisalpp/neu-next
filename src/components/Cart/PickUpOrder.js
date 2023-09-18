import React from 'react';
import CartCard from './CartCard';

const PickUpOrder = () => {

    return (
        <div className='border border-b26 rounded p-5 md:p-10 grid grid-cols-1 gap-8'>
            <h2 className='text-b16 font-bold text-xl'>Pickup Orders</h2>
            <CartCard />
            <div className='w-full border border-[#D9D9D9] p-4 rounded-lg flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <span className='w-[18px] h-[18px]'>
                        <img src="/svgs/Pick-up.webp" alt="Pick-up" />
                    </span>
                    <span className='text-sm text-[#545454]'>
                        Georgetown, Tx
                    </span>
                </div>
                <div className='leading-[-0.2px] text-sm text-b3'>
                    Free
                </div>
            </div>
        </div>
    )
}

export default PickUpOrder