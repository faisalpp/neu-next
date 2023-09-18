import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLocalPhone } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PartnerCard from './PartnerCard';

const RepairPartners = () => {
    return (
        <>
            <div className='md:pb-10 lg:pb-16 xl:pb-20 pt-5 maincontainer'>
                <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-bold text-b18 text-center'>Our Recommended Repair Partners</h2>
            </div>
            <div className='py-10 lg:py-16 xl:py-20 grid grid-cols-1 gap-20 2xl:gap-44 [&>div:nth-child(even)>.repairImages]:order-2 maincontainer'>
                <PartnerCard image="appliancerepair1.webp" imagestyle="2xl:min-w-[543.651px] 2xl:h-[500px]" title="Daigle Appliance Repair" description="We have heard stellar things about Daigle Appliance Repair from our customers. Everything from their fast response time, to their affordable appliance repair pricing to their professionalism. Christian Daigle with Daigle Appliance Repair is a total pro when it comes to all things appliance repair. His personal approach to appliance repair ensures us he is a top Candidate for your appliance repair needs and his customers yell it from the mountain tops. This appliance repair company has 5 stars on yelp with over 125 Reviews (probably more by the time your reading this.) Just like any repair service; appliance repair requires an honest technician to properly diagnose the issue. We feel Daigle Appliance Repair does a stellar job of taking care of their customers and just like their customers, We recommend them to take care of your appliance repair needs. Give em' a try and tell them Neu sent you!!" />
                <PartnerCard image="appliancerepair2.webp" imagestyle="2xl:min-w-[550px] 2xl:h-[429px]" title="Atlas Appliance Repair" description="Atlas Appliance Repair has been fixing appliances around Austin, Tx since 2010. Atlas is a family owned and operated business and you can feel that family vibe with the appliance repair services they offer. Avri and David (owners of Atlas Appliance Repair) are two friends that grew up in Jerusalem, Israel and have been fixing broken things ever since. Appliance Repair is tricky and requires honesty from the appliance repair technician to do the job right. We feel Atlas will take care of your appliance repair needs in a honest, personal manner because of their extensive experience and family run operation. Give em' a try and tell them Neu sent you!" />
                <PartnerCard image="appliancerepair3.webp" imagestyle="2xl:min-w-[550px] 2xl:h-[329px]" title="Tony Appliance Repair" description="Austin's Appliance Repair OG! We love referring our customers to Tony because he will provide 5 star customer service like we do! Tony Appliance Repair is a one man army leaving happy customers and working appliances in his wake. We have been referring customers to tony for years and have heard all the great feedback. Keep rockin' the appliance repair world Tony you are an all-star!" />
            </div>
        </>
    )
}

export default RepairPartners