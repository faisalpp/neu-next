import React from 'react'

const RepairWork = () => {
    return (
        <div className='bg-b8'>
            <div className='py-10 lg:py-16 xl:py-20 2xl:py-[144px] maincontainer'>
                <div className='bg-b3 rounded-3xl px-6 py-8 md:p-16 flex maxlg:flex-col gap-10 2xl:gap-16'>
                    <div className='maxmd:w-[241px] mx-auto lg:min-w-[320px] lg:h-[320px] xl:min-w-[352px] xl:h-[352px]'>
                        <img src="appliance/appliancework.webp" alt="" />
                    </div>
                    <div>
                        <div className='rounded-3xl bg-[#18B5BA] px-4 py-6 md:p-7 sm:p-11 3xl:px-16 3xl:py-60px'>
                            <h3 className='text-white text-2xl maxmd:text-center xl:text-3xl 2xl:text-[32px] font-bold mb-6'>How Appliance Repair Works</h3>
                            <p className='text-base xs:text-xl maxmd:text-center xs:leading-8 text-white'>
                                We can't speak for others but typically an appliance repair technician will come on site and diagnose your appliance for a flat rate. Usually this appliance diagnostic fee is waived if you choose to complete the repair on your appliance. If you choose not to complete the repair you usually only owe the diagnostic fee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepairWork