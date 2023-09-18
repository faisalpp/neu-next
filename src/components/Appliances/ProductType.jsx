import React from 'react'
import DropDown from './DropDown/DropDown'
import { Link } from 'react-router-dom';

const ProductSection = ({ productstype, onClose, isFilter }) => {
    // console.log(productstype)
    const handleFilterClick = (event) => {
        event.stopPropagation();
    };
    const modalClass = isFilter ? 'maxlg:flex top-0 maxlg:bottom-0' : 'maxlg:-bottom-[420px] maxlg:opacity-0 maxlg:pointer-events-none';

    const CosRatingMenu = ({ menu,k }) => (
        <ul className='flex flex-col gap-3'>
             {k ? menu[k].map((item, index) => (
                <li key={index} >
                     <Link to={item.link} className='text-sm text-b22'>{item.name}</Link>
                </li>
            )):null}
        </ul>
    );
    return (
        <div className={`maxlg:fixed maxlg:left-0 maxlg:right-0 maxlg:z-50 lg:sticky lg:top-10 maxlg:bg-black/20 items-end lg:h-full duration-300 lg:w-[320px] ${modalClass}`} onClick={onClose}>
            <div className='[&>div]:maxlg:px-10 maxlg:max-h-[398px] maxlg:pb-10 maxlg:rounded-tl-2xl maxlg:rounded-tr-2xl maxlg:bg-white maxlg:overflow-y-auto lg:h-auto border border-gray-300 rounded-2xl lg:px-6 lg:pb-6 lg:pt-2 w-full' onClick={handleFilterClick}>
                <div className='lg:hidden maxlg:sticky top-0 flex maxlg:py-4 justify-end lg:pb-4 items-center border-b maxlg:bg-white z-50 maxlg:shadow-md'>
                    <button onClick={onClose} className='text-sm font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300'>
                        Close
                    </button>
                </div>
                {productstype ? productstype.map((product, index) => (
                    <DropDown title={Object.keys(product)} color="text-b22" key={index}>
                        <CosRatingMenu menu={product} k={Object.keys(product)} />
                    </DropDown>
                )):null}
            </div>
        </div>
    )
}

export default ProductSection