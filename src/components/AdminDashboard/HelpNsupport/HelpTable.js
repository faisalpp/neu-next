import React from 'react'
import HelpRow from './HelpRow'

const HelpTable = ({data,setPage,getBlog}) => {
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b border-l border-b3 bg-b3 font-medium text-white">
            <tr>
              <th scope="col" className="px-6 py-4">Title</th>
              <th scope="col" className="px-6 py-4">Description</th>
              <th scope="col" className="px-6 py-4">Category</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((blog,index)=><HelpRow key={index} id={blog._id} setPage={setPage} getBlog={getBlog}   title={blog.title} slug={blog.slug} desc={blog.shortDescription} category={blog.category} />)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default HelpTable