import React from 'react'

const PaymentOptions = ({ item }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5 justify-center w-full' >
      <div className='h-full flex justify-center lg:justify-end'>
        <div className='flex flex-col gap-5 px-12 py-9 bg-white rounded-2xl w-full max-w-[400px] lg:w-[400px]' >
          <div className='flex flex-col gap-y-3 items-center justify-center w-full' >
            <h6 className='text-lg xl:text-xl 2xl:text-2xl font-bold' >Pay Once</h6>
            <h6 className='text-xl lg:text-2xl 2xl:text-[32px] font-bold text-b3' >${item.salePrice ? item.salePrice : item.regularPrice}</h6>
            <h6 className='text-xs font-medium text-gray-500' >One time payment</h6>
          </div>
          <div className='flex flex-col gap-y-4 text-b15' >
            <div className='flex text-sm justify-between' ><span>Eu sagittis ameta</span><span>$399.99</span></div>
            <div className='flex text-sm  justify-between' ><span>Eu sagittis ameta</span><span>$29.99</span></div>
            <div className='flex text-sm  justify-between' ><span>Eu sagittis amet a</span><span>Free</span></div>
            <div className='flex py-2 text-sm border-t-[1px] border-gray-200' ><h6 className='w-52 font-bold' >Enim sed cras</h6><div className='flex justify-end w-full' ><h6 className='font-semibold' >$399.99</h6></div></div>
            <button className='flex items-center justify-center text-white py-4 rounded-md bg-b7 text-sm mt-3' >Start your purchase</button>
          </div>
        </div>
      </div>

      <div className='h-full flex justify-center lg:justify-start'>
        <div className='flex flex-col gap-5 px-12 py-9 rounded-2xl bg-white w-full max-w-[400px] lg:w-[400px]' >
          <div className='flex flex-col gap-y-3 items-center justify-center w-full' >
            <h6 className='text-lg xl:text-xl 2xl:text-2xl font-bold' >Pay Monthly</h6>
            <h6 className='text-xl lg:text-2xl 2xl:text-[32px] font-bold text-b3' >${item.highInstallment} -${item.lowerInstallment}</h6>
            <h6 className='text-xs font-medium text-gray-500' >per month</h6>
          </div>
          <div className='flex border justify-between px-3 py-1 border-b3 w-[250px] mx-auto rounded-lg'>
            <div className='flex flex-col gap-1'>
              <span className='font-bold text-sm'>
                No credit Financing
              </span>
              <span className='font-semibold text-[10px]'>
                Powered by
              </span>
            </div>
            <img src="/affirm.webp" alt="affirm" className='w-[70px]' />
          </div>
          <div className='flex flex-col gap-5' >
            <p className='text-xs text-center text-b15 font-medium' >Vestibulum habitant hac sollicitudin convallis hendrerit. In pretium eget amet nibh vulputate felis vitae neque aliquam. Nibh nam varius ut.</p>
            <p className='text-xs text-center text-b15' >Interdum posuere tempor ante eu porta. </p>
            <button className='flex items-center justify-center text-white py-4 rounded-md bg-b7 text-sm' >Get Your Terms</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PaymentOptions