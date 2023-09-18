'use client'

import React from 'react'
import { IoLocationOutline, IoSendSharp } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import {
  FaFacebookF
  , FaInstagram, FaTwitter
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='flex justify-center bg-b1 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
      <div className="grid sm:grid-cols-12 gap-5 sm:gap-10 lg:gap-2 bg-b1 py-20" >

        {/* Logo Section Start */}
        <div className='order-4 sm:order-none sm:col-span-6 lg:col-span-3 flex flex-col space-y-10' >

          {/* Nav Logos */}
          <div className='flex flex-col gap-y-10  text-white' >
            <h4 className='w-max text-white text-lg font-bold font-reg' >Our Companies</h4>
            <div className='flex flex-col space-y-2' >
              <Link to="/">
                <Image className='w-32 h-12' src="/neu.webp" alt="logo2" />
              </Link>
              <p className='text-xs text-white/60 font-normal' >Shop Austin's #1 Local Discount Appliance Outlet</p>
            </div>
          </div>

          {/* Nav Logo 2 */}
          <div className='flex flex-col gap-y-2 text-white' >
            <a href="https://neuapplianceparts.com/" target='_new'>
              <Image className='w-32 h-12' src="/neu2.webp" alt="logo2" />
            </a>
            <p className='text-xs text-white/60 font-normal' >Shop Discount Appliance Repair Parts</p>
          </div>

          {/* Nav Logo 3 */}
          <div className='flex flex-col gap-y-3 text-white' >
            <a href="https://neuappliancewholesale.com/" target='_new'>
              <Image className='w-32 h-12' src="/neu3.webp" alt="logo3" />
            </a>
            <p className='text-xs text-white/60 font-normal' >Wholesale Supply Distributor of Bulk Scratch and Dent Appliances to Appliance Vendor's across the Country</p>
          </div>

        </div>
        {/* Logo Section End */}

        {/* Quick Links Section Start */}
        <div className='order-2 sm:order-none sm:col-span-6 lg:col-span-3' >
          <h4 className='w-max text-white text-lg font-bold font-reg' >Quick Links</h4>
          <div className='flex flex-col text-white/60 text-base font-normal gap-y-5 mt-10 hover:[&>a]:underline hover:[&>a]:cursor-pointer' >
            <Link to=''>Shop Now</Link>
            <Link to=''>Shop On Sale</Link>
            <Link to='/how-it-works/what-we-sell'>Live Inventory</Link>
            <Link to=''>Virtual Showroom</Link>
            <Link to='/financing'>Financing</Link>
            <Link to=''>Discount Appliances in Stock</Link>
            <Link to=''>Austin Appliance Liquidation</Link>
            <Link to=''>Used Appliances</Link>
            <Link to='/appliance-repair'>Appliance Repair</Link>
            <Link to='/helpful-appliances-tips'>Helpful Appliance Tips</Link>
          </div>
        </div>
        {/* Quick Links Section End */}

        {/* Quick Links Section 2 Start */}
        <div className='order-3 sm:order-none sm:col-span-6 lg:col-span-3 lg:mt-0 flex flex-col text-white/60 text-base font-normal gap-y-5 sm:pt-[65px] hover:[&>a]:underline hover:[&>a]:cursor-pointer' >
          <Link to=''>Our Brands</Link>
          <Link to=''>Delivery</Link>
          <Link to='/measuring-guide'>Appliance Measuring Guide</Link>
          <Link to='/do-i-have-electric-or-gas'>Do I have Electric or Gas?</Link>
          <Link to='/appliancetypes'>Our Products</Link>
          <Link to='/faqs'>FAQ</Link>
          <Link to=''>Contact</Link>
          <Link to=''>Terms</Link>
          <Link to=''>Refunds</Link>
          <Link to=''>Privacy Policy</Link>
        </div>
        {/* Quick Links Section 2 End */}

        {/* Quick Links Section 2 Start */}
        <div className='order-1 sm:order-none sm:col-span-6 lg:col-span-3 flex flex-col h-full text-white text-sm' >
          {/* Email Address */}
          <div>
            <h4 className='font-bold text-lg' >Get Latest Discount Offers</h4>
            <div className='col-start-4 col-end-8 mt-3 flex items-center bg-b2 h-10 px-3 rounded-lg space-x-2 w-full ' ><input type="text" placeholder='Email Address' className="bg-b2 w-full text-xs text-white/90 outline-none" /><IoSendSharp className='text-white' /></div>
          </div>
          {/* Follow Us */}
          <div className='flex flex-col py-4 lg:items-start sm:items-center gap-y-3 mt-5' >
            <h4 className='font-bold text-lg' >Follow Us</h4>
            <div className='flex space-x-2' >
              <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaFacebookF /></span>
              <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaInstagram /></span>
              <span className='flex items-center justify-center w-10 h-10 rounded-full bg-b2' ><FaTwitter /></span>
            </div>
          </div>
          {/* Contact Us */}
          <div className='flex flex-col mt-10 lg:items-start sm:items-center gap-y-3 lg:mt-5' >
            <h4 className='font-bold text-lg' >Contact Us</h4>
            <div className='flex flex-col gap-y-5' >
              <div className='flex items-center space-x-2' ><span className='flex items-center justify-center w-9 h-9 rounded-full bg-b2' ><FiPhone /></span><span className='text-sm' >(512) 992-2714</span></div>
              <div className='flex items-center space-x-2' ><span className='flex items-center justify-center w-9 h-9 rounded-full bg-b2' ><IoLocationOutline /></span><span className='text-sm' >123 N Loop Blvd E, Austin, TX 78751</span></div>
              <div className="mapouter"><div className="gmap_canvas"><iframe title="map" className='rounded-xl w-full maxmd:h-[150px]' width="300" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=Austin&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><br /></div></div>
            </div>
          </div>

        </div>
        {/* Quick Links Section 2 End */}

      </div>
    </div>
  )
}

export default Footer