import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {WEBDEVELOPMENT, HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import {Heading} from '../../components/Cards/Heading'
export const Webdevelopment = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.WEBDEVELOPMENT.WEBDEVELOPMENT} />
            <div className="py-14">
                <LefSideImage
                    IMAGE={WEBDEVELOPMENT.IMAGE}
                    HEADING={WEBDEVELOPMENT.HEADING}
                    DISCRIPTION={WEBDEVELOPMENT.DISCRIPTION.HEADING}
                    PARAGRAPH1={WEBDEVELOPMENT.DISCRIPTION.PARAGRAPH1}
                    PARAGRAPH2={WEBDEVELOPMENT.DISCRIPTION.PARAGRAPH2}
                    PARAGRAPH3={WEBDEVELOPMENT.DISCRIPTION.PARAGRAPH3}
                    PARAGRAPH4={WEBDEVELOPMENT.DISCRIPTION.PARAGRAPH4}
                />
            </div>
        </Layout>
    )
}
