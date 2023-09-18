import React from 'react'
import {BsPencil} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const CustomerRow = ({name,lastActive,dateReg,email,orders,totalSpend}) => {
  return (
    <tr className="border-b border-l border-r border-b6 text-xs">
        <td className="whitespace-nowrap px-5 py-3 capitalize">{name}</td>
        <td className="whitespace-nowrap px-5 py-3 capitalize">{lastActive}</td>
        <td className="whitespace-nowrap  px-5 py-4 font-medium">{dateReg}</td>
        <td className="whitespace-nowrap  px-5 py-4 text-b6 font-medium"><a href={`mailto:${email}`} className='underline' >{email}</a></td>
        <td className="whitespace-nowrap  px-5 py-4 font-medium">{orders}</td>
        <td className="whitespace-nowrap  px-5 py-4 text-b6 font-medium">${totalSpend}</td>
        <td className="flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4">
         <NavLink title="View Section Item" to={`/admin/update-customer`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></NavLink>
        </td>
      </tr>
  )
}

export default CustomerRow