import React from 'react'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const TeamCard = ({team,updateSelection}) => {

 const {attributes,listeners,setNodeRef,transform,transition} = useSortable({id:team._id})
//   console.log(team._id)
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} title="Click to Update!" onClick={e=>updateSelection(e,team.name,team.designation,team.image,team._id)} className="border hover:border-b6 border-b20 rounded-[20px] hover:cursor-pointer hover:shadow-s1 duration-300 p-5 w-[200px]">
    <img className="w-40 h-40 rounded-full mx-auto" src={team.image} />
    {/* <div className="pt-[10px]">
        <figcaption className="font-medium text-center">
            <div className='font-bold text-[22px] text-b18 mb-3'>
                {team.name}
            </div>
            <div className='text-b3'>
                {team.designation}
            </div>
        </figcaption>
    </div> */}
   </div>
  )
}

export default TeamCard