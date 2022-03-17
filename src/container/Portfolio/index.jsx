import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import {useNavigate} from 'react-router-dom'
// import 'slick-carousel/slick/slick.css'-
// import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {ASSETS} from '../../Assets/Path'
// import {THEME} from '../../Assets/theme'
import './index.css'
import {Layout} from '../../components/layout'
import {Heading} from '../../components/Cards/Heading'
import {LazyImage} from '../../components/LazyImage'
import {fallbackImage} from '../../components/fallbackImage'
import {developersRef} from '../../firebase/firebase'

export const OurPortfolio = () => {
    let navigate = useNavigate()
    const [teamData, setteamData] = useState([])

    useEffect(() => {
        developersRef
            .where('isDeleted', '==', false)
            .get()
            .then((response) => {
                let arr = []
                response.forEach(async (snapshot) => {
                    console.log(snapshot.data(), 'test')
                    arr.push(snapshot.data())
                    // await setuserData(snapshot.data())
                })
                setteamData(arr)
            })

        return () => {}
    }, [])

    const settings = {
        // className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        speed: 500,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    const TEAM_DATA = [
        {
            IMAGE: ASSETS.TEAM.WAHEED,
            NAME: 'Waheed Shabeer',
            CATEGORY: 'Mobile Developer',
            SUBCATEGORY: 'Senior React Native Developer (CEO)',
            URL: '',
        },
        {
            IMAGE: ASSETS.TEAM.ASIF_HAYAT,
            NAME: 'Asif Hayat',
            CATEGORY: 'Mobile Developer',
            SUBCATEGORY: 'Senior React Native Developer',
            URL: '',
        },
        {
            IMAGE: ASSETS.TEAM.TAJASSAM,
            NAME: 'Tajasam',
            CATEGORY: 'Mobile Developer',
            SUBCATEGORY: 'Senior React Native Developer',
            URL: '',
        },
        {
            IMAGE: ASSETS.TEAM.SHOAIB,
            NAME: 'Shoaib',
            CATEGORY: 'Mobile Developer',
            SUBCATEGORY: 'Senior React Native Developer',
            URL: '',
        },
        {
            IMAGE: ASSETS.TEAM.NOUMAN,
            NAME: 'Muhammad Nouman',
            CATEGORY: 'Mobile Developer',
            SUBCATEGORY: 'React Native Developer',
            URL: '',
        },
        {
            IMAGE: ASSETS.TEAM.MUHAMMADBILAL,
            NAME: 'Muhammad Bilal',
            CATEGORY: 'Web Developer',
            SUBCATEGORY: 'Senior React Developer',
            URL: '',
        },
        {
            IMAGE: ASSETS.TEAM.NASIR,
            NAME: 'Nisar Ahmed',
            CATEGORY: 'Web Developer',
            SUBCATEGORY: 'React Developer',
            URL: '',
        },
        {
            IMAGE: ASSETS.TEAM.YASIN,
            NAME: 'Malik Yasin',
            CATEGORY: 'Business Manager',
            SUBCATEGORY: '',
            URL: '',
        },
    ]

    const PORFOLIOS = [
        {
            IMAGE: ASSETS.APPS.FOOD_GHR,
            NAME: 'Food Ghar',
        },
        {
            IMAGE: ASSETS.APPS.EZY_GRAB,
            NAME: 'Ezy Grab',
        },
        {
            IMAGE: ASSETS.APPS.ECOMMERNCE,
            NAME: 'Ecommernce',
        },
        {
            IMAGE: ASSETS.APPS.THEFIRSTSOL,
            NAME: 'Attendence App',
        },
    ]
    return (
        <Layout>
            <Heading HEADING="Our Portfolio" />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8 text-white">
                {PORFOLIOS.map(({IMAGE, NAME}, index) => (
                    <div key={index} className="space-y-1">
                        <div className="rounded-md md:rounded-xl flex flex-col space-y-2 overflow-hidden max-h-80">
                            <LazyImage
                                src={IMAGE ? IMAGE : fallbackImage}
                                alt={''}
                                className="object-cover w-full h-24 sm:h-44 md:h-60 lg:h-80 max-h-80 object-center"
                            />
                        </div>
                        <div className="text-sm md:text-base Poppins-Medium lg:text-xl text-white hover:text-aqua">
                            {NAME}
                        </div>
                    </div>
                ))}
            </div>
            <Heading HEADING="Our Team" />
            <div className="h-96 flex items-center justify-center py-10">
                <Slider
                    {...settings}
                    className="slider-features w-full text-white">
                    {teamData.map((item, index) => (
                        <div
                            key={index}
                            className="text-center space-y-2 drop-shadow-2xl cursor-pointer">
                            <img
                                src={item?.avatar}
                                className="h-60 z-1 w-60 mx-auto object-start object-cover "
                                onClick={() =>
                                    navigate(
                                        `/portfolio-detail/${item.userName}`
                                    )
                                }
                                alt=""
                            />
                            <div
                                onClick={() =>
                                    navigate(
                                        `/portfolio-detail/${item.userName}`
                                    )
                                }
                                className="flex flex-col space-y-1">
                                <div className="text-sm">
                                    {item?.fullName} | {item?.type} Developer
                                </div>
                                <div className="text-xs">{item.title}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Layout>
    )
}
