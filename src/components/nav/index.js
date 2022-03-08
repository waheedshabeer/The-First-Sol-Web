import React from 'react'
import {NavLink} from 'react-router-dom'
import {ASSETS} from '../../Assets/Path'
export const Nav = () => {
    return (
        <div className="w-full flex flex-col py-4 space-y-2 page-padding">
            <div className="flex items-center justify-end  md:w-full">
                <div className="flex space-x-4 text-aqua-normal ">
                    <i className="fab fa-facebook-f hover:text-black"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className="space-y-4 items-center md:flex md:justify-between ">
                <div className="w-16 h-16">
                    <img
                        className="w-full h-full rounded-full shadow-2xl"
                        src={ASSETS.LOGO}
                        alt=""
                    />
                </div>
                <div className="text-aqua-normal">
                    <div><i className="fas fa-bars md:hidden right-0"></i></div>
                    <ul className="flex flex-col items-center md:flex md:flex-row space-x-4 ">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/about-us">ABOUT US</NavLink>
                        <NavLink to="/services">SERVICES</NavLink>
                        <li>PORTFOLIO</li>
                        <li>CAREERS</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
