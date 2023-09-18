import React from 'react'

const ProductFeatures = ({ video }) => {
  return (
    <>
      <div id='product-features' className='flex flex-col py-10 lg:py-14 xl:py-20 maincontainer' >
        <div className='flex justify-center items-center flex-col w-full' >
          <h4 className='font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center' >Appliance Features</h4>
          <p className='text-base lg:text-lg xl:text-xl 2xl:max-w-[950px] font-medium text-center mt-4'>Follow along as our team takes a deep dive into the functions and features of this model appliance.</p>
          <video controls src={`${import.meta.env.REACT_APP_INTERNAL_PATH}/${video}`} className='w-full md:w-3/4 h-[500px] 2xl:w-[1200px] 2xl:h-[565px] mt-14 rounded-2xl object-cover' />
        </div>
      </div>
    </>
  )
}

export default ProductFeatures