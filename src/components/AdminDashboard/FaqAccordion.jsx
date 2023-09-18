import React from 'react'
import { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const FaqAccordion = ({ DeleteFaq,setUpdatedFaqId,setUpdateQuestion, setUpdatedAnswer,setUpdatePopup,id,activeBg, activeText, title, textStyle, answer, parent, child, icon, isExpand }) => {
  const [drp, setDrp] = useState(isExpand ? true : false);
  return (
    <>
      <div onClick={() => { drp ? setDrp(false) : setDrp(true) }} className={`duration-200 flex flex-col border-[1px] border-gray-200 cursor-pointer ${parent} ${drp ? activeBg : ''}`} >
        <div className='flex items-center justify-between w-full gap-1' ><h6 className={`${drp ? activeText : ''} ${textStyle}`} >{title}</h6>
          <div className='flex items-center space-x-1' >
          <span onClick={()=>{setUpdatedFaqId(id);setUpdateQuestion(title);setUpdatedAnswer(answer);setUpdatePopup(true);}} className='p-1 bg-b6 hover:bg-white border-b3 border-2  rounded-full cursor-pointer group' ><BsPencil className='text-white group-hover:text-b3 text-sm shadow-xl' /></span>
          <span onClick={e=>DeleteFaq(e,id)} className='p-1 bg-red-500 hover:bg-white border-red-500 border-2  rounded-full cursor-pointer group' ><FaTrash className='text-red-300 group-hover:text-red-500 text-sm shadow-xl' /></span>
            <AiOutlineArrowDown className={`${icon} ${drp ? `rotate-180 ${activeText}` : ''} duration-200`} />
          </div>
        </div>
        <div className={` ${drp ? `flex ${activeText}` : 'hidden'} ${child} mt-1 duration-200`} >
          <p>{answer}</p>
        </div>
      </div >
    </>
  )
}

export default FaqAccordion