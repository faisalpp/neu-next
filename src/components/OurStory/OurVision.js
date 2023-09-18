import React from 'react';

const OurVison = ({ order, image, about, title, description, BoxStyle }) => {

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:flex gap-10 xl:gap-24 2xl:gap-[140px] 3xl:gap-[168px] py-16 xl:py-20 2xl:py-100px maincontainer'>
                <div className={`2xl:h-[500px] 2xl:min-w-[700px] ${order}`}>
                    <img src={image} alt="" className='maxlg:object-contain lg:h-[420px] 2xl:h-[470px] 3xl:h-[500px]' />
                </div>
                <div className='flex items-center relative'>
                    <div className={`maxlg:hidden absolute top-0 w-[300px] xl:w-[318px] h-[230px] xl:h-[250px] 3xl:h-[279px] bg-b3/10 rounded-3xl mt-4 -z-10 ${BoxStyle}`}></div>
                    <div className='flex flex-col gap-3 3xl:gap-5'>
                        <span className='font-bold text-xs'>{about}</span>
                        <h3 className='font-bold text-2xl lg:text-xl xl:text-2xl 3xl:text-3xl'>
                            {title}
                        </h3>
                        <p className='leading-[30px]'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurVison