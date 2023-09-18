import React from 'react'

const CartCard = (props) => {

    return (
        <div className='flex justify-start mt-3 gap-14px' >
            <div className='max-w-[64px] relative w-full'>
                <img src={import.meta.env.REACT_APP_DEV === 'dev' ? `${import.meta.env.REACT_APP_INTERNAL_PATH}/${props.item.image}` : `${props.item.image}`} className='w-16 h-16 object-contain' alt='' />
                <span className='absolute flex justify-center items-center text-xs font-medium w-5 h-5 rounded-full bg-b3 text-white -right-2 -top-2'>
                    1
                </span>
            </div>
            <div className='flex items-center gap-14px' >
                <div>
                    <h3 className='text-sm text-b16 font-medium tracking-032 !leading-[150%]'>
                        {props.item.title}
                    </h3>
                    {props.item.rating === 5 ? <p className='text-b25 text-xs'>5 Stars (Flawless Cosmetic Rating)</p> : null}
                    {props.item.rating === 4 ? <p className='text-b25 text-xs'>4 Stars (Flawless Cosmetic Rating)</p> : null}
                    {props.item.rating === 3 ? <p className='text-b25 text-xs'>3 Stars (Flawless Cosmetic Rating)</p> : null}
                </div>
                {props.item.salePrice ? <div className='flex justify-between text-b3 text-sm font-medium'>${props.item.salePrice}</div> : <div className='flex justify-between text-b3 text-sm font-medium'>${props.item.regularPrice}</div>}
            </div>
        </div>
    )
}

export default CartCard