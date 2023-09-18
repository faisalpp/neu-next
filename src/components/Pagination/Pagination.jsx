import React from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

const Pagination = ({page,setPage,totalPages}) => {

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(
            <button type="button" key={i} onClick={() => setPage(i)} className={`flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-8 ${page === i?'bg-b3 text-white border-[1px] border-b6-300':'border-[1px] border-gray-300'} `} >{i}</button>
          );
        }
        return pageNumbers;
      };

  return (
    <div className='flex flex-col justify-center items-center w-full mt-6' >
     <div  className='flex space-x-2' >
      <button type="button" onClick={()=>{page > 1 ? setPage(page - 1) : setPage(1)}} disabled={page === 1} className='flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3' ><IoIosArrowBack className='text-2xl text-white' /></button>
      {renderPageNumbers()}
      <button type="button" onClick={()=>{page < totalPages && setPage(page + 1)}} disabled={page === totalPages} className='flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3' ><IoIosArrowForward className='text-2xl text-white' /></button>
     </div>
     <p className='text-gray-400 text-sm' >
        Page {page} of {totalPages}
      </p>
    </div>
  )
}

export default Pagination