import React from 'react'
import {Link, NavLink} from 'react-router-dom'
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
                    <div>
                        <i className="fas fa-bars md:hidden right-0"></i>
                    </div>
                    <ul className="flex flex-col items-center md:flex md:flex-row space-x-4 ">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/about-us">ABOUT US</NavLink>
                        <div>
                            <div className="relative group">
                                <NavLink to="/services">SERVICES</NavLink>
                                <div className="flex flex-col items-center hidden group-hover:block absolute space-y-2 w-42 p-2 bg-white border overflow:hidden Poppins-Light">
                                    <div>
                                        <NavLink
                                            to="/Webdevelopment"
                                            className="hover:text-gray-normal">
                                            WebbDevelopment
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/Andriod"
                                            className="hover:text-gray-normal">
                                            AndroidDevelopment
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/ios"
                                            className="hover:text-gray-normal">
                                            IOSDevelopment
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/seo"
                                            className="hover:text-gray-normal">
                                            SEO
                                        </NavLink>
                                    </div>

                                    <div>
                                        <NavLink
                                            to="/SocialMediaMaketing"
                                            className="hover:text-gray-normal">
                                            SocialMediaMarketing
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/Financial"
                                            className="hover:text-gray-normal">
                                            Financials-ERP
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li>PORTFOLIO</li>
                        <div>
                            <NavLink to="/careers">CAREERS</NavLink>
                        </div>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
