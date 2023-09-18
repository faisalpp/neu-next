import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsPencil,BsFillTrashFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import {deleteSectionItem} from '../../api/admin'
import {toast} from 'react-toastify'

const BrandCard = ({ getSectionItem,id,handleUpdateStates,ref,title, image, rating, brandimage, brandname, colorimage, colorname,updateUrl,viewUrl}) => {
    const StarIconPrinter = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar key={index} className='text-b7' /> // Render the star icon component for each iteration
        ));

        return <div className='flex items-center' >{starIcons}</div>; // Render the array of star icons
    };

    function hyphenToCamelCase(str) {
        var words = str.split('-');
        var capitalizedWords = words.map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        var spaceSeparatedString = capitalizedWords.join(' ');
        return spaceSeparatedString;
      }

      const [delLoading,setDelLoading] = useState(false)

      const DeleteSectionItem = async (e,id) => {
        e.preventDefault()
         setDelLoading(true)
         const data = {id:id}
         const res = await deleteSectionItem(data);
         if(res.status === 200){
           setDelLoading(false)
           getSectionItem()
           toast.success(res.data.msg, {
             position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }else{
          setDelLoading(false)
          toast.error(res.data.message, {
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

      

    return (
        <div ref={ref} >
            {title ?
                <div className='rounded-2xl maxmd:mx-auto maxmd:max-w-[330px] border border-gray-300 p-3'>
                    <img src={image} className='xl:w-auto h-80 mx-auto' alt={title} />
                    <div className='flex flex-col w-full mt-2 items-center gap-2'>
                        <h3 className='font-semibold'>{title}</h3>
                        {rating ?
                            <div className='flex gap-3 items-center'>
                                <span className='font-semibold text-sm'>
                                    Cosmetic Rating:
                                </span>
                                <StarIconPrinter numberOfTimes={rating} />
                            </div>
                            : null
                        }
                    </div>
                </div>
                : null
            }
            {brandimage ?
                // Popular Brands
                <div className='populerbrands'>
                    <div className='rounded-2xl border border-gray-300 p-3 h-fit w-fit flex flex-col justify-center items-center'>
                        <img src={brandimage} className='max-w-full h-[133px] object-contain' alt={brandname} />
                        <h3 className='font-semibold px-3 text-center text-xs'>{hyphenToCamelCase(brandname)}</h3> 
                        <h3 className='font-semibold px-3 text-center text-xs'><StarIconPrinter numberOfTimes={rating} /></h3>
                        <div className='flex space-x-2' >
                         {/* <span onClick={e=>handleUpdateStates(e,brandimage,brandname,rating,id)} className='bg-b3 text-white text-xs rounded-md cursor-pointer py-1 w-fit px-2 mt-1 text-center' >Update</span> */}
                         <span onClick={e=>handleUpdateStates(e,brandimage,brandname,rating,id)} title="Edit Item" className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></span>
                         <span title="Delete Blog" onClick={e=>DeleteSectionItem(e,id)} className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' >{delLoading ? <img src="/loader-bg.gif" className='w-4 h-4' />: <BsFillTrashFill className="text-base" />}</span>
                         {viewUrl ? <NavLink to={viewUrl} className='bg-b3 text-white text-xs rounded-md cursor-pointer py-1 w-fit px-2 mt-1 text-center' >Edit</NavLink>:null} 
                        </div>
                    </div>
                </div>
                // End Popular Brands
                : null}
            {colorimage ?
                <div className='colortype'>
                    <img src={colorimage} className='h-44 xs:h-52 w-full sm:h-56 object-cover' alt={colorname} />
                    <h3 className='font-semibold px-2 text-center mt-3'>{colorname}</h3>
                </div>
                : null}
        </div>
    )
}

export default BrandCard