import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Popup = ({state,setState,children}) => {
  return (
    <div className={`fixed ${state?'flex':'hidden'} items-center justify-center top-0 z-50 h-screen bg-black/50 w-full`} >
     <div className='relative flex justify-center bg-white z-40 p-5 rounded-xl w-6/12'>
     <span onClick={()=>setState(false)} className='absolute top-0 -right-8 bg-b3 rounded-full px-1 py-1 cursor-pointer' ><AiOutlineClose className='text-sm text-white' /></span>
     {children}
     </div>
    </div>
  )
}

export default Popup