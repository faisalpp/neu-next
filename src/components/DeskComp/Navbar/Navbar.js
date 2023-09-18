'use client'

import { useState, useEffect } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { IoMenu } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import NavDropDown from '@/components/DeskComp/Navbar/NavDropDown';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { resetUser } from '@/store/userSlice'
import { Menu } from '@headlessui/react'
import { AdminSignout } from '@/api/admin/auth';
import { Signout } from '@/api/user/auth';
import { showSCart, hideSCart } from '@/store/cartSlice'
import { getNabarAppliances, searchAppliance } from '@/api/frontEnd'

const Navbar = () => {
  const [megMenu, setMegMenu] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.auth);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  // const navigate = useNavigate();
  const navigate = usePathname();
  const firstName = useSelector((state) => state.user.firstName);

  const cartCount = useSelector((state) => state.cart.cartCount);
  const sCart = useSelector((state) => state.cart.sCart);


  const handleAdminLogout = async (e) => {
    e.preventDefault();

    const res = await AdminSignout();
    if (res.status === 200) {
      toast.success(res.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(resetUser());
      navigate('/');
    } else if (res.code === 'ERR_BAD_REQUEST') {
      dispatch(resetUser());
      toast.error('Session Expired!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/');
    } else {
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await Signout();
    if (res.status === 200) {
      toast.success(res.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (res.code === 'ERR_BAD_REQUEST') {
      dispatch(resetUser());
      toast.error('Session Expired!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/');
    } else {
      toast.error(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const [applianceTypes, setApplianceTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAppliances = async () => {
      const res = await getNabarAppliances();
      if (res.status === 200) {
        let data = [];
        if (res.data.categories.length > 0) {
          const filt = await res.data.categories.map((item) => data.push({ name: item.title, url: '/' + item.slug }))
          setApplianceTypes([...data, { name: 'View All Categories', url: '/applianceTypes' }]);
        }
        setLoading(false)
      } else {
        setApplianceTypes([])
      }
    }
    getAppliances();
  }, [])

  const [search, setSearch] = useState('')

  const handleEnterKey = async (e) => {
    if (e.key === 'Enter') {
      const res = await searchAppliance({ query: search });
      console.log(res)
    }
  }


  return (
    <>
      <div className='relative bg-b1' >
        {/* Navbar Start */}
        <div className='lg:grid grid-cols-12 py-5 items-center maincontainer'>
          <Link href="/">
            <Image className='col-start-1 col-end-3' quality={1} src="/neu.webp" width={10} height={10} alt="logo" />
          </Link>
          {/* Search Start */}
          <div className='col-start-4 col-end-8 flex items-center bg-white h-10 px-2 rounded-lg space-x-2 w-full ' >
            <AiOutlineSearch className='text-black' />
            <input type="text" value={search} onKeyDown={e => handleEnterKey(e)} onChange={e => setSearch(e.target.value)} placeholder='Search for appliances' className="w-full text-xs outline-none" />
          </div>
          {/* Search End */}

          <div className='col-start-9 col-end-13 flex justify-end space-x-2 w-full' >
            <div onClick={() => { sCart ? dispatch(hideSCart()) : dispatch(showSCart()) }} className='flex items-center cursor-pointer px-4 bg-b2 h-10 w-max rounded-md text-white' ><AiOutlineShoppingCart /><span className='ml-2 font-medium text-xs' >Cart</span><span className='ml-2 bg-b3 rounded-full text-xs h-4 w-4 text-center' >{cartCount}</span></div>

            {isAuth ? (isAdmin ? <Menu as="div" className="relative" >
              <Menu.Button className='top__menu_button'><BiUserCircle className='text-lg' /><span className='ml-1 font-medium text-xs' >Hello {firstName}</span><RiArrowDropDownLine className='text-xl' /></Menu.Button>
              {/* Mark this component as `static` */}
              <Menu.Items as="div" className="absolute z-[100] top-12 -right-24 shadow-lg rounded-sm py-5 bg-white w-56 h-auto text-black">
                <Menu.Item as="div" className="px-4" ><Link href="/admin/dashboard" className={`${({ isActive }) => isActive ? 'bg-b5' : ''} top__menu_item`} >Dashboard</Link></Menu.Item>
                <Menu.Item as="div" className="px-4" ><Link href="" className={`${({ isActive }) => isActive ? 'bg-b5' : ''} top__menu_item`} >Order History</Link></Menu.Item>
                <Menu.Item as="div" className="px-4" ><Link href="" className={`${({ isActive }) => isActive ? 'bg-b5' : ''} top__menu_item`} >Favorites</Link></Menu.Item>
                <Menu.Item as="div" className="px-4" ><div onClick={handleAdminLogout} className='top__menu_item' >Logout</div></Menu.Item>
              </Menu.Items>
            </Menu>
              : <Menu as="div" className="relative" >
                <Menu.Button className='top__menu_button'><BiUserCircle className='text-lg' /><span className='ml-1 font-medium text-xs' >Hello {firstName}</span><RiArrowDropDownLine className='text-xl' /></Menu.Button>
                {/* Mark this component as `static` */}
                <Menu.Items as="div" className="absolute z-[100] top-12 -right-24 shadow-lg rounded-sm py-5 bg-white w-56 h-auto text-black">
                  <Menu.Item as="div" className="px-4" ><Link href="/my-account/profile" className={`${({ isActive }) => isActive ? 'bg-b5' : ''} top__menu_item`} >My Account</Link></Menu.Item>
                  <Menu.Item as="div" className="px-4" ><Link href="/my-account/order-history" className={`${({ isActive }) => isActive ? 'bg-b5' : ''} top__menu_item`} >Order History</Link></Menu.Item>
                  <Menu.Item as="div" className="px-4" ><Link href="/my-account/my-favourites" className={`${({ isActive }) => isActive ? 'bg-b5' : ''} top__menu_item`} >Favorites</Link></Menu.Item>
                  <Menu.Item as="div" className="px-4" ><div onClick={handleLogout} className='top__menu_item' >Logout</div></Menu.Item>
                </Menu.Items>
              </Menu>) : (isAdmin === null ? <Link href="/login" ><div className='flex items-center px-2 bg-b2 h-10 w-32 cursor-pointer rounded-md text-white' ><BiUserCircle /><span className='ml-1 font-medium text-xs' >My Account</span></div></Link> : null)}

            {/* {isAuth ? <Link href="/my-account/profile" ><div className='flex items-center px-2 bg-b2 h-10 w-32 cursor-pointer rounded-md text-white' ><BiUserCircle /><span className='ml-2 font-reg font-normal text-sm' >My Account</span></div></Link> : <Link href="/login" ><div className='flex items-center px-2 bg-b2 h-10 w-32 cursor-pointer rounded-md text-white' ><BiUserCircle /><span className='ml-2 font-reg font-normal text-sm' >My Account</span></div></Link>} */}
            <div onClick={() => { megMenu ? setMegMenu(false) : setMegMenu(true) }} className='flex items-center cursor-pointer px-4 bg-b2 h-10 w-max rounded-md text-white' ><IoMenu /><span className='ml-2 font-medium text-xs' >Menu</span></div>
            {/* <div onClick={handleLogout} className='flex items-center cursor-pointer text-center px-2 bg-b2 h-10 w-24 rounded-md text-white' ><span className='text-center font-medium text-xs px-5' >Logout</span></div>   */}
          </div>
        </div>
        {/* Navbar End */}
        {/* Sub Navbar Start */}
        <div className="text-white bg-white/[0.08] py-4" >

          {/* Mega Menu Start */}
          <div className={`absolute ${megMenu ? 'pt-5 pb-20' : 'max-h-0'} duration-300 overflow-hidden top-20 bg-b1 w-full z-30`} >

            <div className='grid grid-cols-12 justify-center 3xl:max-w-1680px px-16 xl:px-20 2xl:px-120px mx-auto'>
              <div className='col-start-1 col-end-2 flex flex-col items-center' >
                <h4 className='font-semibold xl:whitespace-nowrap' >How It Works</h4>
                <div className='flex flex-col space-y-4 text-xs font-medium mt-4 text-white/80' >
                  <Link href="/how-it-works/what-we-sell">What We Sell</Link>
                  <Link href="/how-it-works/rating-system">Rating System</Link>
                  <Link href="/how-it-works/testing-process">Testing Process</Link>
                  <Link href="/how-it-works/product-photos">Product Photos</Link>
                  <Link href="/how-it-works/delivery">Delivery</Link>
                  <Link href="/how-it-works/hassle-free">Warranty & Return</Link>
                </div>
              </div>

              <div className='col-start-3 col-end-5 ml-8' >
                <h4 className='font-semibold' >Resources</h4>
                <div className='flex flex-col space-y-4 text-xs font-medium mt-4 text-white/80' >
                  <Link href="/appliance-repair">Appliance Repair</Link>
                  <Link href="">Product Reviews</Link>
                  <Link href="/measuring-guide">Measuring Guide</Link>
                  <Link href="/helpful-appliances-tips">Appliance Tips</Link>
                  <Link href="/blogs">Appliance Blog</Link>
                </div>
              </div>

              <div className='col-start-6 col-end-6 flex flex-col' >
                <h4 className='font-semibold' >About Us</h4>
                <div className='flex flex-col space-y-4 text-xs mt-4 font-medium text-white/80' >
                  <Link href="/our-story">Our Story</Link>
                  <Link href="/our-showroom">Our Outlet</Link>
                  <Link href="/our-companies">Our Companies</Link>
                  <Link href="/faqs">FAQ</Link>
                </div>
              </div>

              <div className='col-start-8 col-end-11' >
                <h4 className='font-semibold' >Help & Support</h4>
                <div className='flex flex-col space-y-4 text-xs mt-4 font-medium text-white/80' >
                  <Link href="/help-and-support">Help Placing an Order Us</Link>
                  <Link href="">Returns and Exchange</Link>
                  <Link href="">Contact Us</Link>
                </div>
              </div>

              <div className='col-start-11 col-end-13' >
                <h4 className='font-semibold' >Delivery</h4>
                <div className='flex flex-col space-y-4 text-xs mt-4 font-medium text-white/80' >
                  <Link href="">Important Information</Link>
                </div>
              </div>
            </div>

          </div>
          {/* Mega Menu End */}

          <div className='grid grid-cols-12 items-center maincontainer'>
            <div className='col-start-1 col-end-5 flex items-center space-x-4 xl:space-x-8 2xl:space-x-14' >
              {/* <Link href='/' ><div className='flex items-center font-reg text-xs cursor-pointer text-white/80 hover:text-b6' ><span >Home</span></div></Link>  */}
              <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Deals" links={[{ 'name': 'Recent Arrival', 'url': '/recent-arrivals' }, { 'name': '5 Star Products', 'url': '/five-star-products' }, { 'name': '4 Star Products', 'url': '/four-star-products' }, { 'name': '3 Star Products', 'url': '/three-star-products' }]} />
              <div className='nav____item' ><span >Shop&nbsp;Now</span></div>
              <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Products" links={applianceTypes} bold={600} />
              <NavDropDown icon={<RiArrowDropDownLine className='text-2xl' />} title="Popular Brands" links={[{ 'name': 'Amana', 'url': '/brands/amana' }, { 'name': 'Maytag', 'url': '/brand/maytag' }, { 'name': 'Frigdaire', 'url': '/brand/frigdaire' }, { 'name': 'Haier', 'url': '/brand/haier' }, { 'name': 'Hisense', 'url': '/brand/hisense' }, { 'name': 'Kenmore', 'url': '/Kenmore' }, { 'name': 'LG', 'url': '/lg' }, { 'name': 'KitchenAid', 'url': '/kitchen-aid' }, { 'name': 'Samsung', 'url': '/samsung' }, { 'name': 'Whirlpool', 'url': '/whirlpool' }, { 'name': 'Midea', 'url': '/midea' }]} bold={600} />
              <div className='nav____item' ><Link href="/financing" >Financing</Link></div>
              <div className='nav____item' ><span >Testimonials</span></div>
              <div className='nav____item' ><span >Pricing</span></div>
            </div>
            <div className='col-start-10 col-end-13 flex items-center justify-end space-x-10' >
              <Link href="tel:(512) 992-2714" className='flex items-center space-x-1 text-b4 cursor-pointer hover:text-white' ><FiPhone /><span className='text-xs font-medium w-max' >(512) 992-2714</span></Link>
              <Link href="/help-and-support" className='flex items-center space-x-1 text-white cursor-pointer' ><TfiHeadphoneAlt /><span className='text-xs font-medium w-max text-white/80' >Need Help?</span></Link>
            </div>
          </div>

        </div>
        {/* Sub Navbar End */}

      </div>
    </>
  )
}

export default Navbar