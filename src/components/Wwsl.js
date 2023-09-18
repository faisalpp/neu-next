import React from 'react'
import { Modal } from './Reusable/Modal'

const Wwsl = ({ img, title, txtStyle, description, note }) => {
  return (
    <>
      <div className='pl-3 p-2 xs:p-2 xl:!p-5'>
        <div className='relative h-full maxxs:!min-h-[207px] maxcosm:min-h-[217px] xs:min-h-[190px] sm:min-h-[207px] md-to-lg:min-h-[223px] lg:min-h-full lg-to-xl:!min-h-[251px] xl:!min-h-[223px] 2xl:!min-h-[240px] flex flex-col m-0 items-center rounded-xl p-5 2xl:p-7 3xl:p-10 bg-white shadow-lg' >
          <img src={img} className='w-16 mb-4 md:mb-8' alt={`${img}`} />
          <h3 className={`text-lg coxs:text-2xl xs:text-base sm:!text-lg lg:!text-lg 2xl:!text-xl 3xl:!text-2xl ${txtStyle} mb-8 font-semibold text-center`} >{title}</h3>
          <div className='absolute bottom-5 2xl:bottom-7 3xl:bottom-10 flex justify-center items-center'>
            <Modal icon={img} title={title} description={description} note={note} buttonClass="text-b7 maxsm:text-sm font-semibold flex justify-center items-center gap-1" buttonName={`Learn More <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1.44365 11.779C1.31698 11.779 1.19031 11.7324 1.09031 11.6324C0.896979 11.439 0.896979 11.119 1.09031 10.9257L5.43698 6.57904C5.75698 6.25904 5.75698 5.73904 5.43698 5.41904L1.09031 1.07237C0.896979 0.879037 0.896979 0.559036 1.09031 0.365703C1.28365 0.17237 1.60365 0.17237 1.79698 0.365703L6.14365 4.71237C6.48365 5.05237 6.67698 5.51237 6.67698 5.99904C6.67698 6.4857 6.49031 6.9457 6.14365 7.2857L1.79698 11.6324C1.69698 11.7257 1.57031 11.779 1.44365 11.779Z" fill="#FF9B3E" />
        </svg>`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Wwsl