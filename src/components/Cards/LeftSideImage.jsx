import React from 'react'
import {THEME} from '../../Assets/theme'
import {fallbackImage} from '../fallbackImage'
import {LazyImage} from '../LazyImage'
export const LefSideImage = (props) => {
    return (
        <div className="flex flex-col">
            <div className="">
                <LazyImage
                    src={props.IMAGE ? props.IMAGE : fallbackImage}
                    alt={''}
                    className="float-left bg-footer-background mr-3 mb-0.5 sm:mr-5 sm:mb-2 w-20 h-20 sm:w-20 sm:h-20 md:w-80 md:h-96 lg:w-96 
                        duration-1000 object-cover"
                />
                <div className="space-y-4">
                    <h1
                        className={`${THEME.TEXT} Poppins-Semibold text-base md:text-2xl sm:text-justify`}>
                        {props.DISCRIPTION}
                    </h1>
                    <p
                        className={`${THEME.TEXT} Poppins-Medium  text-sm md:text-base`}>
                        {props.PARAGRAPH1}
                    </p>
                    <p
                        className={`${THEME.TEXT} Poppins-Light text-sm md:text-base `}>
                        {props.PARAGRAPH2}
                    </p>
                    <p
                        className={`${THEME.TEXT} Poppins-Light text-sm md:text-base  `}>
                        {props.PARAGRAPH3}
                    </p>
                    <p
                        className={`${THEME.TEXT} Poppins-Light text-sm md:text-base  `}>
                        {props.PARAGRAPH4}
                    </p>
                </div>
            </div>
        </div>
    )
}
