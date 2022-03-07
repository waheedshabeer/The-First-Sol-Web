import React from 'react'
import {ParticlesBackground} from './components/particlesBackground/index'
import {Nav} from './components/nav/index'
import {Footer} from './components/footer/index'
function App() {
    return (
        <div>
            <div className="bg-fixed">
                <ParticlesBackground />
            </div>
            <Nav />
            <Footer/>
        </div>
    )
}

export default App
