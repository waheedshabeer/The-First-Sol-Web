import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {ANDROIDDEVELOPMENT , HEADING} from '../../Assets/Constant/Constants'
import {SERVICES} from '../Services/Constant'
import {Layout} from '../../components/layout'
import { Heading } from '../../components/Cards/Heading'
export const Andriod = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.ANDROIDDEVELOPMENT.ANDROIDDEVELOPMENT}/>
            <div className="py-14">
                <LefSideImage
                    IMAGE={ANDROIDDEVELOPMENT.IMAGE}
                    HEADING={ANDROIDDEVELOPMENT.HEADING}
                    DISCRIPTION={ANDROIDDEVELOPMENT.DISCRIPTION}
                />
            </div>
        </Layout>
    )
}
