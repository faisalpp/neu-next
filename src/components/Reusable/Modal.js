'use client'

import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillStar } from 'react-icons/ai'
import Image from "next/image";

export function Modal({ buttonName, buttonClass, icon, title, description, note, rating }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const StarIconPrinter = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar key={index} className='text-b7 text-sm xl:text-xl' /> // Render the star icon component for each iteration
        ));

        return <div className='flex items-center' >{starIcons}</div>; // Render the array of star icons
    };
    const StarIconPrinter2 = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar key={index} className='text-gray-300 text-sm xl:text-xl' /> // Render the star icon component for each iteration
        ));

        return <div className='flex items-center' >{starIcons}</div>; // Render the array of star icons
    };

    return (
        <>
            <button onClick={handleOpen} className={buttonClass} dangerouslySetInnerHTML={{ __html: buttonName }}></button>
            <Dialog className="relative sm:!max-w-[420px] sm:!min-w-[420px]" open={open} handler={handleOpen}>
                <DialogBody className="p-6">
                    {icon ?
                        <Image width={56} height={56} src={icon} className="w-14 h-14 mb-4 mx-auto" alt={title} />
                        : ''}
                    <h3 className="text-black text-2xl mb-4 font-semibold text-center">{title}</h3>
                    {rating ? <div className='flex justify-center items-center gap-1 mb-2' >
                        <StarIconPrinter numberOfTimes={rating} />
                        <StarIconPrinter2 numberOfTimes={5 - rating} />
                    </div> : ''}
                    <p className="text-center mb-6 text-b16 -tracking-[0.48px] leading-[30px]">
                        {description}
                    </p>
                    {note ?
                        <p className="text-b16 font-semibold text-center">{note}</p>
                        : ''
                    }
                </DialogBody>
                <button type='button' onClick={handleOpen} className='absolute right-0 sm:-right-10 -top-10 sm:top-0 bg-b3 text-white flex p-1 justify-center items-center w-8 h-8 rounded-full'>
                    <IoCloseOutline className='text-3xl' />
                </button>
            </Dialog>
        </>
    );
}