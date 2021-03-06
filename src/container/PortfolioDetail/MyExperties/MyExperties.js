import React, {useEffect, useState} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import {PortfolioHeading} from '../../../components/Cards/PortfolioHeading'
import {categoriesRef} from '../../../firebase/firebase'

// import { Flip, Fade, Rotate, Zoom, Bounce, Roll , Reveal } from 'react-reveal'
export const MyExperties = ({userData, ExpertiesRef}) => {
    const [ExpertiesList, setExpertiesList] = useState([])
    useEffect(() => {
        aos.init({
            duration: 3000,
            offset: 150,
            disable: 'mobile',
            // delay: 100,
        })

        categoriesRef.get().then((response) => {
            let arr = []
            response.forEach((item) => {
                userData?.technologies?.length > 0 &&
                    userData?.technologies.map(
                        (subItem) =>
                            subItem === item.data().Category &&
                            arr.push(item.data())
                    )
            })
            setExpertiesList(arr)
        })

        return () => {}
    }, [userData])

    return (
        <div className="mt-20 text-left overflow-hidden" ref={ExpertiesRef}>
            <PortfolioHeading HEADING={'My Experties'} />
            <div
                data-aos="fade-left"
                className="grid grid-cols-1 sm:grid-cols-2 my-20  ">
                {/* first grid column */}
                {ExpertiesList.length > 0 &&
                    ExpertiesList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`p-2 sm:p-5 md:p-8 ${
                                    (index + 1) % 2 === 0
                                        ? 'border-b'
                                        : 'border-b border-r '
                                } border-#EFEFEF`}>
                                <img
                                    src={item.Icon}
                                    alt=""
                                    className="w-20 h-20 object-contain"
                                />
                                <h1 className="text-lg sm:text-xl md:text-2xl pt-4 font-semibold text-white">
                                    {item.Category}
                                </h1>
                                <p className="pt-4 w-full sm:w-11/12 font-medium text-xs sm:text-sm md:text-lg text-justify text-white">
                                    {item?.Description
                                        ? item.Description.substr(
                                              0,
                                              140
                                          ).concat('...')
                                        : 'Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                </p>
                                <div className="font-medium text-aqua-normal pt-3 sm:pt-6 text-xs sm:text-lg  cursor-pointer  transform duration-700 hover:scale-x-105">
                                    <p> Head of desgin at Calvino</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
