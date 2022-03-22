import React from 'react'
import {THEME} from '../../Assets/theme'
import { Heading } from '../../components/Cards/Heading'
import {HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import {SERVICES} from './Constant'
export const Services = () => {
    return (
        <Layout>
            <div className="py-14">
                <div className="">
                    
                        <Heading HEADING={HEADING.SARVICES.SARVICES}/>
                    
                    <div
                        className={`text-left ${THEME.TEXT} text-xs sm:text-base md:text-lg Poppins-Light`}>
                        At The First Sol, we focus on delivering end-to-end
                        solutions according to customer requirements. This
                        includes understanding the requirements, planning,
                        developing, deploying and maintaining/upgrading the
                        solutions we build.
                    </div>
                </div>

                <div className="py-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-48 md:gap-2 place-items-center">
                    {SERVICES.map((item, index) => (
                        <div
                            key={index}
                            className="h-64 w-64 group drop-shadow-2xl cursor-pointer">
                            <div
                                className={`flex items-center justify-center duration-300 w-full h-full group-hover:-mt-20 ${item.COLOR} text-white z-aut drop-shadow-sm`}>
                                <i
                                    className={`${item.ICON} text-7xl`}
                                    aria-hidden="true"></i>
                            </div>
                            <div className="w-full -mt-64 group-hover:mt-0 duration-500 bg-white">
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
