import React from 'react'
import TickSvg from '../../svgs/TickSvg'

const PriceRangeCard = ({ title, items }) => {
    // console.log(items);
    return (
        <div className='p-7 sm:p-10 bg-white rounded-3xl'>
            <h3 className='font-bold text-b3 text-xl mb-6'>{title}</h3>
            <ul className='m-0 flex flex-col gap-4'>
                {items.map((item, index) => (
                    <li className='flex gap-3 items-center' key={index}>
                        <div className='w-6 h-6'>
                            <TickSvg />
                        </div>
                        <p className='maxmd:text-sm text-b18 text-left leading-6' dangerouslySetInnerHTML={{
                            __html: item.replace(/\n/g, '<br/>')
                        }}>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PriceRangeCard