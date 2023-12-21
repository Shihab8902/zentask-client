import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-20">
            <nav className="grid grid-flow-col gap-4">
                <Link spy={true} smooth={true} offset={50} duration={500} className="mt-8 lg:mt-0 lg:mr-8 font-semibold cursor-pointer" to="features">Features</Link>
                <Link spy={true} smooth={true} offset={50} duration={500} className="mt-8 lg:mt-0 lg:mr-8 font-semibold cursor-pointer" to="about">About Us</Link>
                <Link spy={true} smooth={true} offset={50} duration={500} className="mt-8 lg:mt-0 lg:mr-8 font-semibold cursor-pointer" to="clients">Our Clients</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-8">
                    <NavLink className="text-4xl" to="http://www.facebook.com"><CiFacebook /></NavLink>
                    <NavLink className="text-4xl" to="http://www.twitter.com"><RiTwitterXLine /></NavLink>
                    <NavLink className="text-4xl" to="http://www.linkedin.com"><TiSocialLinkedinCircular /></NavLink>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by ZenTask technology ltd.</p>
            </aside>
        </footer>
    )
}

export default Footer