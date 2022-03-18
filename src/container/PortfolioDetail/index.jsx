import React, {useEffect, useRef, useState} from 'react'
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
    const [navColor ] = useState('transparent')
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

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    // General scroll to element function

    const SelfRef = useRef(null)
    const ExpertiesRef = useRef(null)
    const WorkRef = useRef(null)
    const AboutRef = useRef(null)
    const OnExecuteMySelf = () => scrollToRef(SelfRef)
    const OnExecuteExperties = () => scrollToRef(ExpertiesRef)
    const OnExecuteMyWork = () => scrollToRef(WorkRef)
    const OnExecuteAboutMe = () => scrollToRef(AboutRef)

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
                OnExecuteAboutMe={OnExecuteAboutMe}
                OnExecuteMyWork={OnExecuteMyWork}
                OnExecuteExperties={OnExecuteExperties}
                OnExecuteMySelf={OnExecuteMySelf}
            />
            <MySelf userData={userData} SelfRef={SelfRef} />
            <div className="mx-5 sm:mx-10 md:mx-28">
                <MyExperties userData={userData} ExpertiesRef={ExpertiesRef} />
                <MyWork WorkRef={WorkRef} />
                <AboutMe userData={userData} AboutRef={AboutRef} />
            </div>
            <Footer />
        </div>
    )
}
