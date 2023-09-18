import React from 'react'

const Rating = ({ customclass, color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={customclass} viewBox="0 0 25 24" fill="none">
            <mask id="mask0_2393_60775" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" className={customclass}>
                <rect x="0.5" className={customclass} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2393_60775)">
                <path d="M16.6033 15.308L20.2398 12.183L22.4609 12.3753L18.3879 15.9022L19.5917 21.183L17.7052 20.0368L16.6033 15.308ZM14.4745 8.71L13.4629 6.33692L14.3148 4.2793L16.259 8.8773L14.4745 8.71ZM5.57453 20.9618L7.0072 14.7926L2.2207 10.6446L8.53605 10.0965L10.9995 4.2793L13.4629 10.0965L19.7782 10.6446L14.9918 14.7926L16.4244 20.9618L10.9995 17.6888L5.57453 20.9618Z" fill={color} />
            </g>
        </svg>
    )
}

export default Rating
