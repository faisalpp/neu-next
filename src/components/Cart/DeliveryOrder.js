import React, { useState, useRef, useEffect } from 'react';
import CartCard from './CartCard';
import SelectTimeSlot from './SelectTimeSlot';

const DeliveryOrder = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='border border-b26 rounded p-4 sm:p-5 md:p-10 grid grid-cols-1 gap-8'>
            <h2 className='text-b16 font-bold text-xl maxmd:text-center'>Delivery Orders</h2>
            <CartCard />
            <CartCard />
            <CartCard />
            <div ref={dropdownRef} className='relative'>
                <button onClick={toggleDropdown} className='w-full border border-[#D9D9D9] p-4 rounded-lg flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <span className='w-[18px] h-[18px]'>
                            <img src="/svgs/calendar_month.webp" alt="calendar_month" />
                        </span>
                        <span className='text-xs font-medium text-b3'>
                            Select Time-slot
                        </span>
                    </div>
                    <div className='font-semibold text-sm text-b3'>
                        $80
                    </div>
                </button>
                {isOpen && (
                    <SelectTimeSlot />
                )}

            </div>
        </div>
    )
}

export default DeliveryOrder