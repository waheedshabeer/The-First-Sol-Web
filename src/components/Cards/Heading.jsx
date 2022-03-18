import React from 'react'
import { THEME } from '../../Assets/theme'
export const Heading = (props) => {
    return (
        <div className=''>
            <div className={`flex flex-col space-y-4 text-2xl sm:text-5xl ${THEME.TEXT} Poppins-Regular py-16`}>
                {props.HEADING}
                <div className='w-1/5 h-1 bg-aqua-normal mt-4 rounded-sm'></div>
            </div>
            
        </div>
    )
}
