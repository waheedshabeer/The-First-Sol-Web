import React from 'react'
import {THEME} from '../../Assets/theme'
import {Layout} from '../../components/layout'
import {SERVICES} from './Constant'
export const Services = () => {
    return (
        <Layout>
            <div className="py-14">
                <div className="space-y-8">
                    <div className="flex justify-center">
                        <div
                            className={`text-xl sm:text-2xl md:text-5xl lg:text-5xl ${THEME.TEXT} Poppins-Regular`}>
                            Services
                        </div>
                    </div>
                    <div
                        className={`text-center ${THEME.TEXT} text-xs sm:text-base md:text-lg Poppins-Light`}>
                        At TheFirstSol Technologies we focus on delivering
                        end-to-end solutions according to customer requirements.
                        This includes understanding the requirements, planning,
                        developing, deploying, and maintaining/upgrading the
                        solutions we build.
                    </div>
                </div>

                <div className="py-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-2 gap-48 place-items-center">
                    {SERVICES.map((item, index) => (
                        <div
                            key={index}
                            className="h-64 w-64 group drop-shadow-2xl cursor-pointer">
                            <div
                                className={`flex items-center justify-center duration-300 w-full h-full group-hover:-mt-20 ${item.COLOR} text-white z-aut drop-shadow-sm`}>
                                <i
                                    className={`${item.ICON} text-7xl `}
                                    aria-hidden="true"></i>
                            </div>
                            <div className="w-full -mt-64 group-hover:mt-0 duration-500 bg-white ">
                                <div className="flex justify-center text-gray-normal Poppins-Semibold font-medium p-4">
                                    <h1>{item.HEADING}</h1>
                                </div>
                                <hr />
                                <div className="text-center text-gray-normal text-sm p-4 Poppins-Light">
                                    {item.DISCRIPTION}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
