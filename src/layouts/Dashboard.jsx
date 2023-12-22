import { RiMenu2Line } from "react-icons/ri";
import { NavLink, Outlet } from 'react-router-dom';
import UserProfile from "../components/UserProfile/UserProfile";
import { MdTaskAlt } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

import './dashboard.css'


const Dashboard = () => {

    const navLinks = <>

        <li className="bg-white dashboard-link">
            <NavLink className="py-2 text-lg font-semibold" to="/"><MdTaskAlt /> My Tasks</NavLink>
        </li>
        <li className=" dashboard-link mt-6">
            <NavLink className="py-2 text-lg font-semibold bg-white" to="/new"><IoMdAddCircle />Create a new task</NavLink>
        </li>



    </>




    return (
        <div className="drawer lg:drawer-open ">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  container mx-auto px-5">
                <div className="w-full  px-4 py-2 lg:hidden flex justify-between items-center">
                    <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden text-4xl "><RiMenu2Line /></label>
                    <UserProfile />
                </div>


                <Outlet />



            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <div className=" font-bold lg:hidden text-2xl">Zen<span className="text-blue-600">Task.</span></div>
                    <div className="hidden lg:flex items-center justify-between ">
                        <div className=" font-bold text-2xl">Zen<span className="text-blue-600">Task.</span></div>
                        {/* User profile */}
                        <UserProfile />
                    </div>



                    <div className="mt-20">
                        {navLinks}
                    </div>

                </ul>


            </div>
        </div>
    )
}

export default Dashboard