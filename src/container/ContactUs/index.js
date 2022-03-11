import React from 'react'
import {THEME} from '../../Assets/theme'
import {Heading} from '../../components/Cards/Heading'
import {Layout} from '../../components/layout'
import {HEADING} from '../../Assets/Constant/Constants'
export const ContactUs = () => {
    return (
        <Layout>
            <div className="">
                <Heading HEADING={HEADING.CONTACTUS.CONTACTUS} />
                <form className=" shadow-md rounded sm:px-8 pt-6 pb-8 py-4">
                    <div className="py-4 flex flex-col justify-center items-center space-y-6">
                        <div
                            className={`${THEME.TEXT} text-xl Poppins-Regular`}>
                            Send us a Message
                        </div>
                        <input
                            className="shadow appearance-none border rounded w-full sm:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Your Name"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full sm:w-1/2  px-3 text-gray-700 py-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="Email"
                            type="Your Email"
                            placeholder="Email"
                        />
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full sm:w-1/2  px-3 text-gray-700 py-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="Subject"
                            type="Your Subject"
                            placeholder="Your Subject"
                        />
                        <textarea
                            className="shadow appearance-none border border-red-500 rounded w-full sm:w-1/2 px-3 text-gray-700 py-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="Message"
                            type="Message"
                            placeholder="Message"
                            rows="5"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button
                            className="bg-aqua-normal text-white hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline Poppins-Regular"
                            type="button">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
