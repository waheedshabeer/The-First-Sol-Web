import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {SOCIAL_MEDIA_MARKETING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
export const SocialMediaMaketing = () => {
    return (
        <Layout>
            <div className="py-14">
                <LefSideImage
                    IMAGE={SOCIAL_MEDIA_MARKETING.IMAGE}
                    HEADING={SOCIAL_MEDIA_MARKETING.HEADING}
                    DISCRIPTION={SOCIAL_MEDIA_MARKETING.DISCRIPTION}
                />
            </div>
        </Layout>
    )
}
