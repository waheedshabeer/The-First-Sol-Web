import React from 'react'

export const Nav = () => {
    return (
        <div className="absolute w-full page-padding">
            <div>
                <img />
            </div>
            <div className="w-10 h-10">
                <img src="" alt="" />
            </div>
            <div className="flex justify-end">
                <ul className="flex space-x-4">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>CAREERS</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </div>
    )
}
