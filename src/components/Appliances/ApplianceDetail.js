import React from 'react'

const ApplianceDetail = ({ descStyle, title, description }) => {
    return (
        <div className='mt-2'>
            <h1 className='text-32px xl:text-[40px] maxmd:text-center font-bold mb-6 text-b16'>{title}</h1>
            <p className={`w-full md:w-2/3 maxmd:text-center text-b16 ${descStyle ? descStyle : '3xl:w-[1135px]'}`}>{description}</p>
        </div>
    )
}

export default ApplianceDetail