import React from 'react'
import GreenTickSvg from '../../svgs/GreenTickSvg'
import ShieldSecuritySvg from '../../svgs/ShieldSecuritySvg'
import CheckCheckLists from './CheckCheckLists'

const HowItWorksCard = ({ image, title, description, icon, showChecklists }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-106px items-center'>
            <div className='space-y-4 order-2 lg:order-none'>
                <img src={'/howitworks/' + icon} className='w-16 h-16' alt={title} />
                <h3 className='text-2xl font-semibold text-black'>
                    {title}
                </h3>
                <p className='leading-6'>
                    {description}
                </p>
                {showChecklists ?
                    <CheckCheckLists />
                    : ''}
            </div>
            <div className='bg-b28 pr-3 pb-4 rounded-3xl'>
                <img src={`/howitworks/` + image} className='h-auto 2xl:h-[350px] 3xl:h-[380px]' alt="" />
            </div>

        </div>
    )
}

export default HowItWorksCard