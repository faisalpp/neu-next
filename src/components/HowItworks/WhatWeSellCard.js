import React from 'react'
import GreenTickSvg from '../../svgs/GreenTickSvg'
import ShieldSecuritySvg from '../../svgs/ShieldSecuritySvg'

const WhatWeShallCard = ({ image, title, description1, description2, feature }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-106px items-center'>
            <div className='order-2 lg:order-none'>
                <h3 className='text-2xl font-semibold mb-4'>
                    {title}
                </h3>
                <p>
                    {description1}
                </p>
                {description2 ?
                    <p className='mt-5 md:mt-8'>
                        {description2}
                    </p>
                    : null}
                {
                    feature === false ? null
                        : <div className='inline-flex maxsm:flex-col maxsm:w-full mt-4 gap-2'>
                            <span className='flex items-center rounded-md justify-center gap-2 border border-b27 text-b16 leading-[13.959px] px-3 py-2 text-xs font-medium'>
                                <GreenTickSvg />
                                100 % Functional
                            </span>
                            <span className='flex items-center rounded-md justify-center gap-2 border border-b27 text-b16 leading-[13.959px] px-3 py-2 sm:w-[188px] text-xs font-medium'>
                                <ShieldSecuritySvg />
                                NeuShield 1 Year <br />
                                Appliance Warranty
                            </span>
                        </div>
                }
            </div>
            <div className='bg-b28 pr-3 pb-4 rounded-3xl'>
                <img src={`/howitworks/` + image} className='h-auto 2xl:h-[350px] 3xl:h-[380px]' alt="" />
            </div>

        </div>
    )
}

export default WhatWeShallCard