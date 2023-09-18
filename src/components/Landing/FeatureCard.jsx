import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const FeatureCard = ({ icon, title, description, customStyle, iconColor }) => {
    return (
        <div className={`rounded-[19.021px] p-10 lg:p-14 flex flex-col gap-4 ${customStyle ? customStyle : 'bg-b21'}`}>

            <div className={`w-[88px] h-[88px] rounded-full flex justify-center items-center ${iconColor ? iconColor : 'bg-b3'}`}>
                <img src={`/svgs/` + icon} className='w-10 h-10' alt="" />
            </div>
            <h3 className='text-b18 font-bold text-lg'>
                {title}
            </h3>
            <p className='text-black'>
                {description}
            </p>
            <div>
                <Link to="" className='inline-flex gap-1 text-xs border border-b16 px-4 py-3 items-center text-b16 rounded-lg'>
                    Learn More
                    <FaArrowRight className='text-xs' />
                </Link>
            </div>
        </div>
    )
}

export default FeatureCard