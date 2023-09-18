import React from 'react'

const Card = (props) => {
  return (
   <div className='flex flex-col items-center space-y-1 border-[1px] border-b26 justify-center w-40 h-32 shadow-2xl rounded-2xl' >
    {props.icon}
    <h4 className='text-sm font-medium' >{props.count}</h4>
    <h4 className='text-sm font-medium' >{props.title}</h4>
   </div>
  )
}

export default Card