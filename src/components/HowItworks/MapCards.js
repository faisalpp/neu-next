import React from 'react'

const MapCards = ({ icon, title, description }) => {
    return (
        <div className='rounded-[19.021px] bg-b21 px-5 py-10 md:p-10 flex flex-col gap-4'>

            <div className='bg-b3 w-14 h-14 rounded-full flex justify-center items-center'>
                <img src={`/svgs/` + icon} className='w-8 h-8' alt="" />
            </div>
            <h3 className='text-b18 font-bold text-lg'>
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default MapCards