import React from 'react'
import {ASSETS} from '../../Assets/Path'
import {Layout} from '../../components/layout'
import {AboutUs} from '../AboutUs'
import {OurPortfolio} from '../Portfolio'
import {ServiceHome} from '../../container/Services/components/services'
import { THEME } from '../../Assets/theme'
import { AboutUsHome } from '../AboutUs/components'
export const Home = () => {
    return (
        <Layout>
            <div className="flex min-h-screen py-10 items-center ">
                <div className="flex  py-4 h-96">
                    <div className="w-1/2">
                        <div className={`text-xl sm:text-2xl md:text-5xl lg:text-6xl ${THEME.TEXT}`}>
                            Hi, We Welcome You At The First Sol
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <img
                            src={ASSETS.LOGO}
                            alt=""
                            className="rounded-full h-40 md:h-72"
                        />
                    </div>
                </div>
            </div>
            <AboutUsHome/>
            <ServiceHome/>
            
        </Layout>
    )
}
