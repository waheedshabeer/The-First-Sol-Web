import {useEffect, useState} from 'react'

export const useResizeNavMenu = (state) => {
    const [Menu, setMenu] = useState(state)
    useEffect(() => {
        const applyNavMenu = () => {
            if (window.innerWidth > 768 && Menu) {
                setMenu(false)
            }
        }
        window.addEventListener('resize', applyNavMenu)
        return () => {
            window.removeEventListener('resize', applyNavMenu)
        }
    }, [Menu])

    return {Menu, setMenu}
}
