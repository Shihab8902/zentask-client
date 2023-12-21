import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../context/AuthProvider';

import Swal from 'sweetalert2';



const NewTask = () => {

    const { user } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [priority, setPriority] = useState('');
    const navigate = useNavigate();
    const axiosInstance = useAxios();


    const onSubmit = (data) => {
        axiosInstance.post("/api/task", { ...data, email: user?.email, status: "todo" })
            .then(res => {
                if (res.data?._id) {
                    Swal.fire({
                        position: "Center",
                        icon: "success",
                        title: "Task added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/");
                    reset();

                }
            })

    }



    return <div>
        <h3 className="text-center mt-10 text-3xl font-semibold">Create a new task</h3>


        <form onSubmit={handleSubmit(onSubmit)} className="my-10 w-3/4 mx-auto">

            <div>
                <label className='font-bold block mb-2' htmlFor="title">Title</label>
                <div className='flex items-center border-2 rounded-lg'>

                    <input {...register("title", { required: true, maxLength: 60 })} className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type="text" name="title" id="title" placeholder='Enter a title (max 60 character)' />
                </div>
                {errors.title?.type === "required" && <p className='text-red-500 text-sm font-medium'>This field is required</p>}
                {errors.title?.type === "maxLength" && <p className='text-red-500 text-sm font-medium'>Maximum character limit exceed!</p>}
            </div>


            <div className="mt-5">
                <label className='font-bold block mb-2' htmlFor="priority">Priority</label>
                <select {...register("priority", { required: true })} onChange={(e) => setPriority(e.target.value)} value={priority} name="priority" id="priority" className="border-2 rounded-lg w-full outline-none py-3 px-4 cursor-pointer">
                    <option value="" disabled>Select a priority level</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                </select>
                {errors.priority?.type === "required" && <p className='text-red-500 text-sm font-medium'>This field is required</p>}
            </div>


            <div className="mt-5">
                <label className='font-bold block mb-2' htmlFor="deadline">Deadline</label>


                <input {...register("deadline", { required: true, })} className='w-full px-4 py-3 outline-none border-2 rounded-lg  text-black placeholder:font-normal ' type="date" name="deadline" id="deadline" />

                {errors.deadline?.type === "required" && <p className='text-red-500 text-sm font-medium'>This field is required</p>}
            </div>


            <div className="mt-5">
                <label className='font-bold block mb-2' htmlFor="priority">Description</label>
                <textarea {...register("description", { maxLength: 300, })} name="description" id="description" className="w-full rounded-lg h-[200px] border-2 outline-none py-3 px-4 resize-none" placeholder="Enter a task description (max 300 character)"></textarea>
                {errors.description?.type === "maxLength" && <p className='text-red-500 text-sm font-medium'>Maximum character limit exceed!</p>}
            </div>


            <button type="submit" className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg">Add Task</button>

        </form>




    </div>
}

export default NewTask