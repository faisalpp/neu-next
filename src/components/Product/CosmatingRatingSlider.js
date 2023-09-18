import React from 'react'
import { AiOutlineDollar, AiFillStar, AiOutlineCheckCircle } from 'react-icons/ai'
import ProductSlider from '../ProductSlider'

const CosmatingRatingSlider = ({ title, dicount, type, stars, discount, codmetics }) => {
    const products = [
        {
            image: '/p1.webp',
        },
        {
            image: '/p1.webp',
        },
        {
            image: '/p1.webp',
        },
        {
            image: '/p1.webp',
        },
        {
            image: '/p1.webp',
        },
        {
            image: '/p1.webp',
        },
        {
            image: '/p1.webp',
        },
    ];
    const StarIconPrinter = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar className='text-b7 text-lg' /> // Render the star icon component for each iteration
        ));

        return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
    };
    return (
        <div className='flex flex-col maxmd:max-w-[330px] relative maxmd:mx-auto bg-white border border-b14 w-full h-auto rounded-2xl p-4 sm:p-6 md:p-8 lg:p-6' >
            {type === 1 ? <div className='absolute top-0 left-2 flex items-center bg-b9 w-fit px-3 rounded-b-2xl ml-2 justify-center h-6 gap-x-2 text-white' ><AiOutlineDollar /><span className='text-xs' >Best Value</span></div> : null}
            {type === 2 ? <div className='absolute top-0 left-2  flex items-center bg-b3 w-fit px-3 rounded-b-2xl ml-2 justify-center h-7 gap-x-2 text-white' ><img src="/svgs/local_fire_department.webp" alt="" /> <span className='text-xs' >Most Popular</span></div> : null}
            {type === 3 ? <div className='absolute top-0 left-2  flex items-center bg-b7 w-fit rounded-b-2xl ml-2 justify-center px-3 h-7 gap-x-2 text-white' ><img src="/svgs/star_rate_half.webp" alt="star_rate_half" /> <span className='text-xs' >Premium Condition</span></div> : null}
            <div className='flex flex-col items-center justify-center mt-4 w-full pb-4' >
                <div className='flex justify-center items-center text-center gap-x-1 text-sm sm:text-base xl:text-[22px]' ><h4 className='font-bold' >{title}:</h4><span className='font-semibold' >{stars} Stars</span></div>
                <div className='flex gap-x-3' ><StarIconPrinter numberOfTimes={stars} /></div>
                {type === 1 ? <h4 className='text-b9 font-semibold text-sm xl:text-base mt-3' >Moderate Cosmetic Damage</h4> : null}
                {type === 2 ? <h4 className='text-b9 font-semibold text-sm xl:text-base mt-3' >Minor Cosmetic Damage</h4> : null}
                {type === 3 ? <h4 className='text-b9 font-semibold text-sm xl:text-base mt-3' >very Minor To No Cosmetic Damage</h4> : null}
                <div className='flex items-center mt-2 gap-x-1 bg-b10 rounded-full px-2 py-1 text-white' ><AiOutlineCheckCircle className='text-lg' /><span className='text-xs xl:text-base' >100% Functional</span></div>
                <div className='relative pt-5 w-full' >
                    <ProductSlider products={products} />
                </div>

                <div className='flex flex-col gap-y-3 w-full mt-10' >
                    <div className='flex gap-4 sm:gap-x-10 md:gap-x-14 lg:gap-x-20 items-center' >
                        <span className='font-semibold text-[16px]' >Discount</span>
                        <div className='flex items-center px-5 border border-[#FF9B3E] rounded-full bg-[#FFFAF5] gap-x-4 py-3' >
                            <div className='flex gap-x-1' >
                                {discount === 1 ? <><span className='flex bg-b7 w-2 mt-2' ></span><span className='flex bg-b4 w-2 mt-1' ></span><span className='flex bg-b4 w-2 h-5' ></span></> : null}
                                {discount === 2 ? <><span className='flex bg-b4 w-2 mt-2' ></span><span className='flex bg-b7 w-2 mt-1' ></span><span className='flex bg-b4 w-2 h-5' ></span></> : null}
                                {discount === 3 ? <><span className='flex bg-b4 w-2 mt-2' ></span><span className='flex bg-b4 w-2 mt-1' ></span><span className='flex bg-b7 w-2 h-5' ></span></> : null}
                            </div>
                            <span className='font-semibold text-xs md:text-sm' >{dicount}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3' ><span className='font-semibold text-[16px]' >Cosmetic Damage</span><span className='grow text-center text-[rgba(17,16,16,0.64)] justify-center flex items-center px-3 py-2 border border-[#22A6AB] rounded-full bg-[#F2FFFF] text-xs md:text-'>{codmetics}</span></div>
                    <div className='flex gap-x-5' >
                        <div className='text-sm flex flex-col gap-y-2' >
                            <div className='flex text-sm' ><span>Class</span></div>
                            <div className='flex text-sm' ><span>Mechanical Test</span></div>
                            <div className='flex text-sm' ><span>Inspection</span></div>
                            <div className='flex text-sm' ><span>Warranty</span></div>
                        </div>
                        <div className='text-sm flex flex-col gap-y-2' >
                            <div className='flex gap-x-1 items-center text-sm' ><span>Open Box / Scratch & Dent</span></div>
                            <div className='flex gap-x-1 items-center text-sm' ><AiOutlineCheckCircle className='text-b6' /><h4>100%</h4></div>
                            <div className='flex gap-x-1 items-center text-sm' ><AiOutlineCheckCircle className='text-b6' /><h4>Passed</h4></div>
                            <div className='flex gap-x-1 items-center text-sm' ><img src="/nueshield.webp" className='w-4 h-4' alt="nueshield" /><span>1 Year Warranty</span></div>
                        </div>
                    </div>
                    <div className='mt-6 p-4 rounded-3xl border border-[rgba(34,166,171,0.50)] bg-[rgba(34,166,171,0.10)]'>
                        If you are shopping for bargains you are in the right place! 3-star rated appliances get you an open box appliance that works perfectly, with moderate cosmetic damage like scratches or dents at the largest discounted price we offer. Customers purchasing 3 star appliances capitalize on our deepest discounts in exchange for larger cosmetic blemishes while still obtaining a 100% functional appliance.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CosmatingRatingSlider