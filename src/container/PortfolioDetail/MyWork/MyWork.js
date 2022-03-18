import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import {ASSETS} from '../../../Assets/Path'
import {PortfolioHeading} from '../../../components/Cards/PortfolioHeading'
export const MyWork = () => {
    return (
        <div className="mt-20 bg-white min-h-screen space-y-4" id="Work">
            <PortfolioHeading HEADING={'My Work'} />
            <div
                data-aos="fade-left"
                className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-8 my-20n">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    margin={10}
                    nav>
                    <div className="space-y-4">
                        <img
                            src={ASSETS.MYWORK.RFID}
                            alt=""
                            className="object-cover w-full rounded-md sm:rounded-lg h-24 sm:h-44 md:h-60 lg:h-80 lg:min-h-80 max-h-80 object-center"
                        />
                        <p className="text-white text-base sm:text-xl Poppins-Regular">
                            GrayTrunk
                        </p>
                    </div>
                </OwlCarousel>

                <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    margin={10}
                    nav>
                    <div className="space-y-4">
                        <img
                            src={ASSETS.MYWORK.THELISTNER}
                            alt=""
                            className="object-cover w-full rounded-md sm:rounded-lg h-24 sm:h-44 md:h-60 lg:h-80 lg:min-h-80 max-h-80 object-center"
                        />
                        <p className="text-white text-base sm:text-xl Poppins-Regular">
                            The Listner
                        </p>
                    </div>
                </OwlCarousel>
                <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    margin={10}
                    nav>
                    <div className="space-y-4">
                        <img
                            src={ASSETS.MYWORK.NESS_NESS}
                            alt=""
                            className="object-cover w-full rounded-md sm:rounded-lg h-24 sm:h-44 md:h-60 lg:h-80 lg:min-h-80 max-h-80 object-center"
                        />
                        <p className="text-white text-base sm:text-xl Poppins-Regular">
                            Ness Ness
                        </p>
                    </div>
                </OwlCarousel>
                <OwlCarousel
                    className="owl-theme"
                    loop
                    items={1}
                    margin={10}
                    nav>
                    <div className="space-y-4">
                        <img
                            src={ASSETS.MYWORK.E_SKOOLY_VERCEL}
                            alt=""
                            className="object-cover w-full rounded-md sm:rounded-lg h-24 sm:h-44 md:h-60 lg:h-80 lg:min-h-80 max-h-80 object-center"
                        />
                        <p className="text-white text-base sm:text-xl Poppins-Regular">
                            eSkooly
                        </p>
                    </div>
                </OwlCarousel>
            </div>
            <div className="flex justify-center w-full">
                <button className="rounded-full border-2 border-white absolute px-10 py-2 text-white mt-8">
                    My Works
                </button>
            </div>
        </div>
    )
}
