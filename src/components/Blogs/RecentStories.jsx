import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'
import moment from 'moment'

const RecentStories = ({ load, data, LoadMore }) => {

    const FormatDate = (date) => {
        return moment(date).format('MMMM D, YYYY');
    }

    return (
        <div className='pb-10 lg:pb-16 xl:pb-20 pt-5 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
            {data.length > 0 ? <><h2 className='text-2xl xl:text-32px font-bold text-b18 text-center'>Recent Stories</h2>
                <div className='my-10 grid grid-cols-1 xs:grid-cols-2 md:!grid-cols-3 gap-y-10 gap-x-4 2xl:gap-6'>
                    {data.length > 0 && data.map((blog, index) => (
                        <BlogCard key={index} image={blog.thumbnail ? blog.thumbnail : '/no-image.jfif'} title={blog.title.substr(0, 50)} date={FormatDate(blog.createdAt)} readMore={blog.slug} />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button type="button" onClick={LoadMore} className='px-4 py-3 rounded-lg border bg-b3 text-white border-b3 hover:bg-white hover:text-b3 font-medium duration-300 text-xs'>{load ? <img src="loader-bg.gif" className='w-5 h-5' /> : 'Read More'}</button>
                </div></> : <div className='w-full flex justify-center' ><img src="/not-found.webp" className='w-32' /></div>}
        </div>
    )
}

export default RecentStories