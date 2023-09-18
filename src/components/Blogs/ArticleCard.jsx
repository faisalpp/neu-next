import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ image }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex gap-10'>
            <div className='lg:min-w-[384px]'>
                <img src={`/blogs/article/` + image} className='w-full h-auto xs:h-[333px]' alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-xl sm:text-2xl'>
                    How to Pick the Right Refrigerator
                </h2>
                <p className='leading-7 sm:leading-8 tracking-032'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula. Aenean lacus libero, varius sed elit eu, pellentesque malesuada arcu. Ut id porta erat. Phasellus luctus metus imperdi.
                </p>
            </div>
        </div>
    )
}

export default ArticleCard