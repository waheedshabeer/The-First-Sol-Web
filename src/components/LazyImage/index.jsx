import {useState, Fragment, useEffect} from 'react'

export const LazyImage = ({src, alt, className}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const imageToLoad = new Image()
        imageToLoad.src = src

        imageToLoad.onload = () => {
            setLoading(false)
        }
    }, [src])

    return (
        <Fragment>
            {loading ? (
                <div className={`bg-gray-light ${className} animate-pulse`} />
            ) : (
                <img src={src} alt={alt} className={className} />
            )}
        </Fragment>
    )
}
