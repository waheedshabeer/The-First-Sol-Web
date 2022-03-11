import React from 'react'
import {THEME} from '../../Assets/theme'

export const LefSideImage = (props) => {
    return (
        <div className="flex flex-col space-y-8 py-16">
            <div
                className={`text-center text-xl sm:text-2xl md:text-5xl lg:text-5xl ${THEME.TEXT} Poppins-Regular`}>
                {props.HEADING}
            </div>
            <div className=" space-x-4">
                {/* <div className="w-1/3">
                    <img src={ASSETS.ABOUT_US} alt="" />
                </div> */}
                <div className="">
                    <img
                        src={props.IMAGE}
                        alt="About_US"
                        className="float-left mr-3 mb-0.5 sm:mr-5 sm:mb-2 w-20 h-20 sm:w-20 sm:h-20 md:w-80 md:h-96
                     duration-1000"
                    />
                    <h1
                        className={`${THEME.TEXT} Poppins-Semibold text-xs sm:text-base md:text-2xl text-justify py-2`}>
                        {props.DISCRIPTION}
                    </h1>
                    <p
                        className={`${THEME.TEXT} Poppins-Medium   py-2`}>
                        {props.PARAGRAPH1}
                    </p>
                    <p
                        className={`${THEME.TEXT} Poppins-Light  py-2`}>
                        {props.PARAGRAPH2}
                    </p>
                    <p
                        className={`${THEME.TEXT} Poppins-Light   py-2`}>
                        {props.PARAGRAPH3}
                    </p>
                    <p
                        className={`${THEME.TEXT} Poppins-Light   py-2`}>
                        {props.PARAGRAPH4}
                    </p>
                </div>
            </div>
        </div>
    )
}
