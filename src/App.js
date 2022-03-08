import React from 'react'
import { ParticlesBackground } from './components/particlesBackground/index'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import { Home } from './container/Home'
import { AboutUs } from './container/AboutUs'
import { Services } from './container/Services/index'

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
                    <Route path="/services" element={<Services/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
