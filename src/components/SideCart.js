'use client'

import React, { useEffect, useState, useRef } from 'react'
import { AiOutlineArrowRight, AiOutlineClose, AiOutlineShop } from 'react-icons/ai'
import { HiOutlineTruck } from 'react-icons/hi'
import { FaDotCircle } from 'react-icons/fa'
import SideCartCard from './Cart/SideCartCard'
import { useSelector } from 'react-redux';
import { GoDotFill } from 'react-icons/go'
import SelectTimeSlot from './Cart/SelectTimeSlot'
import { getCart, removeFromCart, updateCartData } from '../api/cart'
import { resetUser } from "../store/userSlice";
import { showSCart, hideSCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router-dom'
import { usePathname } from 'next/navigation'
import { toast } from 'react-toastify'
import { BsCart3 } from 'react-icons/bs'
import Image from 'next/image'

const SideCart = () => {
  const [cartCount, setCartCount] = useState('')
  const userId = useSelector((state) => state.user._id)
  const [pickupOrders, setPickupOrders] = useState([]);
  const [deliveryOrders, setDeliveryOrders] = useState([]);
  const [pickupLocation, setPickupLocation] = useState('')
  const sCart = useSelector((state) => state.cart.sCart);
  const [total, setTotal] = useState(0)

  const dispatch = useDispatch();
  const navigate = usePathname();
  // const navigate = useNavigate();


  // Cart Time Slot Functions
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Select Time Slot Data 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('')
  // Zip Code Location
  const [zip, setZip] = useState('')

  // checkout loader
  const [chkLoader, setChkLoader] = useState(false)

  const UpdateCart = async () => {
    setChkLoader(true)
    const data = { userId: userId, pickupLocation: pickupLocation, deliveryLocation: zip, deliveryDate: selectedDate, deliveryTime: timeSlot, total: total }
    const res = await updateCartData(data)
    console.log(res)
    if (res.status === 200) {
      setChkLoader(false)
      navigate('/mycart/information')
      dispatch(hideSCart())
    } else if (res.code === 'ERR_BAD_REQUEST') {
      setChkLoader(false)
      dispatch(resetUser());
      toast.error('Please Login To Proceed!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setChkLoader(false)
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  useEffect(() => {
    const currentDateMonth = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthName = monthNames[currentDateMonth.getMonth()]
    // Create a new Date object
    const currentDate = new Date();
    // Get the current date
    const currentDay = currentDate.getDate();
    setTimeSlot(`${currentMonthName} ${currentDate} - 8am - 12am`)
  }, [])

  const GetCart = async () => {
    setLoading(true)
    const res = await getCart({ userId })
    console.log(res)
    if (res.status === 200) {
      if (res.data.cart.length > 0) {
        setPickupOrders(res.data.cart[0].pickupOrders)
        setDeliveryOrders(res.data.cart[0].deliveryOrders)
        setZip(res.data.cart[0].deliveryLocation)
        setPickupLocation(res.data.cart[0].pickupLocation)
        setCartCount(res.data.cart[0].cartCount)
      }
      setLoading(false)
    } else if (res.code === 'ERR_BAD_REQUEST') {
      setLoading(false)
      dispatch(resetUser());
      toast.error('Please Login To Proceed!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setLoading(false)
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  useEffect(() => {
    if (sCart) {
      GetCart()
    }
  }, [sCart])

  const RemoveFromCart = async (e, proId, type) => {
    e.preventDefault()
    const data = { id: proId, userId, type }
    const res = await removeFromCart(data)
    console.log(data)
    if (res.status === 200) {
      toast.success("Product Removed From Cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      GetCart()
    } else if (res.code === 'ERR_BAD_REQUEST') {
      dispatch(resetUser());
      toast.error('Session Expired!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/');
    } else {
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }


  const calculateTotalPrice = (orders) => {
    let totalPrice = 0;
    for (const order of orders) {
      if (order.salePrice !== undefined) {
        totalPrice += order.salePrice;
      } else if (order.regularPrice !== undefined) {
        totalPrice += order.regularPrice;
      }
    }
    return totalPrice;
  }
  useEffect(() => {
    const deliveryOrdersTotal = calculateTotalPrice(deliveryOrders)
    const pickupOrdersTotal = calculateTotalPrice(pickupOrders)
    setTotal(pickupOrdersTotal + deliveryOrdersTotal)
  }, [deliveryOrders, pickupOrders])


  return (
    <div className={` ${sCart ? 'top-0 lg:right-0' : 'maxlg:-top-[200vh] lg:-right-[200%]'} maxlg:pt-28 duration-500 fixed  z-[999] bg-black/60 w-full h-screen`} >

      <div className={` ${sCart ? '' : 'hidden'} relative mx-auto lg:float-right bg-white w-[90%] maxlg:rounded-t-2xl sm:w-[80%] lg:max-w-[420px] lg:w-full h-full`} >
        <button onClick={() => { sCart ? dispatch(hideSCart()) : dispatch(showSCart()) }} className='maxlg:w-10 maxlg:h-10 bg-white maxlg:hover:bg-b3 maxlg:hover:text-white duration-200 maxlg:rounded-full absolute -top-14 right-0 lg:top-5 lg:right-6 z-40  xy-center'><AiOutlineClose className='text-xl' /></button>
        <div className='flex flex-col overflow-y-auto w-full h-full'>
          <div className='flex items-center sticky top-0 bg-white maxlg:rounded-t-2xl py-5 px-6 justify-between' ><div className='flex items-center gap-x-3' ><h4>My Cart</h4>{pickupOrders.length === 0 && deliveryOrders.length === 0 ? null : <span className='bg-b3 text-white rounded-full text-xs w-5 h-5 xy-center' >{cartCount}</span>}</div></div>
          {loading ? <div className='xy-center h-full w-full' ><Image width={200} height={200} src="/loader-bg.gif" quality={1} alt='loader' className='w-10 h-10 ml-2' /></div> : pickupOrders.length === 0 && deliveryOrders.length === 0 ?
            <div className='flex flex-col px-2 space-y-5 w-full justify-center items-center h-full' >
              {/* <Image width={200} height={200} src="/bag.webp" quality={1} alt='bag' /> */}
              <h1 className='font-extrabold' >Your Cart is Empty</h1>
              <h2 className='text-center' >Lorem Ipsum Doller Sit Amet, Consecture Audipicsing Elit</h2>
              <button type='button' className='xy-center rounded-lg bg-b3 py-3 text-white font-medium w-1/2 text-sm'><BsCart3 className='mr-2' /> Start Shopping</button>
            </div>
            :
            <>
              <div style={{ 'height': 'calc(100vh - 200px)' }} className='flex flex-col overflow-y-auto' >
                {deliveryOrders.length > 0 ? <div className='flex flex-col rounded-lg px-6 py-5 mx-5 mb-5 border border-gray-200 ' >
                  <h4 className='font-semibold' >Delivery Orders</h4>
                  {/* Cart Product */}
                  <div className='flex flex-col gap-6 space-y-2 mb-3 w-full'>
                    {deliveryOrders.map((item, index) => <SideCartCard key={index} item={item} RemoveFromCart={RemoveFromCart} type="delivery" />)}
                  </div>
                  {/* Cart Product End */}

                  <div className='border flex flex-col gap-4 lg:mt-0 mt-3 border-gray-200 rounded-md py-3 px-3' >
                    <div className='flex items-center justify-between' >
                      <div className='flex items-center space-x-1' ><FaDotCircle className='text-b3' /><HiOutlineTruck className='text-2xl' />
                        <h4 className='text-sm font-medium' >Delivering To</h4>
                      </div>
                      <h4 className='text-b3 font-semibold' >$80</h4>
                    </div>
                    <input type="text" value={zip} onChange={setZip} className='border border-b14 p-[10px] rounded-lg outline-none w-full' />
                    <div ref={dropdownRef} className='relative'>
                      <button onClick={toggleDropdown} className='w-full rounded-lg flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                          <span className='w-[18px] h-[18px]'>
                            <Image width={200} height={200} src="/svgs/calendar_month.webp" alt="calendar_month" />
                          </span>
                          <span className='text-xs font-medium text-b3'>
                            Select Time-slot
                          </span>
                        </div>
                      </button>
                      {isOpen && (
                        <SelectTimeSlot timeSlot={timeSlot} setTimeSlot={setTimeSlot} selectDate={selectedDate} setSelectDate={setSelectedDate} />
                      )}

                    </div>

                  </div>

                </div> : null}

                {pickupOrders.length > 0 ? <div className='flex flex-col rounded-lg px-6 py-5 mx-5 mb-5 border border-gray-200 ' >
                  <h4 className='font-semibold' >Pickup Orders</h4>
                  {/* Cart Product */}
                  <div className='flex flex-col gap-6 space-y-2 mb-3'>
                    {pickupOrders.map((item, index) => <SideCartCard key={index} item={item} RemoveFromCart={RemoveFromCart} type="pickup" />)}
                  </div>
                  {/* Cart Product End */}

                  <div className='border flex flex-col lg:mt-0 mt-3 border-gray-200 rounded-md py-3 px-1' >
                    <div className='flex flex-col space-y-2' >

                      <div className='flex items-center px-2 space-x-2' >
                        <div className='flex' ><span onClick={() => setPickupLocation('Georgetown Warehouse')} className={`px-[2px] py-[2px] rounded-full cursor-pointer ${pickupLocation === 'Georgetown Warehouse' || '' ? 'bg-b6/20' : 'bg-gray-100'} `} ><GoDotFill className={` ${pickupLocation === 'Georgetown Warehouse' ? 'text-b6' : 'text-gray-200'} `} /></span></div>
                        <AiOutlineShop className='text-3xl text-gray-400' />
                        <h4 className='text-sm font-normal text-gray-400 w-full' >Pickup in the store Georgetown Warehouse</h4>
                        <h4 className='text-sm font-normal text-gray-400' >Free</h4>
                      </div>
                      <div className='flex items-center px-2 pt-2 space-x-2 border-t-[1px] border-gray-200' >
                        <div className='flex' ><span onClick={() => setPickupLocation('Austin, Tx')} className={`px-[2px] py-[2px] rounded-full cursor-pointer ${pickupLocation === 'Austin, Tx' ? 'bg-b6/20' : 'bg-gray-100'} `} ><GoDotFill className={` ${pickupLocation === 'Austin, Tx' ? 'text-b6' : 'text-gray-200'} `} /></span></div>
                        <AiOutlineShop className='text-3xl text-gray-400' />
                        <h4 className='text-sm font-normal text-gray-400 w-full' >Pickup in the store Austin, Tx</h4>
                        <h4 className='text-sm font-normal text-gray-400' >Free</h4>
                      </div>
                    </div>


                  </div>

                </div> : null}
              </div>
              <div className=' border-t border-gray-300 p-6 flex flex-col justify-end gap-6'>
                <div className='flex justify-between'>
                  <span className='text-sm'>
                    Order Total
                  </span>
                  <span className='font-bold'>
                    ${total}
                  </span>
                </div>

                <button type='button' onClick={UpdateCart} className='text-xs text-white rounded-lg bg-b3 px-4 py-3 flex gap-2 justify-center'>
                  Proceed to Checkout
                  <AiOutlineArrowRight className='text-base' />
                  {chkLoader ? <Image width={200} height={200} src="/loader-bg.gif" alt='loader-bg' className='w-4 h-4' /> : null}
                </button>
              </div></>}
        </div>
      </div>

    </div>
  )
}

export default SideCart