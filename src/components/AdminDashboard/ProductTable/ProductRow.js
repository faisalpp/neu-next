import React from 'react'
import {BsPencil,BsFillTrashFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

const ProductRow = ({img,title,salePrice,regularPrice,rating}) => {

    const StarIconPrinter = ({ numberOfTimes }) => {
      const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
        <AiFillStar className='text-b7 text-base' /> // Render the star icon component for each iteration
      ));

      return <div className='flex justify-center items-center mt-2' >{starIcons}</div>; // Render the array of star icons
    };

  return (
    <tr className="border-b border-l border-r border-b6 text-xs">
        <td className="px-5 py-3 capitalize"><img src={img} className='w-14' /></td>
        <td className="whitespace-nowrap px-5 py-3 capitalize">{title}</td>
        <td className="whitespace-nowrap  px-5 py-4 font-medium"><strike>${salePrice}</strike></td>
        <td className="whitespace-nowrap  px-5 py-4 font-medium">${regularPrice}</td>
        <td className="whitespace-nowrap  px-5 py-4 text-b6 font-medium"><StarIconPrinter numberOfTimes={rating} /></td>
        <td className="flex items-center justify-center mt-3 space-x-1 px-5 py-4">
         <NavLink title="View Section Item" to={`/admin/update-customer`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></NavLink>
         <NavLink title="View Section Item" to={`/admin/delete-section`} className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsFillTrashFill className="text-base" /></NavLink>
        </td>
      </tr>
  )
}

export default ProductRow