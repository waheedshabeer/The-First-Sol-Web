import React from 'react'
import {ASSETS} from '../../Assets/Path'
import {Layout} from '../../components/layout'
import {ServiceHome} from '../../container/Services/components/services'
import {THEME} from '../../Assets/theme'
import {AboutUsHome} from '../AboutUs/components'
import Typical from 'react-typical'
export const Home = () => {
    return (
        <Layout>
            <div className="flex min-h-screen py-14">
                <div className="flex py-2 h-96 w-full">
                    <div className="w-8/12 space-y-8 ">
                        <div
                            className={`flex flex-col space-y-4 w-full text-xl sm:text-2xl md:text-4xl lg:text-5xl text-left Poppins-Semibold ${THEME.TEXT}`}>
                            <dv className="">Hi,&nbsp;We Welcome You At</dv>
                            <dv>The First Sol</dv>
                        </div>
                        {/* <LightSpeed left cascade>
                            <p className="text-white text-xl Poppins-Regular">
                                You are exactly where you need to be
                            </p>
                        </LightSpeed> */}
                        <div className='text-white text-xl Poppins-Regular'>
                            <Typical
                                steps={[' You are exactly where you need to be', 5000, 'We keep you first', 5000]}
                                infinity
                                wrapper="p"
                            />
                        </div>
                    </div>
                    <div className="w-4/12">
                        <img
                            src={ASSETS.LAPTOP}
                            alt=""
                            className=" h-40 md:h-72"
                        />
                    </div>
                </div>
            </div>
            <AboutUsHome />
            <ServiceHome />
        </Layout>
    )
}
