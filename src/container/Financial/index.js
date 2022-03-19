import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {FINANCIAL, HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import {Heading} from '../../components/Cards/Heading'
export const Financial = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.FINANCIAL.FINANCIAL} />

            <LefSideImage
                IMAGE={FINANCIAL.IMAGE}
                HEADING={FINANCIAL.HEADING}
                DISCRIPTION={FINANCIAL.DISCRIPTION.HEADING}
                PARAGRAPH1={FINANCIAL.DISCRIPTION.PARAGRAPH1}
                PARAGRAPH2={FINANCIAL.DISCRIPTION.PARAGRAPH2}
                PARAGRAPH3={FINANCIAL.DISCRIPTION.PARAGRAPH3}
                PARAGRAPH4={FINANCIAL.DISCRIPTION.PARAGRAPH4}
            />
        </Layout>
    )
}
