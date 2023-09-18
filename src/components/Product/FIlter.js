import React from 'react'
import TypeFilter from '../../components/DeskComp/Filter/TypeFilter'
import RatingFilter from '../../components/DeskComp/Filter/RatingFilter'
import HeaderFilter from '../../components/DeskComp/Filter/HeaderFilter';
import SaleFilter from '../../components/DeskComp/Filter/SaleFilter';
import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider';

const Filter = ({ onClose, isFilter, categoriesFilters, ratingFilters }) => {
    const handleFilterClick = (event) => {
        event.stopPropagation();
    };

    const modalClass = isFilter ? 'maxlg:flex maxlg:top-0 maxlg:bottom-0' : 'maxlg:-bottom-[420px] maxlg:opacity-0 maxlg:pointer-events-none';

    return (
        <div className={`maxlg:fixed maxlg:bg-black/20 items-end maxlg:left-0 maxlg:right-0 lg:max-w-[240px] lg:h-full lg:sticky lg:top-10 z-50 duration-300 ${modalClass}`} onClick={onClose}>
            <div className='lg:flex flex-col w-full maxlg:max-h-[398px] [&>div]:maxlg:px-10 pb-10 maxlg:rounded-tl-2xl maxlg:rounded-tr-2xl maxlg:bg-white maxlg:overflow-y-auto' onClick={handleFilterClick}>
                <div className='maxlg:sticky top-0 flex maxlg:py-4 justify-between lg:pb-4 items-center border-b maxlg:bg-white z-50 maxlg:shadow-md'>
                    <p className='text-base font-bold'>
                        Filters
                    </p>
                    <button className='text-sm lg:text-xs text-[#22A6AB] underline'>
                        Reset Filters
                    </button>
                    <button onClick={onClose} className='text-sm font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300'>
                        Close
                    </button>
                </div>
                <TypeFilter filters={categoriesFilters} />
                <RatingFilter filters={ratingFilters} />
                <MultiRangeSlider min={9} max={9999} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
                <SaleFilter />
                {/* <HeaderFilter /> */}
            </div>
        </div>
    );
};

export default Filter;