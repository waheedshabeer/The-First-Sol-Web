import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {ANDROIDDEVELOPMENT, HEADING} from '../../Assets/Constant/Constants' 
import {Layout} from '../../components/layout'
import {Heading} from '../../components/Cards/Heading'
export const Andriod = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.ANDROIDDEVELOPMENT.ANDROIDDEVELOPMENT} />

            <LefSideImage
                IMAGE={ANDROIDDEVELOPMENT.IMAGE}
                HEADING={ANDROIDDEVELOPMENT.HEADING}
                DISCRIPTION={ANDROIDDEVELOPMENT.DISCRIPTION.HEADING}
                PARAGRAPH1={ANDROIDDEVELOPMENT.DISCRIPTION.PARAGRAPH1}
                PARAGRAPH2={ANDROIDDEVELOPMENT.DISCRIPTION.PARAGRAPH2}
                PARAGRAPH3={ANDROIDDEVELOPMENT.DISCRIPTION.PARAGRAPH3}
                PARAGRAPH4={ANDROIDDEVELOPMENT.DISCRIPTION.PARAGRAPH4}
            />
        </Layout>
    )
}
