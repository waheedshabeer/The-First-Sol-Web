import React from 'react'
import {ASSETS} from '../../Assets/Path'
import {Layout} from '../../components/layout'
import {ServiceHome} from '../../container/Services/components/services'
import {THEME} from '../../Assets/theme'
import {AboutUsHome} from '../AboutUs/components'
import Typical from 'react-typical'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

export const Home = () => {
    const LANGUAGES = [
        {
            IMG: ASSETS.LANGUAGES.REACT,
        },
        {
            IMG: ASSETS.LANGUAGES.NODEJS,
        },
        {
            IMG: ASSETS.LANGUAGES.MONGODB,
        },
        {
            IMG: ASSETS.LANGUAGES.PHP,
        },
        {
            IMG: ASSETS.LANGUAGES.MYSQL,
        },
    ]
    const responsive = {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    }
    return (
        <Layout>
            <div className="flex min-h-screen py-14">
                <div className="flex py-2 h-96 w-full ">
                    <div className="flex flex-col  w-8/12 justify-between ">
                        <div className="space-y-8">
                            <div
                                className={`flex flex-col space-y-4 w-full text-xl sm:text-2xl md:text-4xl lg:text-5xl text-left Poppins-Semibold ${THEME.TEXT}`}>
                                <div className="">Hi,&nbsp;We Welcome You At</div>
                                <div>The First Sol</div>
                            </div>
                            <div className="text-white text-xl Poppins-Regular">
                                <Typical
                                    steps={[
                                        ' You are exactly where you need to be',
                                        500,
                                        'We keep you first',
                                        1000,
                                    ]}
                                    loop={4}
                                    wrapper="p"
                                />
                            </div>
                        </div>
                        <div className="w-3/4 mt-10">
                            <OwlCarousel
                                className="owl-theme "
                                items={4}
                                loop
                                margin={12}
                                autoplay={true}
                                autoplaySpeed={250}
                                navSpeed={250}
                                responsive={responsive}
                                // autoplayTimeout={1000}
                                // autoplayHoverPause={true}
                                dots={false}>
                                {LANGUAGES.map((items, index) => {
                                    return (
                                        <div className="space-y-4" key={index}>
                                            <img
                                                src={items.IMG}
                                                alt=""
                                                className="rounded-md sm:rounded h-10 w-10 sm:h-20 sm:w-20 sm:object-cover cursor-pointer"
                                            />
                                        </div>
                                    )
                                })}
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <img src={ASSETS.LAPTOP} alt="" className="md:w-80" />
                    </div>
                </div>
            </div>
            <AboutUsHome />
            <ServiceHome />
        </Layout>
    )
}
