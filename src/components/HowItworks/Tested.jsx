import React from 'react'
import WhatWeShallCard from './WhatWeSellCard'
import SatisfiedSection from '../SatisfiedSection'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HowItWorks from '../../pages/HowItWorks/HowItWorks'
import HowItWorksCard from './HowItWorksCard'

const Tested = () => {
    return (
        <HowItWorks>
            <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
                <h4 className='xl:text-4xl text-xl font-bold text-center md:mb-4' >Tested To Manufacturers Specfications</h4>
                <div className='grid grid-cols-1 gap-60px'>
                    <p className='mt-4 max-w-[896px] w-full text-b18 mx-auto text-center'>
                        Our Open Box and Scratch and Dent appliances are thoroughly tested and must pass our 100 point inspection. This ensures every appliance performs 100% to manufacturer specifications, even if they are "Scratch and Dent."
                    </p>
                    <div className='[&>*:nth-child(even)>div:first-child]:order-2 grid grid-cols-1 gap-60px'>
                        <HowItWorksCard icon="TestingFacilities.webp" image="testing1.webp" title="State Of The Art Testing Facilities" description="Our 30k sq ft appliance testing facility in Georgetown, Tx processes tens of thousands of appliances a year. We test to ensure that your appliance performs exactly as it is intended, even if it has a scratch or dent.  Our facility is equipped with 50 High-Tech appliance testing stations equipped with utility connections that mimic average residential utilities to ensure each appliance is tested to Manufacturer specifications. Utility variables like water pressure, electrical frequency or voltage drop can all affect how an appliance performs. Our facilities are designed to ensure these variables are controlled. The result is the best environment possible to test functionality of an appliance." />
                        <HowItWorksCard icon="MechanicalTesting.webp" image="testing2.webp" title="Mechanical Testing" description="Each appliance has to pass our mechanical testing 100%. Each model and category of appliance have their own specific mechanical testing process that each appliance is run through. This thorough testing process ensures that any “scratch or dent” will not impact the function of the appliance. Our mechanical testing process is closely monitored and involves multiple QC checks to ensure each appliance works 100% as it should." />
                        <HowItWorksCard icon="100Points.webp" image="image3.webp" title="100- Points Inspections" description="Our technicians thoroughly inspect each appliance to ensure they are 100% functional and include all needed pieces. Each type of appliance has their own 100+ point inspection checklist that guides our technicians to thoroughly inspect each appliance." showChecklists={true} />
                    </div>

                    <SatisfiedSection apiSectionName="how-it-works-review-(tested-tab)" title="Our Customers Trust Our Appliances" SectionStyle="[&>h4]:2xl:!text-4xl [&>h4]:2xl:!leading-[44px] !w-full !p-0 !max-w-full" />

                    <div className='flex justify-center mb-10'>
                        <button className='flex gap-2 items-center justify-between maxmd:text-left border border-b3 rounded-lg px-4 md:px-6 py-3 text-b3 font-semibold'>Shop our 100% Functional Discounted Appliances <AiOutlineArrowRight className='text-b3 maxcosm:!w-6 maxcosm:!h-6' /></button>
                    </div>
                </div>
            </div>
        </HowItWorks>
    )
}

export default Tested