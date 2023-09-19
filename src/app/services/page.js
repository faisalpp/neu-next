import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <Image width={200} height={200} className='w-32 h-12' quality={1} src="/neu.webp" alt="logo" />
            Hello
        </div>
    )
}

export default page
