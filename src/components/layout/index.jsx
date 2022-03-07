import React from 'react'
import {Footer} from '../footer'
import {Nav} from '../nav'

export const Layout = ({children}) => {
    return (
        <div className="absolute w-full ">
            <Nav />
            <div className="page-padding">{children}</div>
            <Footer />
        </div>
    )
}
