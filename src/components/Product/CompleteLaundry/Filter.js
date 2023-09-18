import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import LaundryCard from './LaundryCard'

const Filter = () => {
    return (
        <div className='flex flex-col gap-10 w-full'>
            <div className='flex gap-8 items-center'>
                <h3 className='whitespace-nowrap'>Filter by </h3>
                <div className='flex items-center flex-wrap gap-2'>
                    <button type='button' className='bg-b3 flex items-center gap-2 text-white font-semibold text-sm px-5 py-4 rounded-full'>
                        Cosmetic Ratings
                        <FiChevronDown className='text-lg' />
                    </button>
                    <button type='button' className='border border-b33 flex items-center gap-2 text-black font-semibold text-sm px-5 py-4 rounded-full'>
                        Popular Features
                        <FiChevronDown className='text-lg' />
                    </button>
                    <button type='button' className='border border-b33 flex items-center gap-2 text-black font-semibold text-sm px-5 py-4 rounded-full'>
                        Fuel Type
                        <FiChevronDown className='text-lg' />
                    </button>
                    <button type='button' className='border border-b33 flex items-center gap-2 text-black font-semibold text-sm px-5 py-4 rounded-full'>
                        Popular Brands
                        <FiChevronDown className='text-lg' />
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 2xl:grid-cols-2 gap-4'>
                <LaundryCard />
                <LaundryCard />
                <LaundryCard />
                <LaundryCard />
            </div>
        </div>
    )
}

export default Filter