'use client'

import React from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const NavBarLink = ({ name, url }) => {
  return (
    <Menu.Item as="div" className="px-2" ><Link to={url} className={({ isActive }) => isActive ? 'flex w-full px-2 first:mt-0 mt-1 cursor-pointer text-xs text-reg py-2 rounded-sm  hover:bg-b5 bg-b5 font-normal' : 'flex w-full px-2 cursor-pointer first:mt-0 mt-1 text-xs text-reg py-2 rounded-sm hover:bg-b5 font-normal'} >{name}</Link></Menu.Item>
  )
}

export default NavBarLink