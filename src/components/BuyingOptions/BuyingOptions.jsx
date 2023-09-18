import React, { useState } from 'react'
import { BsGrid } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { AiFillStar, AiOutlineArrowRight } from 'react-icons/ai'
import ToolTip from '../ToolTip'

const BuyingOptions = () => {
    const [isGrid, setIsGrid] = useState(true);
    const StarIconPrinter = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar key={index} className='text-b7 text-lg' /> // Render the star icon component for each iteration
        ));

        return <div className='flex items-center' >{starIcons}</div>; // Render the array of star icons
    };
    return (
        <div className='my-60px'>
            <div className='flex justify-between w-full whitespace-nowrap'>
                <h2 className='text-black font-bold text-2xl'>Buying Options</h2>
                <div className='flex items-center space-x-5 w-full justify-end' ><BsGrid className={`cursor-pointer ${isGrid ? 'text-b3' : ''}`} onClick={() => setIsGrid(true)} /><FaBars className={`cursor-pointer ${isGrid ? '' : 'text-b3'}`} onClick={() => setIsGrid(false)} /></div>
            </div>
            <div className='my-10 flex gap-8 items-center'>
                <h3>Filter by Cosmetic Ratings</h3>
                <div className='flex items-center gap-10px'>
                    <button className='px-5 py-4 rounded-full border border-b33 text-sm font-semibold'>Show All</button>
                    {tabButtons.map((item, index) => (
                        <button key={index} className='flex gap-10px items-center justify-center px-5 py-4 rounded-full border border-b33 text-sm font-semibold'>{item.title} <StarIconPrinter numberOfTimes={item.rating} /></button>
                    ))}
                </div>
            </div>
            {/* Product Card */}
            <div className={`grid gap-6 ${isGrid ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                {productCards.map((item, index) => (
                    <div key={index} className={`border border-b14 rounded-2xl p-6 ${isGrid ? '' : 'flex gap-4 items-center'}`}>
                        <div className='min-w-[222px] min-h-[270px] relative'>
                            <img src="/p1.webp" alt="p1" className={`object-contain w-[222px] h-[270px] ${isGrid ? 'mx-auto' : ''}`} />
                            <div className='absolute -right-3 -top-3 flex items-center justify-center text-sm text-b16 font-semibold px-3 py-2 bg-b7 rounded-full'>50% Off</div>
                        </div>
                        <div className='mt-6 flex flex-col w-full gap-5'>
                            <div className='flex justify-between items-center'><span className='text-b15 text-sm font-semibold'>ID Number</span>12344590-1234</div>
                            <div className='flex justify-between items-center'><span className='text-b15 text-sm font-semibold'>Model Number</span>WF45B6300AC</div>
                            <div className='flex gap-10px items-center'>
                                <h3 className='lg:text-sm text-xs font-semibold w-max text-b15 flex items-center gap-1' >Cosmetic <br /> Rating <ToolTip color="text-b15" /></h3>
                                <StarIconPrinter numberOfTimes={5} />
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-b3 text-xl font-semibold'>$279.00</span>
                                <span className='flex gap-2 items-center'>
                                    <strike className='text-b23'>$279.00</strike> <span className='bg-b4 px-2 py-1 rounded-full text-xs text-b16 font-semibold'>- 27%</span>
                                </span>
                            </div>
                            <div className='flex items-center gap-10px'>
                                <span className='text-b15 font-semibold text-sm'>Disbcount %</span>
                                <div className='grow bg-black/[0.08] rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-3/5 h-2' ></span></div>
                            </div>
                            <button className='bg-b7 w-full hover:underline px-4 py-3 rounded-lg flex items-center justify-center gap-1 font-semibold text-xs text-white'>View Appliance <AiOutlineArrowRight className='text-white' /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
const tabButtons = [
    { title: '5 Star rating', rating: 5 },
    { title: '4 Star rating', rating: 4 },
    { title: '3 Star rating', rating: 3 },
]

const productCards = [
    { image: '', idno: '', modelno: '', rating: '', price: '', discountprice: '', discount: '' },
    { image: '', idno: '', modelno: '', rating: '', price: '', discountprice: '', discount: '' },
    { image: '', idno: '', modelno: '', rating: '', price: '', discountprice: '', discount: '' },
    { image: '', idno: '', modelno: '', rating: '', price: '', discountprice: '', discount: '' },
    { image: '', idno: '', modelno: '', rating: '', price: '', discountprice: '', discount: '' },
    { image: '', idno: '', modelno: '', rating: '', price: '', discountprice: '', discount: '' },
    { image: '', idno: '', modelno: '', rating: '', price: '', discountprice: '', discount: '' },
    { image: '', idno: '', modelno: '', rating: '', price: '', discountprice: '', discount: '' }
]
export default BuyingOptions
