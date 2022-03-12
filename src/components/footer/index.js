import React from 'react'
import {ASSETS} from '../../Assets/Path'
import { THEME } from '../../Assets/theme'

export const Footer = () => {
    return (
        <div className={`${THEME.TEXT} backdrop-blur-sm ${THEME.FOOTER} page-padding py-5 space-y-8`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8">
                <div className="flex flex-col col-span-2 pr-4 space-y-4">
                    <div className="h-10 w-10 bg-white">
                        <img src={ASSETS.LOGO} alt="" />
                    </div>
                    <div className="text-sm Poppins-Light">
                        We've been fulfilling the needs of various businesses
                        successfully for several years.Be it technology,
                        education, healthcare, beauty,food,travel,real estate,
                        you name it,we've got the right software solution for it
                    </div>
                </div>

                <div className="text-sm space-y-4 Poppins-Light">
                    <div className="Poppins-Medium">USEFULL LINKS</div>
                    <div className="space-y-4 text-sm">
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Services</div>
                        <div>Portfolio</div>
                        <div>Careers</div>
                        <div>Contact Us</div>
                    </div>
                </div>

                <div className="text-sm space-y-4 Poppins-Light">
                    <div className="Poppins-Medium">CONTACT US</div>
                    <div className="text-sm">
                        <div>903 BLOCK</div>
                        <div>Johar Town</div>
                        <div>Lahore</div>
                        <div>Phone:</div>
                        <div>Phone:</div>
                        <div>Email:hello@thefirsrsol.com</div>
                        <div className="flex gap-x-4 pt-8">
                            <i className="fab fa-facebook-f hover:text-black"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center Poppins-Light">
                <span className="hidden sm:text-xs">CopyRight</span> ©Copyright
                <span className="Poppins-ExtraBold text-white">
                    
                    thefirstsol
                </span>
                . All Rights Reserved
            </div>
        </div>
    )
}
