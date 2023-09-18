import React from 'react';

const AboutCeo = () => {

    return (
        <>
            <div className='bg-b5'>
                <div className='py-10 lg:py-16 xl:py-20 2xl:py-100px maincontainer'>
                    <div className="w-full max-w-[844px] mx-auto flex flex-col items-center text-center gap-5">
                        <div>
                            <img src="quotes.webp" alt="quotes" className='w-16 h-12 2xl:w-24 2xl:h-[67px]' />
                        </div>
                        <p className='md:text-xl xl:text-2xl 3xl:text-3xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero ultrices dis a arcu. Eu rhoncus, non suspendisse nec consequat enim. Proin natoque malesuada donec convallis lectus euismod nec, in.
                        </p>
                        <div>
                            <strong className='text-sm'>John Smith</strong>
                            <br />
                            <span className='text-sm'>
                                CEO
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCeo