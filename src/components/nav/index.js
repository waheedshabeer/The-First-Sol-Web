import React, { useState } from 'react'
import { NavLink , Link } from 'react-router-dom'
import { ASSETS } from '../../Assets/Path'
import { THEME } from '../../Assets/theme'

export const Nav = () => {
    const [ResponsiveNavbar, setResponsiveNavbar] = useState(false)
    return (
        <div className="w-full flex flex-col py-4 space-y-2 page-padding">
            <div className="flex items-center justify-end  md:w-full">
                <div className="flex space-x-4 text-aqua-normal ">
                    <i className="fab fa-facebook-f hover:text-black"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className="space-y-4 items-center md:flex md:justify-between ">
                <div className='flex items-center justify-between'>
                    <Link to="/" className="w-10 h-10 sm:w-16 sm:h-16">
                        <img
                            className="w-full h-full rounded-full shadow-2xl"
                            src={ASSETS.LOGO}
                            alt=""
                        />
                    </Link>
                    <div>
                        <i className="fa fa-bars md:hidden text-white text-2xl" onClick={() => setResponsiveNavbar(!ResponsiveNavbar)}></i>
                    </div>
                </div>
                <div className={`${THEME.TEXT} Poppins-Semibold`}>

                    <ul className={`${ResponsiveNavbar ? 'flex' : 'hidden'} md:flex flex-col items-center  md:flex-row space-x-4 cursor-pointer`}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? `text-aqua-normal`
                                    : `text-white hover:text-aqua-normal`
                            }>
                            HOME
                        </NavLink>
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                isActive
                                    ? `text-aqua-normal`
                                    : `text-white hover:text-aqua-normal`
                            }>
                            ABOUT US
                        </NavLink>
                        <div>
                            <div className="relative group">
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive
                                            ? `text-aqua-normal`
                                            : `text-white hover:text-aqua-normal`
                                    }>
                                    SERVICES
                                </NavLink>
                                <div className="hidden flex-col group-hover:flex group-hover:duration-1000 absolute space-y-2 w-42 bg-black-dark p-2 border text-normal Poppins-Light">
                                    <div>
                                        <NavLink
                                            to="/Webdevelopment"
                                            className={`hover:${THEME.HEADING}`}>
                                            WebbDevelopment
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/Andriod"
                                            className={`hover:${THEME.HEADING}`}>
                                            AndroidDevelopment
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/ios"
                                            className={`hover:${THEME.HEADING}`}>
                                            IOSDevelopment
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/seo"
                                            className={`hover:${THEME.HEADING}`}>
                                            SEO
                                        </NavLink>
                                    </div>

                                    <div>
                                        <NavLink
                                            to="/SocialMediaMaketing"
                                            className={`hover:${THEME.HEADING}`}>
                                            SocialMediaMarketing
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/Financial"
                                            className={`hover:${THEME.HEADING}`}>
                                            Financials-ERP
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                isActive
                                    ? `text-aqua-normal`
                                    : `text-white hover:text-aqua-normal`
                            }>
                            PORTFOLIO
                        </NavLink>
                        <div>
                            <NavLink
                                to="/careers"
                                className={({ isActive }) =>
                                    isActive
                                        ? `text-aqua-normal`
                                        : `text-white hover:text-aqua-normal`
                                }>
                                CAREERS
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/Contact-Us"
                                className={({ isActive }) =>
                                    isActive
                                        ? `text-aqua-normal`
                                        : `text-white hover:text-aqua-normal`
                                }>
                                CONTACT US
                            </NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
