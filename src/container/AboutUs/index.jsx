import React from 'react'
import {ABOUT} from "../../Assets/Constant/Constants"
import {LefSideImage} from "../../components/Cards/LeftSideImage"

export const AboutUs = () => {
    return (
        <LefSideImage IMAGE={ABOUT.IMAGE} HEADING={ABOUT.HEADING} DISCRIPTION={ABOUT.DISCRIPTION}/>
    )
}
