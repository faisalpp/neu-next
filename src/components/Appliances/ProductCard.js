import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom';

const ProductCard = ({ title, image, rating, brandimage, brandname, colorimage, colorname }) => {
    const { categorySlug } = useParams()
    const StarIconPrinter = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar key={index} className='text-b7' /> // Render the star icon component for each iteration
        ));

        return <div className='flex items-center' >{starIcons}</div>; // Render the array of star icons
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            {title || rating ?
                <div className='rounded-2xl maxmd:mx-auto maxmd:max-w-[330px] border border-gray-300 p-3'>
                    <img src={image} className='xl:w-auto h-80 mx-auto' alt={title} />
                    <div className='flex flex-col w-full mt-5 lg:mt-2 items-center gap-2'>
                        {rating ? <h3 className='font-semibold'>{capitalizeFirstLetter(categorySlug.replace(/\-/g,' '))}</h3> : <h3 className='font-semibold'>{title}</h3>}
                        {rating ?
                            <div className='flex gap-3 items-center'>
                                <span className='font-semibold text-sm'>
                                    Cosmetic Rating:
                                </span>
                                <StarIconPrinter numberOfTimes={parseInt(rating)} />
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
                    <div className='rounded-2xl border border-gray-300 p-3 h-[133px] flex justify-center items-center'>
                        <img src={brandimage} className='max-w-full h-auto object-contain' alt={brandname} />
                    </div>
                    <h3 className='font-semibold px-3 text-center mt-3'>{brandname}</h3>
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

export default ProductCard