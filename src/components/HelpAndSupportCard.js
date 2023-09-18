import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HelpAndSupportCard = ({title,slug,category,shortDescription}) => {
    return (
        <>
            <Link to={`/help-and-support/${category}/${slug}`} className='bg-[#F8FBFB] rounded-2xl px-8 py-6'>
                <div className='flex justify-between text-b18 items-center'>
                    <h3 className='font-bold text-lg'>{title}</h3>
                    <span>
                        <AiOutlineArrowRight className='text-lg' />
                    </span>
                </div>
                <p className='mt-4 text-sm leading-6'>
                    {shortDescription}
                </p>
            </Link>
        </>
    )
}

export default HelpAndSupportCard