import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {FINANCIAL,HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import { Heading } from '../../components/Cards/Heading'
export const Financial = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.FINANCIAL.FINANCIAL}/>
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
