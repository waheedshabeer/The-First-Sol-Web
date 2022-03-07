
import React from 'react'
import {NavLink } from 'react-router-dom'
import { ASSETS } from '../../Assets/Path'


export const Nav = () => {
 
    return (
        <div className="w-full flex flex-col py-4 space-y-2">
            <div className='flex items-center justify-end  w-full'>                    
                <div className='flex space-x-4 text-aqua-normal '>      
                    <i className="fab fa-facebook-f hover:text-black"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className='flex items-center justify-between '>
                <div className="w-16 h-16">
                    <img className="w-full h-full rounded-full shadow-2xl" src={ASSETS.LOGO} alt="" />
                </div>
                <div className="flex justify-end text-aqua-normal">
                    <ul className="flex space-x-4">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/about-us">ABOUT US</NavLink>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>CAREERS</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
