'use client'

import { useState } from 'react'
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineLogout, AiFillHome, AiFillGift, AiOutlineSearch } from 'react-icons/ai';
import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { CgSmartHomeWashMachine } from 'react-icons/cg';
import { FaBandcamp } from 'react-icons/fa'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsFillChatSquareHeartFill } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi';
import { showSCart, hideSCart } from '@/store/cartSlice'
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';

const Navbar = () => {

  const [mobMenu, setMobMenu] = useState(false);
  const [dealMenu, setDealMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);
  const [brandMenu, setBrandMenu] = useState(false);
  const sCart = useSelector((state) => state.cart.sCart)

  const dispatch = useDispatch()

  return (
    <>
      <div className='sticky top-0 z-50 flex justify-between bg-b1 text-white py-4 px-4 md:px-10' >
        <div className='flex gap-4 items-center'>
          {mobMenu ? <div onClick={() => setMobMenu(false)} className='flex items-center h-6 w-6 rounded-full text-white' ><IoCloseOutline className='text-white' /></div> : <div onClick={() => setMobMenu(true)} className='flex items-center h-6 w-6 rounded-full text-white' ><IoMenu className='w-6 h-6' /></div>}
          <Image src="/neu.webp" className='w-32' width={10} height={10} quality={1} alt='neuappliance' />
        </div>
        <div className='gap-8 flex items-center justify-end' >
          <AiOutlineSearch className='w-6 h-6' />
          <div onClick={() => { sCart ? dispatch(hideSCart()) : dispatch(showSCart()) }} className='relative items-center h-6 w-6 rounded-full text-white' ><AiOutlineShoppingCart className='h-6 w-6' /><span className='absolute -top-2 ml-3 bg-b3 rounded-full text-[8px] py-[3px] px-[7px] text-center' >2</span></div>
          <Link href="/my-account" className='flex items-center bg-b2 h-6 w-6 rounded-full text-white' ><BiUserCircle className='w-6 h-6' /></Link>
        </div>
      </div>

      <div style={{ height: `calc(100vh - 145px)` }} className={`${mobMenu ? 'fixed' : 'hidden'} lg:hidden right-0 bg-b1 w-2/3 overflow-y-scroll py-5 z-50`}>
        <div className='flex flex-col px-5 space-y-5 mt-2'>
          <Link href="/" ><div className='small___nav__item space-x-5 text-white' ><BiUserCircle className='text-2xl' /><h4>My Account</h4></div></Link>
          <Link href="/" ><div className='small___nav__item space-x-5 text-white' ><AiFillHome className='text-2xl' /><h4>Home</h4></div></Link>
          {/* Home Menu */}
          <div className='lg:hidden flex flex-col mt-2'>
            {/* Deals Menu Btn */}
            {dealMenu ? <div onClick={() => setDealMenu(false)} className='small___nav__item space-x-16 ' ><div className='flex items-center space-x-5' ><AiFillGift className='text-2xl' /><h4>Deals</h4></div><RiArrowDropUpLine className='text-2xl' /></div> : <div onClick={() => setDealMenu(true)} className='small___nav__item space-x-16' ><div className='flex items-center space-x-5' ><AiFillGift className='text-2xl' /><h4>Deals</h4></div><RiArrowDropDownLine className='text-2xl' /></div>}
            {/* Deals Menu Drop Down */}
            <div className={`${dealMenu ? 'flex' : 'hidden'} flex-col mt-5 space-y-2`}>
              <div className='small___nav__subitem'><h3>Recent Arrivals</h3></div>
              <div className='small___nav__subitem'><h3>4 Stars Products</h3></div>
              <div className='small___nav__subitem'><h3>3 Stars Products</h3></div>
              <div className='small___nav__subitem'><h3>5 Stars Products</h3></div>
            </div>
          </div>
          {/* Product Menu */}
          <div className='lg:hidden flex flex-col mt-2'>
            {/* Deals Menu Btn */}
            {productMenu ? <div onClick={() => setProductMenu(false)} className='small___nav__item space-x-10 ' ><div className='flex items-center space-x-5' ><CgSmartHomeWashMachine className='text-2xl' /><h4>Products</h4></div><RiArrowDropUpLine className='text-2xl' /></div> : <div onClick={() => setProductMenu(true)} className='small___nav__item space-x-10 ' ><div className='flex items-center space-x-5' ><CgSmartHomeWashMachine className='text-2xl' /><h4>Products</h4></div><RiArrowDropDownLine className='text-2xl' /></div>}
            {/* Deals Menu Drop Down */}
            <div className={`${productMenu ? 'flex' : 'hidden'} flex-col mt-5 space-y-2`}>
              <Link href="/products" ><div className='small___nav__subitem'><h3>Refrigerators</h3></div></Link>
              <Link href="/products" ><div className='small___nav__subitem'><h3>Washer & Dryers</h3></div></Link>
              <Link href="/products" ><div className='small___nav__subitem'><h3>Ranges</h3></div></Link>
              <Link href="/products" ><div className='small___nav__subitem'><h3>Dishwasher</h3></div></Link>
              <Link href="/products" ><div className='small___nav__subitem'><h3>Microwaves</h3></div></Link>
              <Link href="/products" ><div className='small___nav__subitem'><h3>All Categories</h3></div></Link>
            </div>
          </div>
          {/* Brands Menu */}
          <div className='lg:hidden flex flex-col mt-2'>
            {/* Brands Menu Btn */}
            {brandMenu ? <div onClick={() => setBrandMenu(false)} className='small___nav__item space-x-14 ' ><div className='flex items-center space-x-5' ><FaBandcamp className='text-2xl' /><h4>Brands</h4></div><RiArrowDropUpLine className='text-2xl' /></div> : <div onClick={() => setBrandMenu(true)} className='flex items-center bg-b2 rounded-md space-x-14 py-2 px-3 text-white' ><div className='flex items-center space-x-5' ><FaBandcamp className='text-2xl' /><h4>Brands</h4></div><RiArrowDropDownLine className='text-2xl' /></div>}
            {/* Brands Menu Drop Down */}
            <div className={`${brandMenu ? 'flex' : 'hidden'} flex-col mt-5 space-y-2`}>
              <div className='small___nav__subitem'><h3>Refrigerators</h3></div>
              <div className='small___nav__subitem'><h3>Washer & Dryers</h3></div>
              <div className='small___nav__subitem'><h3>Ranges</h3></div>
              <div className='small___nav__subitem'><h3>Dishwasher</h3></div>
              <div className='small___nav__subitem'><h3>Microwaves</h3></div>
              <div className='small___nav__subitem'><h3>All Categories</h3></div>
            </div>
          </div>

          <Link href="/" ><div className='small___nav__item space-x-5' ><GiReceiveMoney className='text-2xl' /><h4>Financing</h4></div></Link>
          <Link href="/" ><div className='small___nav__item space-x-5' ><BsFillChatSquareHeartFill className='text-2xl' /><h4>Testimonaials</h4></div></Link>
          <Link href="/" ><div className='small___nav__item space-x-5' ><AiOutlineLogin className='text-2xl' /><h4>Login</h4></div></Link>
          <Link href="/" ><div className='small___nav__item space-x-5' ><AiOutlineLogout className='text-2xl' /><h4>Logout</h4></div></Link>
        </div>
      </div>


    </>
  )
}

export default Navbar