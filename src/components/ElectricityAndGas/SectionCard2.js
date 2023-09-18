import React from 'react'
import TickSvg from '../../svgs/TickSvg'

const SectionCard2 = ({ title, description, image1, image2 }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-5 xs:p-7 sm:p-10 border border-black/[0.08] rounded-3xl'>
            <div className='flex flex-col gap-6'>
                <h3 className='text-b18 text-xl sm:text-2xl font-extrabold'>{title}</h3>
                <p className='leading-6'>
                    {description}
                </p>
            </div>
            <div>
                <div className='flex maxmd:flex-col justify-center maxmd:items-center items-start gap-10'>
                    <div className='xl:max-w-[250px] px-4 2xl:max-w-[299px]'>
                        <h3 className='text-sm font-semibold text-black mb-4 text-center'>Electric Range 3 Prong Outlet <br className='hidden 2xl:block' /> 240v</h3>
                        <img src={'/gas/' + image1} className='xl:max-w-[205px] 2xl:max-w-[254px] xl:h-[254px] object-contain' alt="" />
                    </div>
                    <div className='xl:max-w-[250px] px-4 2xl:max-w-[299px]'>
                        <h3 className='text-sm font-semibold text-black mb-4 text-center'>Electric Range 3 Prong Outlet <br className='hidden 2xl:block' /> 240v</h3>
                        <img src={'/gas/' + image2} className='xl:max-w-[205px] 2xl:max-w-[254px] xl:h-[254px] object-contain' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCard2