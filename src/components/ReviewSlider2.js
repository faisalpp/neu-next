import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const ReviewSlider2 = ({ color, clientreviews, icon }) => {
    const settings = {
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1.12,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1670,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const PrevButton = ({ onClick }) => (
        <button onClick={onClick} className='hidden sm:block prev-button absolute top-0 -left-3 z-40 h-full pointer-events-none'>
            <div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
                <BsArrowLeftShort className='text-xl' />
            </div>
        </button>
    );

    const NextButton = ({ onClick }) => (
        <button onClick={onClick} className='hidden sm:block next-button absolute top-0 -right-3 z-40 h-full pointer-events-none'>
            <div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
                <BsArrowRightShort className='text-xl' />
            </div>
        </button>
    );
    // console.log(color)

    const StarIconPrinter = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar key={index} className='text-b7 text-sm' /> // Render the star icon component for each iteration
        ));

        return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
    };
    const StarIconPrinter2 = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar key={index} className='text-gray-300 text-sm' /> // Render the star icon component for each iteration
        ));

        return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
    };

    return (
        <div>
            {clientreviews.length > 0 ? <Slider {...settings} prevArrow={<PrevButton />} nextArrow={<NextButton />} className='relative'>
                {clientreviews.map((clientreview, index) => (
                    <div key={index} className='maxsm:px-2'>
                        <div style={{ backgroundColor: color }} className="flex flex-col shadow-sm px-5 py-3 rounded-xl xl:h-[170px] sm:mx-2">
                            <div className="flex mt-2">
                                <StarIconPrinter numberOfTimes={clientreview.rating} />
                                <StarIconPrinter2 numberOfTimes={5 - clientreview.rating} />
                            </div>
                            <p className="text-sm font-semibold mt-1">{clientreview.text}</p>
                            <a href='' className="text-sm text-b6 mt-2">Read More</a>
                            <div className="flex items-center">
                                <h5 className="text-sm mt-2 w-10/12">{clientreview.user.name}</h5>
                                <img src={icon} className="h-5 w-10 mt-4" alt="Icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider> : <div className='flex items-center justify-center w-full' ><img src="/loader-bg.gif" className="w-10 h-10 " /></div>}
        </div >
    );
};

export default ReviewSlider2;
