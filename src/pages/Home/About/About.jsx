import { useEffect } from 'react';
import aboutBG from '../../../assets/about.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])




    return <div id='about' className="container mx-auto px-5 flex justify-between lg:h-[500px]  flex-col lg:flex-row gap-8 items-center mt-20">
        <div data-aos="fade-right" className='flex-1 h-full'>
            <img className='w-full h-full' src={aboutBG} alt="" />
        </div>
        <div data-aos="fade-left" className='flex-1'>
            <h3 className='text-blue-600 text-2xl font-bold mb-5'>About Us</h3>

            <p className=' leading-9 text-gray-600  '>At ZenTask, we believe in the art of simplified productivity. Navigate your daily tasks with ease as ZenTask transforms the way you approach work. Our platform offers a harmonious blend of intuitive task creation, seamless progress tracking, and tailored prioritization. Experience the tranquility of unified task assignment for effortless collaboration, ensuring every project flows seamlessly. Join us on a journey where efficiency meets tranquility, and your tasks find a home in the Zen of productivity. Embrace the balance, embrace ZenTask.</p>
        </div>
    </div>
}

export default About