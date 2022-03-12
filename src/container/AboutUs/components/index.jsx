import React from 'react'
import {ABOUT} from '../../../Assets/Constant/Constants'
import {LefSideImage} from '../../../components/Cards/LeftSideImage'
export const AboutUsHome = () => {
    return (
        <LefSideImage
            IMAGE={ABOUT.IMAGE}
            HEADING={ABOUT.HEADING}
            DISCRIPTION={ABOUT.DISCRIPTION.HEADING}
            PARAGRAPH1={ABOUT.DISCRIPTION.PARAGRAPH1}
            PARAGRAPH2={ABOUT.DISCRIPTION.PARAGRAPH2}
            PARAGRAPH3={ABOUT.DISCRIPTION.PARAGRAPH3}
            PARAGRAPH4={ABOUT.DISCRIPTION.PARAGRAPH4}
            
        />
    )
}
