import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { BsPencil,BsFillTrashFill } from 'react-icons/bs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {deleteSection} from '../../api/admin'
import {toast} from 'react-toastify'

const Table = ({ getSections,sections,setSections,pop }) => {

  const handleDragEnd = (result) => {
    // console.log(result)
    const items = Array.from(sections)
    const [recordedItem] = items.splice(result.source.index,1)
    items.splice(result.destination.index,0,recordedItem)
    const updatedItems = items.map((item, index) => ({
      ...item,
      index: index+1 // Add the index property
  }));
  // console.log(updatedItems)
  setSections(updatedItems);
  }

  const [delLoading,setDelLoading] = useState(false)

      const DeleteSection = async (e,id) => {
        e.preventDefault()
         setDelLoading(true)
         const data = {id:id}
         const res = await deleteSection(data);
         if(res.status === 200){
           setDelLoading(false)
           getSections()
           toast.success(res.data.msg, {
             position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }else{
          setDelLoading(false)
          toast.error(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
        }
      }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-b3 font-medium text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">Section Title</th>
                  <th scope="col" className="px-6 py-4">Card Style</th>
                  <th scope="col" className="px-6 py-4">Section Type</th>
                  <th scope="col" className="px-6 py-4">Category</th>
                  <th scope="col" className="px-6 py-4">Actions</th>
                </tr>
              </thead>
            
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId='sections'>
                    {(provided) => (
                      <tbody ref={provided.innerRef} {...provided.droppableProps}>
                        {sections.map((section, index) => (
                          <Draggable key={section._id} draggableId={section._id} index={index}>
                            {(provided) => (
                              <tr
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                key={section._id}
                                title="Draggable"
                                className="pt-2 border-2 border-b6 hover:border-red-500 hover:cursor-pointer"
                              >
                                <td className="px-2 py-4 font-medium w-20 ">{section.title}</td>
                                <td className="whitespace-nowrap px-5 py-4 capitalize">{section.cardStyle.replace(/\-/g,' ')}</td>
                                <td className="whitespace-nowrap px-5 py-4 capitalize">{section.type.replace(/\-/g,' ')}</td>
                                <td className="whitespace-nowrap px-5 py-4 capitalize">{section.categorySlug.replace(/\-/g,' ')}</td>
                                <td className="flex space-x-2 whitespace-nowrap px-6 py-4 " title="Update, Create & View Section Items">
                                  <NavLink title="Manage Section Item" to={`/admin/manage-section-items/${section.cardStyle}/${section._id}`} className='flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-2 rounded-full cursor-pointer py-2' ><AiFillEye className="text-lg" /></NavLink>
                                  <span onClick={(e)=>pop(e,section._id,section.title,section.type,section.slug,section.cardStyle)} title="Edit Section" className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2' ><BsPencil className="text-lg" /></span>
                                  <span title="Delete Section" onClick={e=>DeleteSection(e,section._id)} className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' >{delLoading ? <img src="/loader-bg.gif" className='w-4 h-4' />: <BsFillTrashFill className="text-base" />}</span>
                                </td>
                              </tr>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </tbody>
                    )}
                  </Droppable>
                </DragDropContext>
               
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;