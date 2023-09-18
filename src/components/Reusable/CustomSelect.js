import React from 'react'
import CaretDown from '../../svgs/CaretDown'

const CustomSelect = ({ label, id, Options }) => {
    return (
        <div className='relative'>
            <select id={id} className='w-full border border-b31 px-[11px] pt-[19px] pb-1 outline-none appearance-none rounded-lg text-sm text-b16 font-medium'>
                {Options.map((option, index) => (
                    <option value={option.value}>{option.name}</option>
                ))}
            </select>
            <label htmlFor={id} className='absolute top-[5px] text-xs text-b25 left-[11px]'>{label}</label>
            <div className='absolute top-0 bottom-0 h-full flex items-center justify-end right-3'>
                <div className='pl-3 py-[5px] border-l border-b31'>
                    <CaretDown />
                </div>
            </div>
        </div>
    )
}

export default CustomSelect