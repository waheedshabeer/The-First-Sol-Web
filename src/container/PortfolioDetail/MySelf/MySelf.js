import React from 'react'
import {ASSETS} from '../../../Assets/Path'
import {Fade, Bounce} from 'react-reveal'

export const MySelf = ({userData, SelfRef}) => {
    return (
        <div
            className="h-screen bg-gradient-to-t from-blue-400 to-white"
            ref={SelfRef}>
            <div className="flex flex-col justify-center md:flex-row items-center h-full px-0 md:px-10 lg:px-24">
                <div className="">
                    <Fade left>
                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-64 md:h-64 lg:w-80 lg:h-80 border-2 border-aqua-normal rounded-full object-cover overflow-hidden">
                            <img
                                src={
                                    userData?.avatar
                                        ? userData?.avatar
                                        : require('../../../Assets/img/Myself/profile-image.webp')
                                              .default
                                }
                                alt=""
                                className="w-full h-full object-cover object-start"
                            />
                        </div>
                    </Fade>
                </div>
                <Fade right>
                    <div className="mt-0 ml-0 md:ml-16 text-left w-full">
                        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center sm:text-center md:text-left text-white space-y-4 ">
                            {userData?.fullName
                                ? userData?.fullName
                                : 'The First Sol'}
                            .<br></br>
                            <div className="text-sm md:text-2xl lg:text-3xl">
                                {userData?.title
                                    ? userData.title
                                    : 'Digital Product Designer'}
                            </div>
                        </h1>
                        <h1 className="text-xl text-white md:text-2xl lg:text-3xl Poppins-Regular mt-5 md:mt-10  lg:mt-16 text-center sm:text-center md:text-left text-gray-400">
                            {userData?.type === 'Website'
                                ? 'Web Developer at The First Sol'
                                : userData?.type === 'Mobile'
                                ? 'Mobile Developer at The First Sol'
                                : 'Web & Mobile Developer at The First Sol'}
                        </h1>
                    </div>
                </Fade>
            </div>
            <Bounce bottom>
                <div className="flex justify-between  -mt-40 sm:-mt-32 px-5 md:px-10 lg:px-24">
                    <div className=" text-white">
                        <p className="text-xs sm:text-lg ">Design For</p>
                        <p className="text-sm sm:text-xl md:text-2xl mt-2 md:mt-4">
                            {userData?.type ? userData.type : 'Web & Mobile'}
                        </p>
                    </div>
                    <div className="text-white">
                        <p className="text-xs sm:text-lg">Phone</p>
                        <p className="text-sm sm:text-xl md:text-2xl mt-2 md:mt-4">
                            +10 (67) 367-9034
                        </p>
                    </div>
                    <div className="text-white flex  items-center">
                        <div>
                            <p className="text-xs sm:text-lg">
                                Drop your Message
                            </p>
                            <p className="text-sm sm:text-xl md:text-2xl mt-2 md:mt-4">
                                {userData?.email
                                    ? userData.email
                                    : 'calvino90@gmail.com'}
                            </p>
                        </div>
                        <img
                            src={ASSETS.MYSELF.EMAIL}
                            className="hidden cursor-pointer sm:block sm:ml-5 sm:w-12 sm:h-12 md:w-12 md:h-12 lgd:w-12 lg:h-12 animate-bounce"
                            alt=""
                        />
                    </div>
                </div>
            </Bounce>
            <img
                src={ASSETS.MYSELF.EMAIL}
                className="w-12 h-12 mt-6 mx-auto sm:hidden animate-bounce"
                alt=""
            />
            {/* // <div className="relative" id="Home">
    //   <div className="h-screen bg-gradient-to-t from-blue-400  to-white">
    //   </div>
    //   <div className="flex justify-evenly absolute left-48 top-1/4 ">
    //     <div>
    //       <img src={bgimg1} alt="" />
    //     </div>
    //     <div className="mt-10 mx-10 text-left">
    //       <h1 className="text-6xl  text-white ">
    //         My name is Calvin.<br></br> Digital Product Designer
    //       </h1>
    //       <h1 className="text-4xl  mt-16"> Head of design at Calvino</h1>
    //     </div>
    //   </div>

    //   <div className=" absolute left-80 top-3/4 text-white">
    //     <p className="text-lg ">Design For</p>
    //     <p className="text-2xl mt-4  ">Web & Mobile</p>
    //   </div>
    //   <div className=" absolute left-2/4 top-3/4 text-white">
    //     <p className="text-lg">Phone</p>
    //     <p className="text-2xl mt-4">+10 (67) 367-9034</p>
    //   </div>
    //   <div className=" flex items-center absolute left-3/4 top-3/4 text-white">
    //     <div>
    //       <p className="text-lg">Drop your Message</p>
    //       <p className="text-2xl mt-4">calvino90@gmail.com</p>
    //     </div>
    //     <div>
    //       <img src={bgimg2} />
    //     </div>
    //   </div> */}
        </div>
    )
}
