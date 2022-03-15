import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Footer} from '../PortfolioDetail/Footer/Footer'
import {developersRef} from '../../firebase/firebase'
import {MyExperties} from './MyExperties/MyExperties'
import {MySelf} from './MySelf/MySelf'
import {MyWork} from './MyWork/MyWork'
import {NavBar} from './Navbar/NavBar'
import {AboutMe} from './AboutMe/AboutMe'

export const PortfolioDetail = () => {
    const [Menu, setMenu] = useState(false)
    const [navColor, setnavColor] = useState('transparent')
    const [userData, setuserData] = useState({})

    const {name} = useParams()
    useEffect(() => {
        const applyNavColor = () => {
            if (window.innerWidth > 768 && Menu) {
                setMenu(false)
            }
        }

        developersRef
            .where('userName', '==', name)
            .get()
            .then((response) => {
                response.forEach(async (snapshot) => {
                    await setuserData(snapshot.data())
                })
            })
        window.addEventListener('resize', applyNavColor)
        return () => {
            window.removeEventListener('resize', applyNavColor)
        }
    }, [name, Menu])

    const onOpenMenu = () => {
        setMenu(!Menu)
    }
    return (
        <div className="">
            <NavBar
                toggle={Menu}
                toggleHandler={onOpenMenu}
                navCol={navColor}
                fullName={userData?.fullName}
            />
            <MySelf userData={userData} />
            <div className="mx-5 sm:mx-10 md:mx-28">
                <MyExperties userData={userData} />
                <MyWork />
                <AboutMe userData={userData} />
                {/* <ClientTestimonial /> */}
            </div>
            <Footer />
        </div>
    )
}
