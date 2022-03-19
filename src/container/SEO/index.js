import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {SEO, HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import {Heading} from '../../components/Cards/Heading'
export const Seo = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.SEO.SEO} />

            <LefSideImage
                IMAGE={SEO.IMAGE}
                HEADING={SEO.HEADING}
                DISCRIPTION={SEO.DISCRIPTION.HEADING}
                PARAGRAPH1={SEO.DISCRIPTION.PARAGRAPH1}
                PARAGRAPH2={SEO.DISCRIPTION.PARAGRAPH2}
                PARAGRAPH3={SEO.DISCRIPTION.PARAGRAPH3}
                PARAGRAPH4={SEO.DISCRIPTION.PARAGRAPH4}
            />
        </Layout>
    )
}
