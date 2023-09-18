import React from 'react'
import RatingProductSectionXl from '@/components/Sections/RatingProductSections/RatingProductSectionXl'
import RatingProductSectionLg from '@/components/Sections/RatingProductSections/RatingProductSectionLg'
import RatingProductSectionSm from '@/components/Sections/RatingProductSections/RatingProductSectionSm'

const RatingProductSection = () => {
  return (
    <div className='pb-8' >
      <RatingProductSectionXl stars={5} title={true} />
      <RatingProductSectionXl stars={4} title={false} />
      <RatingProductSectionXl stars={3} title={false} />
      <RatingProductSectionLg stars={5} title={true} />
      <RatingProductSectionLg stars={4} title={false} />
      <RatingProductSectionLg stars={3} title={false} />
      <RatingProductSectionSm stars={5} title={true} />
      <RatingProductSectionSm stars={4} title={false} />
      <RatingProductSectionSm stars={3} title={false} />
    </div>
  )
}

export default RatingProductSection