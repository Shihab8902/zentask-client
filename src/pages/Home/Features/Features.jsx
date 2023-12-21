import { FaTasks } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { TbStarsFilled } from "react-icons/tb";
import { HiMiniUserGroup } from "react-icons/hi2";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Features = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])



    return <div id="features" className="grid lg:grid-cols-4 gap-6 container mx-auto px-5 my-14">

        <div data-aos="fade-up">
            <FaTasks className="text-5xl text-blue-600 " />
            <h3 className="text-xl font-semibold my-2">Task Creation Simplicity</h3>
            <p className="text-gray-500 text-sm leading-6"> Easily start tasks with a user-friendly process—whether it's a brief entry or detailed description, kickstart your projects effortlessly.</p>
        </div>


        <div data-aos="fade-up">
            <GiProgression className="text-5xl text-blue-600" />
            <h3 className="text-xl font-semibold my-2">Progress in Motion</h3>
            <p className="text-gray-500 text-sm leading-6">Move tasks effortlessly from ongoing to completed, ensuring continuous project momentum and control over your workflow.</p>
        </div>


        <div data-aos="fade-up">
            <TbStarsFilled className="text-5xl text-blue-600" />
            <h3 className="text-xl font-semibold my-2">Priority Perfected</h3>
            <p className="text-gray-500 text-sm leading-6">Customize your workflow by assigning distinct priorities to tasks, allowing for organized and efficient task management.</p>
        </div>


        <div data-aos="fade-up">
            <HiMiniUserGroup className="text-5xl text-blue-600" />
            <h3 className="text-xl font-semibold my-2">Unified Task Assignment</h3>
            <p className="text-gray-500 text-sm leading-6">Boost collaboration with shared task assignment, fostering smooth communications.</p>
        </div>




    </div>
}

export default Features