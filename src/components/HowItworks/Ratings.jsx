import React from 'react'
import HowItWorks from '../../pages/HowItWorks/HowItWorks'
import CosmaticCard from '../CosmaticCard'
import CosmaticRatingHowItwork from './CosmaticRatingHowItwork'

const Ratings = () => {
    return (
        <HowItWorks>
            <div className='flex flex-col items-center py-10 sm:px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
                <h4 className='xl:text-4xl text-xl font-bold text-center mb-4' >Cosmetic Rating</h4>
                <div className='grid grid-cols-1 gap-10 md:gap-60px'>
                    <p className='mt-4 max-w-[896px] w-full text-b18 font-bold mx-auto text-center'>
                        We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!
                    </p>

                    <CosmaticCard customStyle="!w-full !p-0 maxmd:!mt-0" />

                    {/* Cosmatic Rating How it Work */}
                    <CosmaticRatingHowItwork />
                </div>
            </div>
        </HowItWorks>
    )
}

export default Ratings