import React from 'react'
import ProductType from './ProductType';
import ProductCard from './ProductCard';
import RelatedProducts from './RelatedProducts';
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import FilterSvg from '../../svgs/FilterSvg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import CarotSvg from '../../svgs/CarotSvg';

const ProductSection = ({ menu, data, category }) => {
    const [isFilter, setIsFilter] = useState(false);
    const handleCloseFilter = () => {
        setIsFilter(false);
    };

    return (
        <div>
            <div className='flex maxlg:flex-col h-full justify-center gap-4 lg:gap-8 py-10 maincontainer' >
                {/* FIlter Button For Mobile Screen */}
                <div className='flex gap-2 items-center'>
                    <button className='ml-auto w-full justify-center border border-b3 px-3 py-3 text-sm font-semibold rounded-lg flex gap-2 items-center lg:hidden' onClick={() => setIsFilter(true)}>
                        All Categories <CarotSvg />
                    </button>
                    <button className='ml-auto w-full justify-center border border-b3 px-3 py-3 text-sm font-semibold rounded-lg flex gap-2 items-center lg:hidden' onClick={() => setIsFilter(true)}>
                        <FilterSvg /> Filters
                    </button>
                </div>
                {/* End FIlter Button */}
                <ProductType productstype={menu} onClose={handleCloseFilter} isFilter={isFilter} />

                <div className='w-full h-full flex flex-col gap-60px'>
                    {/* Cosmatic Rating */}

                    {data.map((section) => <>
                        {section.cardStyle === 'rating-card' ? <div>
                            <h3 className='font-bold mt-10 lg:font-semibold text-b18 text-2xl lg:text-base maxlg:text-center'>{section.title}</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
                                {section.sectionItemsId.map((product, index) => <NavLink key={index} to={`/appliances/?category=${category.toLowerCase()}&rating=${product.rating}`} ><ProductCard key={product.title} title={product.title} image={product.image} rating={product.rating} /></NavLink>)}
                            </div>
                        </div> : null}

                        {/* Product Styles */}
                        {section.cardStyle === 'general-card' ? <div>
                            <RelatedProducts title={section.title} />
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
                                {section.sectionItemsId.map((product, index) => <NavLink key={index} to={`/appliances/?category=${category.toLowerCase()}&${section.type}=${product.title.toLowerCase().replace(/\s/g, "-")}`} ><ProductCard key={product.title} title={product.title} image={product.image} /></NavLink>)}
                            </div>
                            <Link to="" className='lg:hidden whitespace-nowrap flex items-center justify-center gap-1 hover:gap-2 duration-300 mt-6 px-4 py-3 rounded-lg text-b3 font-medium text-base border border-b3'>
                                <span>View More</span>
                                <AiOutlineArrowRight className="text-base" />
                            </Link>
                        </div> : null}
                        {section.cardStyle === '2xn-card' ? <div>
                            <RelatedProducts title={section.title} />
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-8'>
                                {section.sectionItemsId.map((product, index) => <NavLink key={index} to={`/appliances/?category=${category.toLowerCase()}&${section.type}=${product.title.toLowerCase().replace(/\s/g, "-")}`} ><ProductCard key={product.title} title={product.title} image={product.image} /></NavLink>)}
                            </div>
                            <Link to="" className='lg:hidden whitespace-nowrap flex items-center justify-center gap-1 hover:gap-2 duration-300 mt-6 px-4 py-3 rounded-lg text-b3 font-medium text-base border border-b3'>
                                <span>View More</span>
                                <AiOutlineArrowRight className="text-base" />
                            </Link>
                        </div> : null}


                        {section.cardStyle === 'brand-card' ? <div>
                            <RelatedProducts title={section.title} />
                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8'>
                                {section.sectionItemsId.map((product, index) => <NavLink key={index} to={`/appliances/?category=${category.toLowerCase()}&${section.type}=${product.title.toLowerCase().replace(/\s/g, "-")}`} ><ProductCard key={product.title} brandname={product.title} brandimage={product.image} /></NavLink>)}
                            </div>
                            <Link to="" className='lg:hidden whitespace-nowrap flex items-center justify-center gap-1 hover:gap-2 duration-300 mt-6 px-4 py-3 rounded-lg text-b3 font-medium text-base border border-b3'>
                                <span>View More</span>
                                <AiOutlineArrowRight className="text-base" />
                            </Link>
                        </div> : null}

                        {section.cardStyle === 'color-card' ? <div>
                            <RelatedProducts title={section.title} />
                            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8'>
                                {section.sectionItemsId.map((product, index) => <NavLink key={index} to={`/appliances/?category=${category.toLowerCase()}&${section.type.replace(/\&/, 'and')}=${product.title.toLowerCase().replace(/\s/g, "-")}`} ><ProductCard key={product.title} colorname={product.title} colorimage={product.image} /></NavLink>)}
                            </div>
                            <Link to="" className='lg:hidden whitespace-nowrap flex items-center justify-center gap-1 hover:gap-2 duration-300 mt-6 px-4 py-3 rounded-lg text-b3 font-medium text-base border border-b3'>
                                <span>View More</span>
                                <AiOutlineArrowRight className="text-base" />
                            </Link>
                        </div> : null}
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductSection