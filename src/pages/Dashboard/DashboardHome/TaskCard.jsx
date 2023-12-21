import React from 'react'
import { MdUpdate } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import { FaEdit, FaTrash } from "react-icons/fa";



const TaskCard = ({ task }) => {
    const { title, deadline, priority, description } = task;






    return <div className={`px-3 py-4  bg-white shadow-2xl rounded-lg mb-5 cursor-move mx-2 `}  >
        <h3 className='font-bold text-xl'>{title}</h3>
        <div className='flex items-center justify-between'>
            <p className='flex items-center gap-2'>
                {
                    priority === "High" ? <FcHighPriority /> : priority === "Moderate" ? <FcMediumPriority /> : priority === "Low" ? <FcLowPriority /> : ''
                }
                {priority}
            </p>
            <p className='font-medium text-sm my-2 flex items-center gap-2'><MdUpdate /> {deadline}</p>
        </div>

        <p className='mt-3 text-gray-500 text-xs'>{description}</p>

        <div className='text-lg flex items-center gap-4 mt-3'>
            <button> <FaEdit /></button>
            <button className='text-red-600'> <FaTrash /></button>
        </div>
    </div>
}

export default TaskCard