import React from 'react'
import WhatWeShallCard from './WhatWeSellCard'
import HowItWorksCard from './HowItWorksCard'
import SatisfiedSection from '../SatisfiedSection'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HowItWorks from '../../pages/HowItWorks/HowItWorks'

const Photos = () => {
    return (
        <HowItWorks>
            <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
                <h4 className='xl:text-4xl text-xl font-bold text-center mb-4' >Shop With Confidence!</h4>
                <div className='grid grid-cols-1 gap-60px'>
                    <p className='mt-4 max-w-[896px] w-full text-b18 mx-auto text-center'>
                        Each scratch and dent appliance is unique. Every appliance receives their own 360° photos and video. This allows you to shop from home while seeing exactly where the cosmetic blemishes are (if any!)
                    </p>
                    <div className='[&>*:nth-child(odd)>div:first-child]:order-2 grid grid-cols-1 gap-60px'>
                        <HowItWorksCard icon="StateofArt.webp" image="testing2.webp" title="State Of The Art Photo Booth" description="Our Industry leading photo booth was custom built to bring visual transparency to our customers. Our photo room includes a 10 ft wide custom made automatic turntable, allowing us to capture each appliance from every angle, 360°." />
                        <HowItWorksCard icon="360Photos.webp" image="Washing.webp" title="360  Photos" description="Each appliance receives their own 360 (degree sign) interactive view. This industry leading approach allows you to tour each Scratch and Dent Appliance's cosmetic condition." />
                        <HowItWorksCard icon="ScratchandDent.webp" image="Scarcthanddent.webp" title="Scratch and Dent Showcase" description="All major cosmetic blemishes are highlighted on the 360 view." />
                        <HowItWorksCard icon="ScratchandDent.webp" image="image3.webp" title="High Definition Pictures and Videos" description="Our Photographers use professional photography equipment to ensure our appliances have the highest definition pictures and videos available." />
                        <HowItWorksCard icon="ScratchandDent.webp" image="testing1.webp" title="Each Appliance Get Their Own Photo + Video" description="Each appliance gets their own set of photos and videos of the actual item. So you know exactly where the dent or ding is (if any!). " />
                    </div>

                    <SatisfiedSection apiSectionName="how-it-works-review-(photo-tab)" title="Our Customers Love Being Able to Shop For Scratch and Dent Appliances From Home" SectionStyle="[&>h4]:2xl:!text-4xl [&>h4]:2xl:!leading-[44px] !w-full !p-0 !max-w-full" />

                    <div className='flex justify-center mb-10'>
                        <button className='flex gap-2 items-center maxmd:text-left border border-b3 rounded-lg px-4 md:px-6 py-3 text-b3 font-semibold'>Browse our Scratch and Dent Discounts <AiOutlineArrowRight className='text-b3 maxcosm:!w-6 maxcosm:!h-6' /></button>
                    </div>
                </div>
            </div>
        </HowItWorks>
    )
}

export default Photos