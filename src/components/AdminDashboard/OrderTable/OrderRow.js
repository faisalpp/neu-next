import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsFillTrashFill} from 'react-icons/bs'
import {BsPencil} from 'react-icons/bs'

const OrderRow = ({orderNo,date,status,id}) => {
  return (
    <tr className="border-b border-l border-r border-b6 text-xs">
        <td className="whitespace-nowrap px-5 py-3 capitalize">#{orderNo}</td>
        <td className="whitespace-nowrap px-5 py-3 capitalize">{date}</td>
        <td className="whitespace-nowrap px-5 py-3 capitalize">
          { status === 'Pending' ? <span className='bg-yellow-500/20 text-yellow-500 px-2 rounded-2xl py-1' >Pending</span>:null}
          { status === 'Rejected' ? <span className='bg-red-500/20 text-red-500 px-2 rounded-2xl py-1' >Rejected</span>:null}
          { status === 'Completed' ? <span className='bg-b6/20 text-b6 px-2 rounded-2xl py-1' >Completed</span>:null}
          { status === 'Processing' ? <span className='bg-b10/20 text-b10 px-2 rounded-2xl py-1' >Processing</span>:null}
        </td>
        <td className="whitespace-nowrap  px-5 py-4 text-b6 font-medium">$123.00</td>
        <td className="flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4">
         <NavLink title="View Section Item" to={`/admin/update-order`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></NavLink>
         <NavLink title="View Section Item" to={`/admin/delete-section`} className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsFillTrashFill className="text-base" /></NavLink>
        </td>
      </tr>
  )
}

export default OrderRow