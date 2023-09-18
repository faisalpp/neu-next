import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'

const FaqAccordion2 = ({ activeBg, activeText, title, answer,textStyle, parent, child, icon, chevrown, isExpand }) => {
  const [drp, setDrp] = useState(isExpand ? true : false);
  return (
    <>
      <div className={`duration-200 flex flex-col border border-b14 ${parent} ${drp ? activeBg : ''}`} >
        <div onClick={() => { drp ? setDrp(false) : setDrp(true) }} className='cursor-pointer flex items-center justify-between w-full gap-1' ><h6 className={`${drp ? activeText : ''} ${textStyle}`} >{title}</h6>
          <div>
            {chevrown ?
              <FiChevronDown className={`${icon} ${drp ? `rotate-180 ${activeText}` : ''} duration-200`} />
              :
              <AiOutlineArrowDown className={`${icon} ${drp ? `rotate-180 ${activeText}` : ''} duration-200`} />
            }
          </div>
        </div>
        <div className={` ${drp ? `flex ${activeText}` : 'hidden'} ${child} mt-1 duration-200`} >
          {answer}
        </div>
      </div>
    </>
  )
}

export default FaqAccordion2