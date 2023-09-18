import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { Transition } from '@headlessui/react'

const DropDown = ({ title, children }) => {
  const [drp, setDrp] = useState(false);
  const [isShowing, setIsShowing] = useState(true)

  return (
    <>
      <div className='flex flex-col w-full border-b-[1px] py-4 h-auto' >
        {/* Controller */}
        <div className='flex items-center border-b-gray-300 cursor-pointer' onClick={() => setIsShowing((isShowing) => !isShowing)}><h6 className="font-bold w-72 text-sm" >{title}</h6><div className='flex items-center w-full justify-end' >{isShowing ? <RiArrowDropUpLine className='text-2xl' /> : <RiArrowDropDownLine className='text-2xl' />}</div></div>
        {/* Body */}
        <Transition show={isShowing} className='flex flex-col gap-2 h-auto mt-3 cursor-pointer'>
          {children}
        </Transition>

      </div>

    </>
  )
}

export default DropDown