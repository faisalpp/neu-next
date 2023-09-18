import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaQuestion } from 'react-icons/fa'

const EmptyDryerCard = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full lg:w-[380px] xl:w-[450px] h-full' >
        <h4 className='text-xl font-semibold' >Dryer</h4>
        <div className='flex flex-col items-center justify-center py-10 border-dashed border-2 border-b3 rounded-xl h-full w-full' >
          <div className='flex flex-col items-center space-y-3' >
            <FaQuestion className='text-xl' />
            <div className='flex justify-center' ><a href='' className='flex items-center bg-b7 w-fit px-4 py-3 rounded-md text-white font-bold' ><span className='' >Choose A Dryer</span><BsArrowRightShort className='text-3xl' /></a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyDryerCard