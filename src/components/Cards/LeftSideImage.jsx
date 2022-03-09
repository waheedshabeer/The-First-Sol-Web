import React from 'react'

export const LefSideImage = () => {
    return (
        <div id="aboutus" className="flex flex-col space-y-8 py-16">
            <div className="text-center text-xl sm:text-2xl md:text-5xl lg:text-5xl text-aqua-normal Poppins-Regular">
                
            </div>
            <div className=" space-x-4">
                {/* <div className="w-1/3">
                    <img src={ASSETS.ABOUT_US} alt="" />
                </div> */}
                <div className="">
                    <img
                        src={}
                        alt="About_US"
                        className="float-left mr-3 mb-0.5 sm:mr-5 sm:mb-2 w-20 h-20 sm:w-20 sm:h-20 md:w-80 md:h-96
                     duration-1000"
                    />
                    <p className="text-gray-normal Poppins-Light text-xs sm:text-base md:text-lg text-justify">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}
