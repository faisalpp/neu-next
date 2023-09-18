import React from 'react'

const Ifram = ({style,src,title}) => {
  return (
    <iframe className={`${style}`} src={src} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
  )
}

export default Ifram