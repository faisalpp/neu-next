import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import CosmatingRatingSlider from './Product/CosmatingRatingSlider'
import { Link } from 'react-router-dom'

const CompleteLaundary = ({ closeModal }) => {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full overflow-y-auto h-screen bg-black/40 z-50 !m-0 px-12 lg:px-20 xl:px-12 2xl:px-20'>
            <div className='max-w-[1440px] mx-auto my-10 bg-white rounded-3xl'>
                <div className='relative grid grid-cols-1 gap-6 mx-auto h-auto px-4 py-10 sm:p-10 '>
                    <button type='button' onClick={closeModal} className='absolute -right-10 top-0 bg-b3 text-white flex p-1 justify-center items-center w-8 h-8 rounded-full'>
                        <IoCloseOutline className='text-3xl' />
                    </button>
                    <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black font-bold text-center'>Cosmetic Rating: What does it mean?</h2>
                    <p className='text-black font-bold leading-6 text-center max-w-[929px] w-full mx-auto'>
                        All condition appliances are tested and confirmed to operate like new. We grade our scratch and dent appliances based on their cosmetic appearance. These scores refer to how the appliance looks not how they function.
                    </p>
                    {/* <CosmatingRatingSlider /> */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[10px] xl:mt-14" >
                        <CosmatingRatingSlider title='Cosmetic Rating' codmetics='Moderate' dicount='Massive' stars={3} type={1} discount={1} />
                        <CosmatingRatingSlider title='Cosmetic Rating' codmetics='Minor' dicount='Huge' stars={4} type={2} discount={2} />
                        <CosmatingRatingSlider title='Cosmetic Rating' codmetics='Very Minor-None' dicount='Great' stars={5} type={3} discount={3} />
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <button type='button' onClick={closeModal} className='w-36 p-3 text-center bg-b3 rounded-md text-white font-semibold'>OK</button>
                        <Link to="" className='w-36 p-4 rounded-md text-center text-b3 font-semibold'>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteLaundary