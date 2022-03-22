import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

export const NavBar = ({
    toggle,
    toggleHandler,
    fullName,
    OnExecuteAboutMe,
    OnExecuteExperties,
    OnExecuteMySelf,
    OnExecuteMyWork,
}) => {
    const GetFirstName = () => {
        const Name = fullName.split(' ')
        return Name[0].concat('.')
    }
    let navigate = useNavigate()
    return (
        <nav className=" md:flex md:justify-between bg-aqua-normal md:items-center px-8 md:px-20 py-4 md:py-6 text-white text-center w-full fixed z-50">
            <div className="flex items-center justify-between md:hidden">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold subpixel-antialiased">
                    {fullName ? GetFirstName() : 'The First Sol'}
                </div>
                {!toggle ? (
                    <i
                        className="fas fa-bars text-white text-2xl cursor-pointer"
                        onClick={toggleHandler}></i>
                ) : (
                    <i
                        className="fas fa-times text-white text-2xl cursor-pointer"
                        onClick={toggleHandler}></i>
                )}
            </div>
            {toggle && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center justify-center space-y-3 font-semibold text-xs sm:text-base">
                        <div
                            className="cursor-pointer"
                            onClick={OnExecuteMySelf}>
                            Home
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={OnExecuteMyWork}>
                            Work
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={OnExecuteExperties}>
                            Service
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={OnExecuteAboutMe}>
                            About
                        </div>
                        <Link to="/contact-us">Contact</Link>
                        <button
                            className="rounded-full border-2 border-white font-semibold whitespace-nowrap w-min px-4 py-1 hover:bg-white hover:text-aqua-normal"
                            onClick={() => navigate(`/contact-Us`)}>
                            Let,s Talk
                        </button>
                    </div>
                </div>
            )}
            <div className="hidden md:block text-4xl font-semibold subpixel-antialiased">
                {fullName ? GetFirstName() : 'Calvino.'}
            </div>
            <div className=" hidden md:flex md:flex-row md:justify-center md:items-center space-x-2 md:space-x-8 font-semibold text-lg">
                <div className="cursor-pointer" onClick={OnExecuteMySelf}>
                    Home
                </div>
                <div className="cursor-pointer" onClick={OnExecuteMyWork}>
                    Work
                </div>
                <div className="cursor-pointer" onClick={OnExecuteExperties}>
                    Service
                </div>
                <div className="cursor-pointer" onClick={OnExecuteAboutMe}>
                    About
                </div>
                <Link to="/contact-us">Contact</Link>
            </div>
            <div>
                <button
                    className="hidden md:block whitespace-nowrap rounded-full border-2 text-sm md:text-base border-white font-semibold px-4 lg:px-10 py-1 lg:py-2 hover:bg-white hover:text-aqua-normal"
                    onClick={() => navigate(`/contact-Us`)}>
                    Let,s Talk
                </button>
            </div>
        </nav>
    )
}
