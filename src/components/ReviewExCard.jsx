'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { Modal } from '@/components/Reusable/Modal';

const ReviewExCard = ({ description, author, review }) => {

  const paragraphRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (paragraph) {
      const maxLines = 6;
      const lineHeight = parseInt(getComputedStyle(paragraph).lineHeight);
      const maxHeight = maxLines * lineHeight;
      const actualHeight = paragraph.scrollHeight;

      setIsOverflowing(actualHeight > maxHeight);
    }
  }, [description]);


  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar key={index} className='text-b7 text-sm xl:text-xl' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };
  const StarIconPrinter2 = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar key={index} className='text-gray-300 text-sm xl:text-xl' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };

  return (
    <div className={`maxmd:mx-2 h-full flex flex-col bg-[rgba(255,155,62,0.08)] shadow-sm p-6 sm:p-10 rounded-2xl md:mx-[11px]`} >
      <div className='flex' >
        <StarIconPrinter numberOfTimes={review} />
        <StarIconPrinter2 numberOfTimes={5 - review} />
      </div>
      <div>
        <p ref={paragraphRef} className='text-sm xl:text-base mt-6 font-normal leading-6 line-clamp-6'>
          {description}
        </p>
        {isOverflowing && (
          <Modal
            title={author}
            description={description}
            rating={review}
            buttonClass="text-b3 maxsm:text-sm font-semibold"
            buttonName={`Learn More`}
          />
        )}
      </div>

      <h5 className='text-lg xl:text-base mt-4 mb-2 font-bold lg:w-10/12 xl:w-10/12 w-full' >{author}</h5>
    </div>
  )
}

export default ReviewExCard