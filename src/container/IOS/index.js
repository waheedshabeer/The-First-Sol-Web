import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {IOS} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
export const Ios = () => {
    return (
        <Layout>
            <div className="py-14">
                <LefSideImage
                    IMAGE={IOS.IMAGE}
                    HEADING={IOS.HEADING}
                    DISCRIPTION={IOS.DISCRIPTION}
                />
            </div>
        </Layout>
    )
}
