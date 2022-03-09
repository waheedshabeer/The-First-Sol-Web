import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {WEBDEVELOPMENT} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
export const Webdevelopment = () => {
    return (
        <Layout>
            <div className="py-14">
                <LefSideImage
                    IMAGE={WEBDEVELOPMENT.IMAGE}
                    HEADING={WEBDEVELOPMENT.HEADING}
                    DISCRIPTION={WEBDEVELOPMENT.DISCRIPTION}
                />
            </div>
        </Layout>
    )
}
