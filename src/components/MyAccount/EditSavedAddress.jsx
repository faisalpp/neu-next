import React from 'react';
import EditSvg from '../../svgs/EditSvg';
import { RiDeleteBin6Line } from 'react-icons/ri';

const EditSavedAddress = ({ name, phoneno }) => {

    return (
        <>
            <div className='flex items-center justify-between gap-3'>
                <div className='flex flex-col gap-4'>
                    <h3 className=' font-semibold'>John Doe</h3>
                    <span className='font-medium text-sm'>
                        +1 234 567 8900
                    </span>
                    <div className='text-sm flex flex-col'>
                        <span>225 Wall Street</span>
                        <span>Brooklyn New York 00234</span>
                        <span>United States</span>
                    </div>
                </div>
                <div className='flex gap-5 sm:gap-10 items-center'>
                    <EditSvg />
                    <RiDeleteBin6Line className='text-b3 w-5 h-5' />
                </div>
            </div>
            <hr className='bg-[rgba(0,0,0,0.08)]' />
        </>
    )
}

export default EditSavedAddress