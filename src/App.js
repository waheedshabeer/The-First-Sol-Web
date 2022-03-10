import React from 'react'
import {ParticlesBackground} from './components/particlesBackground/index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './container/Home'
import {AboutUs} from './container/AboutUs'
import {Services} from './container/Services/index'
import {Andriod} from './container/AndroidDevelopment'
import { Ios } from './container/IOS'
import { SocialMediaMaketing } from './container/SocialMedia'
import { Financial } from './container/Financial'
import { Webdevelopment } from './container/WebDevelopment'
import { Seo } from './container/SEO'
import {Careers} from './container/Careers'
import PARTICLES_FILE from './particles.json'

function App() {
    window.particlesJS.load('particles-js', PARTICLES_FILE , function() {
        console.log('callback - particles.js config loaded');
      });
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
                    <Route path="/ios" element={<Ios/> } />
                    <Route path="/SocialMediaMaketing" element={<SocialMediaMaketing/> } />
                    <Route path="/Financial" element={<Financial/> } />
                    <Route path="/Webdevelopment" element={<Webdevelopment/> } />
                    <Route path="/seo" element={<Seo/> } />
                    <Route path="/careers" element={<Careers/> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
