import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {FINANCIAL} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
export const Financial = () => {
    return (
        <Layout>
            <div className="py-14">
                <LefSideImage
                    IMAGE={FINANCIAL.IMAGE}
                    HEADING={FINANCIAL.HEADING}
                    DISCRIPTION={FINANCIAL.DISCRIPTION}
                />
            </div>
        </Layout>
    )
}
