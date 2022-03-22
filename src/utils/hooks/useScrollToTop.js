import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export const useScrollToTop = () => {
    const Location = useLocation()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [Location])
}
