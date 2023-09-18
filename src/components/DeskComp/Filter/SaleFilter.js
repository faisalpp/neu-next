import React from 'react'
import DropDown from '../Filter/DropDown'
import { Checkbox } from '@material-tailwind/react'

const SaleFilter = () => {
  return (
    <>
      <DropDown title="On Sale"  >
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} className='checked:bg-b3 checked:text-white' /><span className='flex text-sm w-max' >Yes</span></div>
          <div className="flex justify-end w-full text-xs" ><span>(84)</span></div>
        </div>
        {/* Item End */}
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} className='checked:bg-b3 checked:text-white' /><span className='flex text-sm w-max' >No</span></div>
          <div className="flex justify-end w-full text-xs" ><span>(84)</span></div>
        </div>
        {/* Item End */}
      </DropDown>
    </>
  )
}

export default SaleFilter