import React from 'react'
import { ASSETS } from '../../Assets/Path'
import { Layout } from '../../components/layout'

export const Home = () => {
    return (
        <Layout>
            <div className='flex items-center min-h-screen '>
                <div className='w-1/2 -mt-20'>
                    <div className='text-xl sm:text-2xl md:text-5xl lg:text-6xl text-aqua-normal'>
                        Hi, We Welcome You At The First Sol
                    </div>
                </div>
                <div className='w-1/2 flex justify-center -mt-20'>
                    <img src={ASSETS.LOGO} alt="" className='rounded-full h-40 md:h-72' />
                </div>
            </div>
        </Layout>
    )
}
