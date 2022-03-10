import React from 'react'
import { THEME } from '../../Assets/theme'
export const Heading = (props) => {
    return (
        <div>
            <div className={`text-2xl sm:text-5xl ${THEME.TEXT} Poppins-Regular py-16`}>
                {props.HEADING}
            </div>
        </div>
    )
}
