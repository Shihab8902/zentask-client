import React, { useState } from 'react'
import { MdUpdate } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';




const TaskCard = ({ task, refetch }) => {
    const { title, deadline, priority, description, _id } = task;

    const axiosInstance = useAxios();

    const navigate = useNavigate();

    const handleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosInstance.delete(`/api/task?id=${id}`)
                    .then(res => {

                        if (res.data?.deletedCount > 0) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                text: "The task has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })



            }
        });
    }





    return <>










        <div className={`px-3 py-4  bg-white shadow-2xl rounded-lg mb-5 cursor-move mx-2 `}  >
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
                <button onClick={() => {
                    navigate("/edit", { state: task })
                }}> <FaEdit /></button>
                <button onClick={() => handleDeleteTask(_id)} className='text-red-600'> <FaTrash /></button>
            </div>
        </div>




    </>
}




export default TaskCard