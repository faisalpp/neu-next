import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const GetScoop = () => {
    return (
        <div className='relative'>
            <div className='py-12 lg:py-16 xl:py-20 2xl:py-120px maincontainer'>
                <img src="insidescoop.webp" alt="insidescoop" className='-z-10 absolute top-0 left-0 right-0 bottom-0 w-full h-full' />
                <h2 className='text-white font-bold mb-10 lg:mb-16 xl:mb-20 text-2xl xl:text-3xl 2xl:text-32px text-center'>
                    Get the Inside Scoop
                </h2>
                <div className='max-w-[888px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6'>
                    {ScoopCards.map((scoopcard, index) => (
                        <Link key={index} to="/tips-forregerators-and-freezers" className='w-full h-full'>
                            <div className='flex items-center text-white bg-white/20 w-full h-full p-5 sm:p-7 xl:p-10 rounded-[19.021px] border border-white/50'>
                                <div className='bg-white min-w-[39px] h-[39px] sm:min-w-[56px] sm:h-[56px] flex items-center justify-center p-2 rounded-lg'>
                                    <img src={scoopcard.image} alt="" className='object-contain w-full h-full' />
                                </div>
                                <div className='flex ml-4 flex-col gap-2 w-full'>
                                    <h3 className='text-base coxs:text-lg font-bold'>{scoopcard.title}</h3>
                                    <span className='text-sm'>
                                        {scoopcard.tips} tips
                                    </span>
                                </div>
                                <div className='ml-2 sm:ml-4'>
                                    <FiChevronRight className='w-6 h-6' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GetScoop

const ScoopCards = [
    {
        image: 'refrigrator.webp',
        title: 'Refrigerators & Freezers',
        tips: 8,
    },
    {
        image: 'dryers.webp',
        title: 'Dryers',
        tips: 8,
    },
    {
        image: 'gasstoves.webp',
        title: 'Gas Stoves',
        tips: 8,
    },
    {
        image: 'refrigrator.webp',
        title: 'Refrigerators & Freezers',
        tips: 8,
    },
    {
        image: 'p1.webp',
        title: 'Washing Machines',
        tips: 8,
    },
    {
        image: 'dryers.webp',
        title: 'Dryers',
        tips: 8,
    },
]