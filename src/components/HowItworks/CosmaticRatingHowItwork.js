import React from 'react'
import CosmaticRatingCard from './CosmaticRatingCard'
import SatisfiedSection from '../SatisfiedSection'

const CosmaticRatingHowItwork = () => {
    return (
        <div className='mb-10'>
            <h2 className='text-2xl font-bold text-center'>Cosmetic Rating: How It Works</h2>
            <p className='max-w-[896px] w-full mx-auto mb-60px mt-4 text-black text-center'>
                Our Quality Control team inspects and grades each appliance based on how it looks. Our Team takes into account any scratches, dents, dings, scuffs or any cosmetic blemish. At this point each appliance has already been mechanically tested and ensured to work 100%.
                <span className='block font-bold'>
                    The Bigger the Ding the Bigger the Savings!
                </span>
            </p>
            <div className='grid grid-cols-1 mb-60px md:grid-cols-2 2xl:grid-cols-3 gap-10'>
                <CosmaticRatingCard rating={3} damage="Moderate Cosmetic Damage" discount="Massive" description="If you are shopping for bargains you are in the right place! 3-star rated appliances get you an open box appliance that works perfectly, with moderate cosmetic damage like scratches or dents at the largest discounted price we offer. Customers purchasing 3 star appliances capitalize on our deepest discounts in exchange for larger cosmetic blemishes while still obtaining a 100% functional appliance." />
                <CosmaticRatingCard rating={4} damage="Minor Cosmetic Damage" discount="Huge" description="Our 4 Star line is for Austin's savviest shoppers! 4-star rated appliances get you an open box appliance that works perfectly, with minor to moderate cosmetic damage like scratchs or dents at a great discount. Customers purchasing 4 star Cosmetic Rating appliances are generally more accepting of more minor cosmetic blemishes for a deeper discount on the item while still obtaining a 100% functional appliance." />
                <CosmaticRatingCard rating={5} damage="Very Minor to No Cosmetic Damage" discount="Great" description={`If your shopping our 5 star appliances then you understand the value of a good deal! 5-star rated appliances get you an open box appliance that works perfectly, with very minor to no cosmetic damage like scratchs or dents at a great discount. Our customers purchasing 5 star Cosmetic Cosmetic Rating appliances are generally looking for like new or new appliances while capitalizing on an open box discount vs a "Scratch or Dent" discounted appliance while still obtaining a 100% functional appliance.`} />
            </div>

            <SatisfiedSection apiSectionName="how-it-works-review-(ratings-tab)" title="Our Customers Are RAVING About Our Rating System" SectionStyle="!w-full !max-w-full" />
        </div>
    )
}

export default CosmaticRatingHowItwork