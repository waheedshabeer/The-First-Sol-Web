import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {SOCIAL_MEDIA_MARKETING, HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import {Heading} from '../../components/Cards/Heading'
export const SocialMediaMaketing = () => {
    return (
        <Layout>
            <Heading
                HEADING={HEADING.SOCIAL_MEDIA_MARKETING.SOCIAL_MEDIA_MARKETING}
            />

            <LefSideImage
                IMAGE={SOCIAL_MEDIA_MARKETING.IMAGE}
                HEADING={SOCIAL_MEDIA_MARKETING.HEADING}
                DISCRIPTION={SOCIAL_MEDIA_MARKETING.DISCRIPTION.HEADING}
                PARAGRAPH1={SOCIAL_MEDIA_MARKETING.DISCRIPTION.PARAGRAPH1}
                PARAGRAPH2={SOCIAL_MEDIA_MARKETING.DISCRIPTION.PARAGRAPH2}
                PARAGRAPH3={SOCIAL_MEDIA_MARKETING.DISCRIPTION.PARAGRAPH3}
                PARAGRAPH4={SOCIAL_MEDIA_MARKETING.DISCRIPTION.PARAGRAPH4}
            />
        </Layout>
    )
}
