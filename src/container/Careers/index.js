import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {CAREERS, HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import {Heading} from '../../components/Cards/Heading'
export const Careers = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.CAREERS.CAREERS} />

            <LefSideImage
                IMAGE={CAREERS.IMAGE}
                HEADING={CAREERS.HEADING}
                DISCRIPTION={CAREERS.DISCRIPTION.HEADING}
                PARAGRAPH1={CAREERS.DISCRIPTION.PARAGRAPH1}
                PARAGRAPH2={CAREERS.DISCRIPTION.PARAGRAPH2}
                PARAGRAPH3={CAREERS.DISCRIPTION.PARAGRAPH3}
                PARAGRAPH4={CAREERS.DISCRIPTION.PARAGRAPH4}
            />
        </Layout>
    )
}
