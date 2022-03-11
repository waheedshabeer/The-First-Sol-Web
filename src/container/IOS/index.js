import React from 'react'
import {LefSideImage} from '../../components/Cards/LeftSideImage'
import {IOS, HEADING} from '../../Assets/Constant/Constants'
import {Layout} from '../../components/layout'
import {Heading} from '../../components/Cards/Heading'
export const Ios = () => {
    return (
        <Layout>
            <Heading HEADING={HEADING.IOS.IOS} />
            <div className="py-14">
                <LefSideImage
                    IMAGE={IOS.IMAGE}
                    HEADING={IOS.HEADING}
                    DISCRIPTION={IOS.DISCRIPTION.HEADING}
                    PARAGRAPH1={IOS.DISCRIPTION.PARAGRAPH1}
                    PARAGRAPH2={IOS.DISCRIPTION.PARAGRAPH2}
                    PARAGRAPH3={IOS.DISCRIPTION.PARAGRAPH3}
                    PARAGRAPH4={IOS.DISCRIPTION.PARAGRAPH4}
                />
            </div>
        </Layout>
    )
}
