import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {CAREERS , HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import { Heading } from '../../components/Cards/Heading'
export const Careers = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.CAREERS.CAREERS}/>
            <div className="">
                <LefSideImage
                    IMAGE={CAREERS.IMAGE}
                    HEADING={CAREERS.HEADING}
                    DISCRIPTION={CAREERS.DISCRIPTION}
                />
            </div>
        </Layout>
    )
}
