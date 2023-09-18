import React from 'react'

const CustomButton = ({ ButtonName }) => {
    return (
        <div>
            <button type='submit' className='rounded-lg bg-b3 py-3 w-full text-white text-xs font-medium'>{ButtonName}</button>
        </div>
    )
}

export default CustomButton