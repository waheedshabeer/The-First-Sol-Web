import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {SEO, HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import { Heading } from '../../components/Cards/Heading'
export const Seo = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.SEO.SEO}/>
            <div className="py-14">
                <LefSideImage
                    IMAGE={SEO.IMAGE}
                    HEADING={SEO.HEADING}
                    DISCRIPTION={SEO.DISCRIPTION}
                />
            </div>
        </Layout>
    )
}
