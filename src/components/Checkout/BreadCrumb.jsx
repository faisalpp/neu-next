import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { useLocation } from 'react-router-dom';

const BreadCrumb = () => {

    const location = useLocation();

    return (
        <div className='flex items-center my-4' >
            <h5 className='text-xs text-b3 font-medium'>Cart</h5>
            <RiArrowDropRightLine className={`text-xl text-b19 ${location.pathname === '/mycart/information' ? 'active' : ''}`} /><h5 className='text-xs text-b17 font-medium' >Information</h5>
            <RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-b17' >Shipping</h5>
            <RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-b17' >Payment</h5>
        </div>
    )
}

export default BreadCrumb