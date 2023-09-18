import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const NeuShieldPopup = ({ closeModal }) => {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full p-10 overflow-y-auto h-screen bg-black/40 z-50 !m-0'>
            <div className='max-w-[580px] relative flex flex-col gap-4 m-auto w-full bg-white rounded-24px p-10 my-10'>
                <button type='button' onClick={closeModal} className='absolute -right-10 top-0 bg-b3 text-white flex p-1 justify-center items-center w-8 h-8 rounded-full'>
                    <IoCloseOutline className='text-3xl' />
                </button>
                <div>
                    <img src="/neushieldround.webp" className='w-16 h-16 mx-auto' alt="neushield" />
                </div>
                <h2 className='text-2xl font-bold text-center'>1 Year Neu Shield Warranty Included</h2>
                <div>
                    <h3 className='font-bold'>
                        Onsite Repair Services
                    </h3>
                    <p>
                        Technicians right at your door step. In qualifying zip codes our technicians come to you!
                    </p>
                    <h3 className='font-bold mt-5'>
                        Replacements Available
                    </h3>
                    <p>
                        If an appliance is deemed unrepairable by our technicians. We offer a replacement of equal value!
                    </p>
                    <h3 className='font-bold mt-5'>
                        Information on File
                    </h3>
                    <p>
                        No need to save your receipts or register your appliance. We save your information for you!
                    </p>
                </div>
                <div className='flex justify-center mt-4'>
                    <button type='button' onClick={closeModal} className='uppercase text-center px-10 py-3 font-semibold text-white bg-b3 rounded-md'>
                        OK
                    </button>
                </div>
                <div className='mt-2 flex justify-center'>
                    <Link to="" className='text-b3 font-semibold'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default NeuShieldPopup