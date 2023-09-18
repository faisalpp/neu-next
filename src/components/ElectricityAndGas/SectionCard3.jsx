import React from 'react'
import TickSvg from '../../svgs/TickSvg'

const SectionCard3 = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-5 xs:p-7 sm:p-10 border border-black/[0.08] rounded-3xl'>
            <div className='flex flex-col gap-6'>
                <h3 className='text-b18 text-xl sm:text-2xl font-extrabold'>Dual Fuel Range Connections</h3>
                <p className='leading-6'>
                    Dual Fuel Ranges require both a 240v electrical outlet AND a gas line connection. The appliance will not properly function unless both are installed. Electric 240V  Range Cords are interchangeable, at the appliance, between 3 prong cords and 4 prong cords. One of these two 240v outlets must be present and a Gas connection with a shutoff valve to be compatible.
                </p>
            </div>
            <div>
                <div className='flex items-center justify-center maxcosm:flex-col gap-3 2xl:gap-6'>
                    <div className='xl:max-w-[130px] 2xl:max-w-[155px] xl:h-[155px]'>
                        <h3 className='font-semibold text-[10px] text-black text-center mb-2'>Gas Connector</h3>
                        <img src="/gas/gasconnection.webp" className='xl:max-w-[130px] 2xl:max-w-[155px] xl:h-[155px] object-contain' alt="" />
                    </div>
                    <div className='flex justify-center items-center min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] rounded-full bgb15 text-2xl font-bold text-b3 bg-[rgba(34,166,171,0.10)] border border-[rgba(34,166,171,0.50)]'>
                        +
                    </div>
                    <div className='xl:max-w-[130px] 2xl:max-w-[155px] xl:h-[155px]'>
                        <h3 className='font-semibold text-[10px] text-black text-center mb-2'>Electric Range 3 Prong Outlet 240v</h3>
                        <img src="/gas/elctric-drayer3.webp" className='xl:max-w-[130px] 2xl:max-w-[155px] xl:h-[155px] object-contain' alt="" />
                    </div>
                    <div className='xl:max-w-[130px] 2xl:max-w-[155px] xl:h-[155px]'>
                        <h3 className='font-semibold text-[10px] text-black text-center mb-2'>Electric Range 4 Prong Outlet 240v</h3>
                        <img src="/gas/elctric-drayer4.webp" className='xl:max-w-[130px] 2xl:max-w-[155px] xl:h-[155px] object-contain' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCard3