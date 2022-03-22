import React, {useRef} from 'react'
import {useParams} from 'react-router-dom'
import {Footer} from '../PortfolioDetail/Footer/Footer'
import {MyExperties} from './MyExperties/MyExperties'
import {MySelf} from './MySelf/MySelf'
import {MyWork} from './MyWork/MyWork'
import {NavBar} from './Navbar/NavBar'
import {AboutMe} from './AboutMe/AboutMe'
import {useDeveloperInfo} from '../../utils/hooks/useDeveloperInfo'
import {useResizeNavMenu} from '../../utils/hooks/useResizeNavMenu'

export const PortfolioDetail = () => {
    const {name} = useParams()
    const userData = useDeveloperInfo(name)
    const {Menu, setMenu} = useResizeNavMenu(false)
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

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
