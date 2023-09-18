import React from 'react';
import EditSvg from '../../svgs/EditSvg';
import { RiDeleteBin6Line } from 'react-icons/ri';

const EmailPreferenceData = ({ title, phoneno }) => {

    return (
        <>
            <div className='flex items-center justify-between gap-3'>
                <div className='flex flex-col gap-4'>
                    <h3 className=' font-semibold'>{title}</h3>
                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor.
                    </p>
                </div>
                <div className='flex gap-10 items-center'>
                    <div class="inline-flex items-center">
                        <div class="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                            <input id={title}
                                type="checkbox"
                                class="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 bg-gray-300 transition-colors duration-300 checked:bg-b3 peer-checked:border-b3 peer-checked:before:bg-b3" checked
                            />
                            <label
                                for={title}
                                class="before:content[''] absolute top-2/4 left-[6px] h-3 w-3 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-b3 peer-checked:before:bg-b3"
                            >
                                <div
                                    class="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                                    data-ripple-dark="true"
                                ></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='bg-[rgba(0,0,0,0.08)]' />
        </>
    )
}

export default EmailPreferenceData