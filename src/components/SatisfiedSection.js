'use client'

import React, { useState, useEffect } from 'react'
import ReviewExSlider from '@/components/ReviewExSlider'
import { getReviews } from '@/api/frontEnd'

const SatisfiedSection = ({ apiSectionName, title, dots, SectionStyle }) => {

  const [reviews, setReviews] = useState([])

  const GetLoopMedia = async () => {
    const data = { pageType: apiSectionName }
    const res = await getReviews(data);
    // console.log(res)
    if (res.status === 200) {
      setReviews(res.data.reviews)
    } else {
      setReviews([])
    }
  }
  useEffect(() => {
    GetLoopMedia()
  }, [])


  return (
    <div className={`flex flex-col justify-center maincontainer py-10 lg:py-16 xl:py-20 2xl:py-120px ${SectionStyle} ${dots ? 'mb-7' : ''}`} >
      {
        title ?
          <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-32px font-bold text-center pb-7 xl:pb-20' >{title}</h2>
          : null
      }
      <div className="relative" >
        <ReviewExSlider clientreviews={reviews} dots={dots} />
      </div>
    </div>
  )
}

export default SatisfiedSection