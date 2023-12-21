import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ClientCard = ({ client }) => {
    const { image, profession, name, description } = client;

    useEffect(() => {
        Aos.init({
            duration: 600
        })
    }, [])



    return <div className=" p-5 shadow-2xl" data-aos="zoom-in-up">
        <img className=" w-20 h-20 mx-auto rounded-full" src={image} alt="" />

        <div >
            <h3 className="text-center mt-5 text-xl font-bold ">{name}</h3>
            <p className="text-blue-600 font-semibold text-center mt-3">{profession}</p>
            <p className="text-xs  mt-3 text-gray-500 leading-6">{description}</p>
        </div>
    </div>
}

export default ClientCard