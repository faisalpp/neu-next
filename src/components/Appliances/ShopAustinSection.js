import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ShopAustinSection = () => {
    return (
        <div className='bg-b3'>
            <div className='shopaustin maincontainer'>
                <div className='order-2 lg:order-none'>
                    <h2>
                        Shop Austin&apos;s Best Scratch and Dent Appliances
                    </h2>
                    <p>
                        Offering Austin, Tx the BEST in Discounted Open Box Appliances and  Scratch and Dent Appliances.  Our Inventory is LIVE and changes QUICKLY, so if you see something you like Snag it ASAP before its gone!
                    </p>
                    <Link to="" className='inline-flex items-center maxmd:w-full justify-center p-4 rounded-lg gap-2 bg-b4 text-sm font-semibold'><HiOutlineShoppingCart /> <span>Shop Now</span></Link>
                </div>
                <div>
                    <img src="/shopaustin.webp" className='w-full h-auto 3xl:h-[560px] rounded-3xl' alt="shopaustin" />
                </div>
            </div>
        </div>
    )
}

export default ShopAustinSection