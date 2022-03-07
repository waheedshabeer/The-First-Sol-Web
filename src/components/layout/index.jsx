import React from 'react'
import {Nav} from '../nav'

export const Layout = ({children}) => {
    return (
        <div className="absolute w-full page-padding">
            <Nav />
            {children}
        </div>
    )
}
