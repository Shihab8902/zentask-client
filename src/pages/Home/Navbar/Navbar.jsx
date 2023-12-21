import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

import './navbar.css'


const Navbar = () => {




    const navLinks = <>
        <NavLink activeClass="active" spy={true} smooth={true} offset={50} duration={500} className="mt-8 lg:mt-0 lg:mr-8 font-semibold cursor-pointer" to="/">Home</NavLink>
        <Link activeClass="active" spy={true} smooth={true} offset={50} duration={500} className="mt-8 lg:mt-0 lg:mr-8 font-semibold cursor-pointer" to="features">Features</Link>
        <Link activeClass="active" spy={true} smooth={true} offset={50} duration={500} className="mt-8 lg:mt-0 lg:mr-8 font-semibold cursor-pointer" to="about">About Us</Link>
        <Link activeClass="active" spy={true} smooth={true} offset={50} duration={500} className="mt-8 lg:mt-0 lg:mr-8 font-semibold cursor-pointer" to="clients">Our Clients</Link>
    </>



    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 font-bold text-2xl"><Link to="/">Zen<span className="text-blue-600">Task.</span></Link></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {navLinks}
                </ul>
            </div>
        </div>
    )
}

export default Navbar