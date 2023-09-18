import React from 'react'

const TextInput = (props) => {

  return (
    <div className={`flex flex-col space-y-1 ${props.width === 'full' ? 'w-full' : 'w-1/2'}`}>
    <div className="flex flex-col space-y-1">
      {props.title ? <h5 className='text-xs font-semibold' >{props.title} {props.iscompulsory === 'true' ? <i className='text-red-500' >*</i> : null}</h5> : null}<h5 className='text-red-500 text-xs' >{props.error ? props.errormessage : null}</h5>
      <input {...props} className={`text-sm outline-none border-[1px]  ${props.error ? 'border-red-500' : 'border-b31'} w-full px-4 h-10 rounded-lg placeholder:text-b25 text-xs`} />
    </div>
    </div>
  )
}

export default TextInput