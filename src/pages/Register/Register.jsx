import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useContext, useState } from "react";
import { UserContext } from "../../context/AuthProvider";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';






const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageHostingAPIKey = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);

    const navigate = useNavigate();

    const { createUser } = useContext(UserContext);

    const onSubmit = (data) => {
        setIsSigningUp(true);

        const imageData = { image: data.image?.[0] }
        axios.post(`https://api.imgbb.com/1/upload?key=${imageHostingAPIKey}`, imageData, {
            headers: {
                "content-Type": "multipart/form-data"
            }
        })
            .then(res => {
                if (res.data?.success) {
                    const imageURL = res.data?.data.display_url;
                    createUser(data.email, data.password)
                        .then(result => {
                            if (result?.user) {
                                updateProfile(result.user, {
                                    displayName: data?.name,
                                    photoURL: imageURL
                                })
                                    .then(() => {
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            text: "Your account has been registered successfully!",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        setIsSigningUp(false);
                                        reset();
                                        navigate("/")
                                    })
                            }
                        })
                        .catch(error => {
                            Swal.fire({
                                title: "Error!",
                                text: error.message,
                                icon: "error"
                            })
                        })
                }

            });
    }




    return (
        <div className='p-3 md:p-6'>


            <div className='flex min-h-screen justify-center items-center container mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='rounded-lg md:p-10 md:border-2 w-full md:w-3/4 lg:w-1/2'>

                    <div className='text-center mb-7'>
                        <Link to="/" className='font-bold text-3xl'>Zen<span className='text-blue-600'>Task.</span></Link>
                    </div>

                    <div>
                        <label className='font-bold block mb-2' htmlFor="name">Name</label>
                        <div className='flex items-center border-2 rounded-lg'>
                            <span className='ml-3 text-xl text-gray-400'><FiUser /></span>
                            <input {...register("name", { required: true })} className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type="text" name="name" id="name" placeholder='Enter your name' />
                        </div>
                        {errors.name?.type === "required" && <p className='text-red-500 text-sm font-medium'>This field is required</p>}
                    </div>


                    <div className='my-5'>
                        <label className='font-bold block mb-2' htmlFor="name">Email</label>
                        <div className='flex items-center border-2 rounded-lg'>
                            <span className='ml-3 text-xl text-gray-400'><MdOutlineMail /></span>
                            <input {...register("email", { required: true })} className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type="email" name="email" id="email" placeholder='Enter your email' />
                        </div>
                        {errors.email?.type === "required" && <p className='text-red-500 text-sm font-medium'>This field is required</p>}
                    </div>

                    <div className='my-5'>
                        <label className='font-bold block mb-2' htmlFor="name">Password</label>
                        <div className='flex items-center border-2 rounded-lg'>
                            <span className='ml-3 text-xl text-gray-400'><IoIosLock /></span>
                            <input {...register("password", { required: true, minLength: 6 })} className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter password' />
                            <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='text-xl text-gray-400 cursor-pointer mr-3'>
                                {
                                    isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />
                                }
                            </span>
                        </div>
                        {errors.password?.type === "required" && <p className='text-red-500 text-sm font-medium'>This field is required</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500 text-sm font-medium'>Password should be at least 6 character</p>}
                    </div>


                    <div className='my-5'>
                        <label className='font-bold block mb-2' htmlFor="name">Photo</label>
                        <div className=' border-2 rounded-lg '>
                            <input {...register("image", { required: true })} accept='image/*' className='w-full px-4 py-3 ' type="file" name="image" id="image" />
                        </div>
                        {errors.image?.type === "required" && <p className='text-red-500 text-sm font-medium'>This field is required</p>}
                    </div>


                    <div>
                        <button type='submit' disabled={isSigningUp} className='w-full bg-blue-600 py-3 text-white font-semibold rounded-lg '>{isSigningUp ? "Registering...." : "Register"}</button>
                    </div>

                    <p className='text-center mt-5 font-medium'>Already have an account? <Link className='text-blue-500 hover:underline' to="/login">Log In</Link></p>

                </form>


            </div>


        </div>
    )
}

export default Register