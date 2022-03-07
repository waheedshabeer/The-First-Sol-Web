import React from 'react'
import {ASSETS} from '../../Assets/Path'
import {Layout} from '../../components/layout'

export const AboutUs = () => {
    return (
        <Layout>
            <div id="aboutus" className="flex flex-col space-y-8">
                <div className="text-xl sm:text-2xl md:text-5xl lg:text-6xl text-aqua-normal">
                    About Us
                </div>
                <div className="flex space-x-4">
                    <div className="w-1/3 ">
                        <img src={ASSETS.ABOUT_US} alt="" />
                    </div>
                    <div className="w-8/12 space-y-4">
                        <div className="text-xl md:text-2xl text-aqua-normal">
                            About Us
                        </div>
                        <div className="">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
