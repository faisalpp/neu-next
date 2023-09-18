import React from 'react'
import SatisfiedSection from '../SatisfiedSection'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HowItWorks from '../../pages/HowItWorks/HowItWorks'
import DeliveryMap from '../Map/DeliveryMap'
import MapCards from './MapCards'

const Delivered = () => {
    return (
        <HowItWorks>
            <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
                <h4 className='xl:text-4xl text-xl font-bold text-center mb-4' >Delivery and Installation</h4>
                <div className='grid grid-cols-1 gap-10 lg:gap-60px'>
                    <p className='mt-4 max-w-[896px] w-full text-b18 mx-auto text-center md:mb-10'>
                        Our Austin local appliance delivery Pros are fast and efficient. We offer quick delivery and installation services to Austin, Tx and the surrounding areas.
                    </p>
                    {/* Delivery Map */}
                    {/* <MapSection /> */}
                    <DeliveryMap customStyle="flex flex-col lg:grid [&>.mapform]:lg:ml-10 [&>.mapform]:2xl:!h-[617px] [&>#map]:lg:!absolute [&>#map]:left-0 [&>#map]:right-0 relative items-center" />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:mt-10'>
                        <MapCards icon="pickup-shield-security.webp" title="Pickup Available" description="Need it instantly? We offer pickup! Our team will help you load it up!" />
                        <MapCards icon="airport_shuttle.webp" title="Fast Delivery" description="Our delivery and installation teams are fast and efficient providing you quick options for delivery" />
                        <MapCards icon="home_pin.webp" title="Serving The Greater Austin, TX Area" description="We offer our delivery and installation services through the Greater Austin,Tx area and Central Tx. Enter your zip code to check if we deliver to your area. (same as home page with the map etc)" />
                        <MapCards icon="schedule.webp" title="Delivery Times and Updates" description="Getting an appliance delivered has never been so easy! Don’t wait around all day, we offer Narrow delivery windows and updates as our team gets closer. Go about your day and we will keep you in the loop!" />
                    </div>

                    <SatisfiedSection apiSectionName="how-it-works-review-(delivered-tab)" title="Our Delivery Teams Get All The Love" SectionStyle="[&>h4]:2xl:!text-4xl [&>h4]:2xl:!leading-[44px] !p-0 !w-full !max-w-full" />

                    <div className='flex justify-center mb-10'>
                        <button className='flex gap-2 items-center border border-b3 rounded-lg px-6 py-3 text-b3 font-semibold'>Shop our Appliances <AiOutlineArrowRight className='text-b3' /></button>
                    </div>
                </div>
            </div>
        </HowItWorks>
    )
}

export default Delivered