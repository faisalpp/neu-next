import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Drayer = () => {
    return (
        <div className='flex flex-col gap-4 items-center w-full h-full' >
            <h4 className='text-xl font-semibold' >Dryer</h4>
            <div className='flex flex-col items-center justify-center py-10 border-dashed border-2 border-b3 rounded-xl h-full w-full' >
                <div className='flex flex-col items-center space-y-3' >
                    <FaQuestion className='text-4xl mb-4' />
                    <div className='flex justify-center' ><Link to="" className='flex items-center bg-b7 text-xs px-4 py-3 rounded-md text-white font-bold' ><span className='' >Choose A Dryer</span><BsArrowRightShort className='text-2xl' /></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Drayer