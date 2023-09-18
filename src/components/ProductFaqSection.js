import React from 'react'
import FaqAccordion from './FaqAccordion'
import Faqs from './GeneralFaqs/Faqs'

const ProductFaqSection = () => {
  return (
    <>
      <div id='faq'>
        <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-5 text-center maincontainer" >FREQUENTLY ASKED QUESTIONS</h2>
        <Faqs />
      </div>
    </>
  )
}

export default ProductFaqSection