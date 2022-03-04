import React from 'react'
import {ParticlesBackground} from './components/particlesBackground/index'
import {Nav} from './components/nav/index'
function App() {
    return (
        <div>
            <div className="bg-fixed">
                <ParticlesBackground />
            </div>
            <Nav />
        </div>
    )
}

export default App
