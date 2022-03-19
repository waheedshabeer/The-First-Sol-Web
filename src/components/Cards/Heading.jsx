import React from 'react'
import {THEME} from '../../Assets/theme'
export const Heading = (props) => (
    <div
        className={`flex w-min  whitespace-nowrap flex-col space-y-4 text-xl sm:text-3xl  md:text-5xl ${THEME.TEXT} Poppins-Regular py-16`}>
        {props.HEADING}
        <div className="w-1/2 h-1 bg-aqua-normal mt-4 rounded-sm"></div>
    </div>
)
