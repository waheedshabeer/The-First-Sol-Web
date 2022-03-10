import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {ANDROIDDEVELOPMENT} from '../../Assets/Constant/Constants'
import {SERVICES} from '../Services/Constant'
import {Layout} from '../../components/layout'
export const Andriod = () => {
    return (
        <Layout>
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
