import React from 'react'
import TickSvg from '../../svgs/TickSvg'

const SectionCard = ({ title }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 xs:p-7 sm:p-10 border border-black/[0.08] rounded-3xl'>
            <div className='flex flex-col gap-6'>
                <h3 className='text-b18 text-xl sm:text-2xl font-extrabold'>{title}</h3>
                <p className='font-semibold text-black'>
                    Gas Ranges Require :
                </p>
                <ul className='space-y-6'>
                    <li className='flex gap-2 items-center'><TickSvg /> A gas connections with a shutoff valve</li>
                    <li className='flex gap-2 items-center'><TickSvg /> A Standard 120v wall outlet to operate</li>
                </ul>
                <p className='leading-6'>
                    The gas acts as the heat source and electrical outlet for controls, motors etc. Gas lines must have a shutoff valve to be connected. A new gas line should always be installed when replacing or installing a new gas dryer. Ask a store associate for more details.
                </p>
            </div>
            <div>
                <h3 className='text-b18 text-center text-lg sm:text-xl font-bold mb-6'>2 Required Connections</h3>
                <div className='flex items-center justify-center'>
                    <div className='xl:max-w-[205px] 2xl:max-w-[254px] xl:h-[254px]'>
                        <img src="/gas/gasconnection.webp" className='xl:max-w-[205px] 2xl:max-w-[254px] xl:h-[254px] object-contain' alt="" />
                    </div>
                    <div className='flex justify-center items-center min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] sm:min-w-[50px] sm:min-h-[50px] sm:max-w-[50px] sm:max-h-[50px] rounded-full bgb15 text-4xl sm:text-[64px] font-bold text-b3 bg-[rgba(34,166,171,0.10)] border border-[rgba(34,166,171,0.50)]'>
                        +
                    </div>
                    <div className='xl:max-w-[205px] 2xl:max-w-[254px] xl:h-[254px]'>
                        <img src="/gas/standardoutlet.webp" className='xl:max-w-[205px] 2xl:max-w-[254px] xl:h-[254px] object-contain' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCard