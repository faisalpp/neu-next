import React from 'react'

const PayTermCard = ({ image, title, description }) => {
    return (
        <div className='p-7 xl:py-14 xl:px-10 bg-b8 rounded-3xl'>
            <div className='w-[88px] h-[88px] rounded-full bg-b3 flex justify-center items-center mx-auto'>
                <img src={`/svgs/` + image} className='w-10 h-10' alt="timer" />
            </div>
            <h3 className='text-xl text-b3 text-center font-bold leading-6 mt-6 mb-4'>{title}</h3>
            <p className='text-b18 text-center leading-6'>
                {description}
            </p>
        </div>
    )
}

export default PayTermCard