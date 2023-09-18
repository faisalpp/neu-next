import React from 'react'
import { React360Viewer } from 'react-360-product-viewer'


const ThreeSixty = () => {
  return (
    <>
    <React360Viewer imagesBaseUrl="./360/" imagesCount={360} imagesFiletype="jpg" mouseDragSpeed={20} />
    </>
  )
}

export default ThreeSixty