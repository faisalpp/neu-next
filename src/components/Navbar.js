'use client'

import { useEffect, useState } from 'react'
import DeskNavbar from '@/components/DeskComp/Navbar/Navbar'
import MobNavbar from '@/components/MobComp/Navbar'
import SideCart from '@/components/SideCart'

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 992);

    window.addEventListener('resize', () => {
      setIsDesktop(window.innerWidth >= 992);
    });

    return () => {
      window.removeEventListener('resize', () => { });
    };
  }, []);

  return (
    <>
      {isDesktop ? <DeskNavbar /> : <MobNavbar />}
      <SideCart />
    </>
  )
}

export default Navbar