import React from 'react'
import { Link } from 'react-router-dom'
import LeftArrowSvg from '../../svgs/LeftArrowSvg'

const UpdateButton = ({ prevTitle, nextTitle, prevLink, nextLink,loading }) => {

    return (
        <div className='flex justify-between items-center w-full mt-5'>
            <Link to={prevLink} className='flex gap-1 items-center'>
                <LeftArrowSvg />
                <span className='text-sm font-medium text-b3'>
                    Return to {prevTitle}
                </span>
            </Link>
            <button type='submit' className='flex items-center py-3 px-6 text-xs rounded-lg bg-b3 text-white'>
                Continue to {nextTitle} {loading ? <img src="/loader-bg.gif" className="ml-2 w-4 h-4" />:null}
            </button>
        </div>
    )
}

export default UpdateButton