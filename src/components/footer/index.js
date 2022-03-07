import React from 'react'

export const Footer = () => {
    return (
        <div className="space-y-4">
            <div className="absolute w-full page-padding space-y-6 sm:space-y-6 md:space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col col-span-2 text-white space-y-4">
                        <div className="h-10 w-10 bg-white">
                            <img src="" alt="" />
                        </div>
                        <div className="text-sm font-semibold">
                            We've been fulfilling the needs of various
                            businesses successfully for several years.Be it
                            technology, education, healthcare,
                            beauty,food,travel,real estate, you name it,we've
                            got the right software solution for it
                        </div>
                    </div>

                    <div className="text-sm font-medium  space-y-4 text-white">
                        <div>USEFULL LINKS</div>
                        <div className="space-y-4">
                            <div>Home</div>
                            <div>About Us</div>
                            <div>Services</div>
                            <div>Portfolio</div>
                            <div>Careers</div>
                            <div>Contact Us</div>
                        </div>
                    </div>

                    <div className="text-sm font-medium text-white space-y-4">
                        <div>CONTACT US</div>
                        <div>
                            <div>903 BLOCK</div>
                            <div>Johar Town</div>
                            <div>Lahore</div>
                            <div>Phone:</div>
                            <div>Phone:</div>
                            <div>Email:hello@thefirsrsol.com</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-white">
                    <span className="hidden sm:text-xs">CopyRight</span>{' '}
                    ©Copyright
                    <span className=" font-bold"> Hashloops Tecnology</span>.
                    All Rights Reserved
                </div>
            </div>
        </div>
    )
}
