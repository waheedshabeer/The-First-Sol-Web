import React from 'react'
import {THEME} from '../../../Assets/theme'
import {SERVICES} from '../Constant'

export const ServiceHome = () => {
    return (
        <div>
            <div className="space-y-8">
                <div className="flex justify-center items-center">
                    <div
                        className={`text-center text-xl sm:text-2xl md:text-5xl lg:text-5xl ${THEME.TEXT} Poppins-Regular`}>
                        Services
                    </div>
                </div>
                <div
                    className={`text-center ${THEME.TEXT} text-xs sm:text-base md:text-lg Poppins-Light`}>
                    At The First Sol Technologies we focus on delivering
                    end-to-end solutions according to customer requirements.
                    This includes understanding the requirements, planning,
                    developing, deploying, and maintaining/upgrading the
                    solutions we build.
                </div>
            </div>
            {/* cards */}
            <div className="py-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-48 md:gap-2  place-items-center">
                {SERVICES.map((item, index) => (
                    <div
                        key={index}
                        className="h-52 lg:h-64 w-52 lg:w-64 group drop-shadow-2xl cursor-pointer">
                        <div
                            className={`flex items-center justify-center duration-300 w-full h-full group-hover:-mt-20 ${item.COLOR} text-white z-aut drop-shadow-sm`}>
                            <i
                                className={`${item.ICON} text-7xl `}
                                aria-hidden="true"></i>
                        </div>
                        <div className="w-full -mt-52 lg:-mt-64 group-hover:mt-0 duration-500 bg-white ">
                            <div className="flex justify-center whitespace-nowrap text-gray-normal Poppins-Semibold p-3 lg:p-4">
                                <h1>{item.HEADING}</h1>
                            </div>
                            <hr />
                            <div className="text-center text-gray-normal text-xs lg:text-sm p-3 lg:p-4 Poppins-Light">
                                ${item.DISCRIPTION}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* cards end */}
        </div>
    )
}
