import React from 'react'
import { ParticlesBackground } from './components/particlesBackground/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './container/Home'
import { AboutUs } from './container/AboutUs'
import { Services } from './container/Services/index'
import { Andriod } from './container/AndroidDevelopment'
import { Ios } from './container/IOS'
import { SocialMediaMaketing } from './container/SocialMedia'
import { Financial } from './container/Financial'
import { Webdevelopment } from './container/WebDevelopment'
import { Seo } from './container/SEO'
import { Careers } from './container/Careers'
import { ContactUs } from './container/ContactUs'
import { OurPortfolio } from './container/Portfolio'
import { PortfolioDetail } from './container/PortfolioDetail'

function App() {

    return (
        <div>
            <div className="bg-fixed">
                <ParticlesBackground />
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/Andriod" element={<Andriod />} />
                    <Route path="/ios" element={<Ios />} />
                    <Route path="/SocialMediaMaketing" element={<SocialMediaMaketing />} />
                    <Route path="/Financial" element={<Financial />} />
                    <Route path="/Webdevelopment" element={<Webdevelopment />} />
                    <Route path="/seo" element={<Seo />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/portfolio" element={<OurPortfolio />} />
                    <Route path="/Contact-Us" element={<ContactUs />} />
                    <Route path="/portfolio-detail/:name" element={<PortfolioDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
