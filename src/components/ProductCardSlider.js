import React from 'react'
import ProductSliderCard from './Appliances/ProductSliderCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCardSlider = ({ section }) => {
    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 4,
        draggable: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    draggable: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 425,
                settings: {
                    draggable: true,
                    slidesToShow: 1.03,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    return (
        <Slider {...settings} className='mb-10 mt-10 xl:mt-14'>
            {section.sectionItemsId.map((item, index) => <ProductSliderCard key={index} customStyle="px-2 pb-4 xl:pr-[5px]" title='Cosmetic Rating' product={item} />)}
        </Slider>
    )
}

export default ProductCardSlider