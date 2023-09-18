import React from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

const Pagination2 = ({page,setPage,totalPages}) => {

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(
            <button type="button" key={i} onClick={() => setPage(i)} className={`flex justify-center items-center self-center cursor-pointer text-sm rounded-md py-1 w-8 ${page === i?'text-b6':'text-black'} `} >{i}</button>
          );
        }
        return pageNumbers;
      };

  return (
    <div className='flex flex-col justify-center items-center w-full mt-6' >
     <div  className='flex space-x-1' >
      <button type="button" onClick={()=>{page > 1 ? setPage(page - 1) : setPage(1)}} disabled={page === 1} className='flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit' ><AiOutlineArrowLeft className='text-base text-black' /></button>
      {renderPageNumbers()}
      <button type="button" onClick={()=>{page < totalPages && setPage(page + 1)}} disabled={page === totalPages} className='flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit' ><AiOutlineArrowRight className='text-base text-black' /></button>
     </div>
    </div>
  )
}

export default Pagination2