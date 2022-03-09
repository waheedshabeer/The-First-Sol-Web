import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {SEO} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
export const Seo = () => {
    return (
        <Layout>
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
