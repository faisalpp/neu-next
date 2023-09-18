import React from 'react'
import CosmaticSlider from '../CosmaticSlider';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const RecentlyAddedSection = () => {


    return (
        <>
            <div className='py-10 lg:py-16 xl:py-20 maincontainer'>
                <h2 className='font-semibold text-xl lg:text-2xl text-center'>Recently Added Refrigerators</h2>

                <CosmaticSlider />

                <div className='flex justify-center mt-10 lg:mt-14'>
                    <Link to="" className='whitespace-nowrap inline-flex items-center gap-1 hover:gap-2 duration-300 px-4 py-3 rounded-lg text-b3 font-semibold text-sm 3xl:text-base border border-b3'>
                        <span>Shop All 3 Star Cosmetic Rating Appliances</span>
                        <AiOutlineArrowRight className="text-base" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RecentlyAddedSection