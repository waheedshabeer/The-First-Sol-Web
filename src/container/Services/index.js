import React from 'react'
import {Layout} from '../../components/layout'
import {SERVICES} from './Constant'

export const Services = () => {
    return (
        <Layout>
            <div className='py-14'>
                <div className="space-y-8">
                    <div className="flex justify-center">
                        <div className="text-xl sm:text-2xl md:text-5xl lg:text-5xl text-aqua-normal Poppins-Regular">
                            Services
                        </div>
                    </div>
                    <div className="text-center text-gray-normal text-xs sm:text-base md:text-lg Poppins-Light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, hic quidem excepturi perspiciatis enim qui
                        pariatur fugit quod. Velit quisquam minus similique ut
                        iste debitis voluptate temporibus neque quis veniam!
                    </div>
                </div>

                <div className="py-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-2 gap-48 place-items-center">
                    {SERVICES.map((item, index) => (
                        <div
                            key={index}
                            className="h-64 w-64 group drop-shadow-2xl">
                            <div className="flex items-center justify-center duration-1000 w-full h-full group-hover:-mt-20  bg-aqua-normal text-white z-aut drop-shadow-sm">
                                <i
                                    className={`${item.ICON} text-7xl `}
                                    aria-hidden="true"></i>
                            </div>
                            <div className="w-full -mt-64 group-hover:mt-0 duration-1000 bg-white ">
                                <div className="flex justify-center text-gray-normal Poppins-Semibold font-medium p-4">
                                    <h1>{item.HEADING}</h1>
                                </div>
                                <hr />
                                <div className="text-center text-gray-normal text-sm p-4 Poppins-Light">
                                    ${item.DISCRIPTION}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
