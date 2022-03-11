import React from 'react'
import {ABOUT, HEADING} from '../../Assets/Constant/Constants'
import { Heading } from '../../components/Cards/Heading'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {Layout} from '../../components/layout'

export const AboutUs = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.ABOUT_US.ABOUT_US}/>
            <LefSideImage
                IMAGE={ABOUT.IMAGE}
                HEADING={ABOUT.HEADING}
                DISCRIPTION={ABOUT.DISCRIPTION.HEADING}
                PARAGRAPH1={ABOUT.DISCRIPTION.PARAGRAPH1}
                PARAGRAPH2={ABOUT.DISCRIPTION.PARAGRAPH2}
                PARAGRAPH3={ABOUT.DISCRIPTION.PARAGRAPH3}
                PARAGRAPH4={ABOUT.DISCRIPTION.PARAGRAPH4}
            />
        </Layout>
    )
}
