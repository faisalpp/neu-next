import React from 'react'

const CustomInput = ({ label, type, placeholder, state, setState, colorStyle, icon }) => {
    return (
        <div className='w-full'>
            <label className='h-full'>
                {
                    label ?
                        <span className='text-b16 font-semibold text-xs block mb-2'>{label}</span>
                        : null
                }
                <div className='relative h-full'>
                    <input type={type ? type : 'text'} className={`border  placeholder:text-xs rounded-lg h-10 text-xs text-black px-4 w-full outline-none ${colorStyle ? colorStyle : 'border-[rgba(0,0,0,0.16)] placeholder:text-black/40'}`} placeholder={placeholder} onChange={e => setState(e.target.value)} value={state} />
                    {icon ?
                        <img src={'/svgs/' + icon} className='absolute top-3 right-4 w-[18px] h-[18px] object-contain pointer-events-none' alt="" />
                        : null
                    }
                </div>
            </label>
        </div>
    )
}

export default CustomInput