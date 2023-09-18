import React from 'react'

const Loader = () => {
  return (
     <div className='fixed flex items-center justify-center top-0 w-full h-screen z-40 bg-white/80' >
        <img src='/loading.gif' className='h-12' />
      </div> 
  )
}

export default Loader