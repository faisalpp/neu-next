import React from 'react'

const MeasuringCard = ({ bgcolor, title, description, note }) => {
    return (
        <div className={`p-6 sm:p-10 flex flex-col gap-3 rounded-3xl ${bgcolor}`}>
            <h3 className='text-2xl text-b3 font-bold'>
                {title}
            </h3>
            <div className='flex flex-col gap-6 leading-6'>
                {description.map((desc, index) => (
                    <p>{desc}</p>
                ))}
            </div>
            {
                note ?
                    <p className='italic font-bold leading-6'>
                        <span>*</span> {note}
                    </p>
                    : null
            }
        </div>
    )
}

export default MeasuringCard