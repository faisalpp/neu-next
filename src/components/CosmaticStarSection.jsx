import React from 'react'
import CosmaticCard from '@/components/CosmaticCard'

const CosmaticStarSection = () => {
  return (
    <div className='flex flex-col bg-b8 pt-14' >
      {/* Heading Start  */}
      <div className='flex flex-col space-y-5 mt-5 items-center px-4 md:px-10 lg:px-0' >
        <h4 className='font-bold xl:text-[32px] lg:text-2xl lg:text-start text-xl text-center' >Our Cosmetic Star Rating System</h4>
        <p className='text-center font-semibold leading-normal lg:w-[980px] text-sm xl:text-[20px] lg:sm mt-2' >We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!</p>
      </div>
      {/* Heading End */}

      {/* Products Card Start */}
      <CosmaticCard />

      {/* Products Card End */}

    </div>
  )
}

export default CosmaticStarSection