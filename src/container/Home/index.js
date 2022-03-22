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
            items: 4,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 4,
        },
    }
    return (
        <Layout>
            <div className="flex flex-col sm:min-h-min pt-14">
                <div className="flex py-2 h-48 sm:h-80 w-full ">
                    <div className="flex flex-col w-8/12 justify-between ">
                        <div className="space-y-4">
                            <div
                                className={`flex flex-col space-y-4 w-full text-xl sm:text-2xl md:text-4xl lg:text-5xl text-left Poppins-Semibold ${THEME.TEXT}`}>
                                <div className="">
                                    Hi,&nbsp;We Welcome You At
                                </div>
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
                    </div>
                    <div className="w-4/12">
                        <img src={ASSETS.LAPTOP} alt="" className="md:w-80" />
                    </div>
                </div>
                <div className="w-full py-4 md:w-1/2">
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
                                        className="rounded sm:rounded h-16 sm:h-20 sm:w-20 object-cover sm:object-cover cursor-pointer"
                                    />
                                </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
            </div>

            <AboutUsHome />
            <ServiceHome />
        </Layout>
    )
}
