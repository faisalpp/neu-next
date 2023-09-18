import React from 'react'
import WhatWeShallCard from './WhatWeSellCard'
import SatisfiedSection from '../SatisfiedSection'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HowItWorks from '../../pages/HowItWorks/HowItWorks'
import MapCards from './MapCards'

const HassleFree = () => {
    return (
        <HowItWorks>
            <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
                <div className='grid grid-cols-1 gap-60px'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <MapCards icon="pickup-shield-security.webp" title="Pickup Available" description="Need it instantly? We offer pickup! Our team will help you load it up!" />
                        <MapCards icon="airport_shuttle.webp" title="Fast Delivery" description="Our delivery and installation teams are fast and efficient providing you quick options for delivery" />
                        <MapCards icon="home_pin.webp" title="Serving The Greater Austin, TX Area" description="We offer our delivery and installation services through the Greater Austin,Tx area and Central Tx. Enter your zip code to check if we deliver to your area. (same as home page with the map etc)" />
                        <MapCards icon="schedule.webp" title="Delivery Times and Updates" description="Getting an appliance delivered has never been so easy! Don’t wait around all day, we offer Narrow delivery windows and updates as our team gets closer. Go about your day and we will keep you in the loop!" />
                    </div>

                    <SatisfiedSection apiSectionName="how-it-works-1st-section-review-(hassle-free-tab)" title="Our Customers Love Being Able to Shop For Scratch and Dent Appliances From Home" SectionStyle="[&>h4]:2xl:!text-4xl [&>h4]:2xl:!leading-[44px] !p-0 !w-full !max-w-full" />
                    <SatisfiedSection apiSectionName="how-it-works-2nd-section-review-(hassle-free-tab)" SectionStyle="!p-0 !w-full !max-w-full" />

                    <div className='flex justify-center mb-10'>
                        <button className='flex gap-2 items-center border border-b3 rounded-lg px-6 py-3 text-b3 font-semibold'>Shop Now <AiOutlineArrowRight className='text-b3' /></button>
                    </div>
                </div>
            </div>
        </HowItWorks>
    )
}

export default HassleFree