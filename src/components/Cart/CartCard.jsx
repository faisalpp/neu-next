import React from 'react'
import StockSvg from '../../svgs/StockSvg'
import { Radio, Typography } from "@material-tailwind/react";
import RadioSvg from '../../svgs/RadioSvg';
import ShipmentSvg from '../../svgs/ShipmentSvg';
import PickUpSvg from '../../svgs/PickUpSvg';
import ToolTip from '../ToolTip'
import { AiFillStar } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartCard = () => {
    return (
        <div className='relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-5 3xl:gap-10 p-4 sm:p-6 rounded-2xl border border-[0px_10px_60px_0px_rgba(0,0,0,0.10)] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.10)]'>
            <div>
                <img src="/cart/mycart.webp" className='w-40 h-40' alt="" />
            </div>
            <div className='flex items-start gap-2'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-b18 text-sm sm:text-base md:text-lg lg:text-xl md:leading-6 font-semibold'>White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls</h3>
                    <div className='flex  gap-2 maxmd:justify-between items-center'>
                        <div className='py-[10px] bg-b13 px-4 rounded-full text-white inline-flex gap-2 items-center'>
                            <StockSvg />
                            <span className=' font-semibold text-[12.408px] sm:text-sm'>In Stock</span>
                        </div>
                        <span className='text-[12.408px] font-medium text-[rgba(0,0,0,0.64)]'>
                            Only 2 left
                        </span>
                    </div>
                    <div className='flex maxlg:flex-col justify-between gap-2 lg:items-center'>
                        <div className='flex maxsm:flex-wrap gap-4 items-center'>
                            <span className='text-xl text-b3 font-semibold'>
                                $279.00
                            </span>
                            <span className='text-lg text-b25'>
                                <strike>
                                    $379.00
                                </strike>
                            </span>
                            <span className='flex items-center whitespace-nowrap px-3 py-2 bg-b4 text-sm font-semibold rounded-full'>
                                - 27%
                            </span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='flex gap-1 items-center'>
                                <span className='text-[rgba(36,36,36,0.50)] text-sm font-semibold'>
                                    Cosmetic Rating
                                </span>
                                <span>
                                    <ToolTip color="text-b3" />
                                </span>
                            </div>
                            <div className='inline-flex items-center'>
                                <AiFillStar className='text-b7 text-lg' />
                                <AiFillStar className='text-b7 text-lg' />
                                <AiFillStar className='text-b7 text-lg' />
                                <AiFillStar className='text-b7 text-lg' />
                            </div>
                        </div>
                    </div>
                    <div className="flex maxcosm:flex-col maxxs:justify-between sm:gap-10">
                        <Radio id="delivery" icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]' ripple={false} name="type" label={
                            <Typography className="font-medium text-sm text-b16 flex gap-4">
                                <ShipmentSvg />
                                <span>
                                    Delivery
                                </span>
                            </Typography>
                        } defaultChecked />
                        <Radio id="pickup" icon={<RadioSvg className="w-[18px] h-[18px]" />} className='border border-[#D9D9D9] bg-white w-[18px] h-[18px] p-0' ripple={false} name="type" label={
                            <Typography className="font-medium text-sm text-b16 flex gap-4">
                                <PickUpSvg />
                                <span>
                                    Pickup
                                </span>
                            </Typography>
                        } />
                    </div>
                </div>
                <div>
                    <button type='button' className='maxcosm:absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 p-2 bg-b8 rounded-full'>
                        <RiDeleteBin6Line className='text-b3 text-base' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartCard