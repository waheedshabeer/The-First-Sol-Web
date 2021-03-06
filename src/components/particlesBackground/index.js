import React from 'react'
import Particles from 'react-tsparticles'
export const ParticlesBackground = () => {
    const particlesInit = main => {
        // console.log(main)
    }
    const particlesLoaded = container => {
        // console.log(container)
    }
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: '#0000',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 1,
                            size: 50,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.9,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#4DBCE9',
                    },
                    links: {
                        color: '#4DBCE9',
                        distance: 200,
                        enable: true,
                        opacity: 2,
                        width: 0.5,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'line',
                    },
                    size: {
                        random: true,
                        value: 1,
                    },
                },
                detectRetina: true,
            }}
        />
    )
}
