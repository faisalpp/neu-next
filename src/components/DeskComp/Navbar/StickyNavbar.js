import React from 'react'
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const StickyNavbar = ({ state, product }) => {
  // Scroll Sticky Navbar Item to Sections
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const offset = -150;
      const topPosition = targetSection.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <div className={`fixed top-0 z-50 ${state ? 'lg:flex' : 'hidden'} flex-col w-full bg-white shadow-lg`} >
        <div className='bg-gray-100 maxlg:hidden'>
          <div className='lg:flex items-center py-5 justify-center maincontainer' >

            <div className='flex space-x-5 items-center w-6/12 max-w-6/12' >
              <div className='border-[1px] border-gray-200 rounded-lg px-2 py-1 w-fit' ><img src={product.images ? `${import.meta.env.REACT_APP_INTERNAL_PATH}/${product.images[0]}` : ''} className='w-12' alt='' /></div>
              <p className='font-bold text-clip text-2xl md:text-3xl xl:text-[2rem] leading-8' >{product.title}</p>
            </div>

            <div className='flex space-x-5 items-center justify-end w-6/12' >
              <div className='flex flex-col' >
                <h4 className='font-bold text-xl lg:text-2xl text-b3' >${product.salePrice ? product.salePrice : product.regularPrice}</h4>
                {product.salePrice ? <div className='flex space-x-5 items-center' >
                  <strike>${product.regularPrice}</strike>
                  <span className='flex bg-b4 lg:text-xs text-[10px] text-black px-3 py-2 font-semibold rounded-2xl' >Save $50.00</span>
                </div> : null}
              </div>
              <div className='flex justify-center items-center bg-b7 text-sm text-white px-2 lg:px-10 py-3 cursor-pointer  rounded-lg' ><AiOutlineShoppingCart className='text-lg' /><h6 className="font-bold ml-2" >Add To Cart</h6></div>
            </div>

          </div>
        </div>

        <div className='grid grid-cols-12 items-center bg-white justify-between maincontainer' >
          <div className='col-span-9 flex items-center lg:hidden'>
            <button type='button'>
              <FaBars />
            </button>
          </div>
          <div className='col-span-9 maxlg:fixed maxlg:hidden left-0 bottom-0 top-12 maxlg:w-[230px] maxlg:gap-5 p-4 md:px-10 lg:pl-0 lg:py-0 maxlg:flex-col bg-white flex lg:items-center gap-1 lg:gap-5 2xl:gap-5 lg:pr-5 xl:pr-10 [&>button]:font-normal [&>button]:lg-to-xl:text-[11px] [&>button]:text-xs [&>button]:h-5 [&>button]:cursor-pointer [&>button:hover]:border-b-[1px] [&>button:hover]:border-b4' >
            {NavItems.map((item, index) => (
              <button key={index} onClick={() => scrollToSection(item.id)}>{item.title}</button>
            ))}
          </div>
          <div className='col-span-3 flex items-center justify-end gap-4 lg:gap-3 xl:gap-x-10' >
            <Link to="tel:(512) 992-2714" className='flex items-center gap-1 text-b4 cursor-pointer hover:text-black' ><FiPhone /><span className='text-xs w-max' >(512) 992-2714</span></Link>
            <Link to="/help-and-support" className='flex items-center gap-1 text-black cursor-pointer hover:text-b4' ><TfiHeadphoneAlt /><span className='text-xs w-max' >Need Help?</span></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default StickyNavbar

const NavItems = [
  { title: 'Product Information', id: 'product-information' },
  { title: '360° View', id: '360-view' },
  { title: 'Testimonials View', id: 'testimonials-view' },
  { title: 'Product Features', id: 'product-features' },
  { title: 'Inspections', id: 'inspections' },
  { title: 'Compare', id: 'compare' },
  { title: 'FAQ', id: 'faq' },
]