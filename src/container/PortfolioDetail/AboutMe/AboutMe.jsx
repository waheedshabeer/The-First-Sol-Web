import React, {useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import {PortfolioHeading} from '../../../components/Cards/PortfolioHeading'
export const AboutMe = ({userData, AboutRef}) => {
    useEffect(() => {
        aos.init({
            duration: 3000,
            //   offset: 200,
            disable: 'mobile',
            // delay: 100,
        })
        return () => {}
    }, [])

    const softwareList = [
        {
            img: 'https://img2.pngio.com/fileadobe-xd-cc-iconsvg-wikimedia-commons-xd-png-1050_1024.png',
            name: 'XD',
        },
        {
            img: 'data:image/png;base64,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',
            name: 'Photoshop',
        },
        {
            img: 'data:image/png;base64,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',
            name: 'Photoshop',
        },
        {
            img: 'https://img2.pngio.com/fileadobe-xd-cc-iconsvg-wikimedia-commons-xd-png-1050_1024.png',
            name: 'XD',
        },
        {
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAxlBMVEUAHjYxqP////8yq/8AABYzrf8yrP8AECQADSEAGC4AHjUAGzIie70miNAACh4zr/8unvETTXkAAB0AFCkpkt8AGDIAACckgMQAEC4ACCoABxsAACgAACQAABsNPGErl+bW2dwQRGwfcK0YXI8KMlF4f4hOWWcJJDtATVw2RFUAABK+wscbZJsHLEkVVISUm6Khp60kNkl2fYYcaaITKkBrc32Ij5jN0NS2ur8iNEg6SFgRKD+boajg4+URSXMLN1oAAABWYG0Jq+J6AAAKUUlEQVR4nO2dCXOiyhaAG5DNZguLC0lQwTVBnYwmk8y9mdz3///UAzQTog2C0GzFV1NTqZqo/XmaXk4fGEBe4NfjdjZf7Regeiz2T8vnlx/jSwog1m+7vFXvhgMDlq0TATQGw556t3r5dZ3jeHarDo2yLRJhDNXeLDqcUY6Pq/th2U1PxfB++ZjK8fVNrUcEwxjq22tix/GqhoY+hvob1WMRjrOHehr6GA+zBI6//rktu6GZ6O3PxthTx22Ng3jAeNjGOz6rZTcxB9TnOMdlr+z25cLt72jHVb2mxGgGqyjHxih6K4LfaMd5cxQ9ySXK8fmu7HblSu/53PHfJoyoYdQfp47jh7LblDud8Ynjvu5T/znG4rvjSzMmxu/0ZmHHcafs9mDh2FsPjsvm9VQfY/Xl+Ni0MfUT9fWv41Mzw+gF8u3TsbFh9AL5eHScNzWMXiDnB8f35obRC+R74PjSpLX4KcOXwBFUNQueB9DwHcf3ZbcDK/djz3Fb7zzcJXpbz7Gha5xPjKXn2OQRx2dIgnGTZw4fdQxem5XiOOfuFWwb31e34Oeg7EZgZvATNHixesCYg1WTVzk+cAX2ZbcBO3tQxaKUfGm+YUtLS0tLS0tLS0tLS0XpBn/BAN5HO8Ie8H/kIeyW3c4MdDVfDizWU8uyJjc3NxvHw93tbCHAtneus7HWQJNYraamkk54UPIB+gjjQQX4P9G0LFOKLrgWx2k1zBh1iKRQFE0TogMkvuw2pyW540GUpsSNxtYrmCkdA03CXrB1ujLTO3owlA21+lhe5ehZEq5Umw57pSNByKOpVnbjE3K1ozfObsyyW5+M6x29UApmLfprFkeCFmsxi2RyJBhdqsHwms3Ri2QNrsmMjgQtVF8yqyMhbyo/hWR2JIjKl+hld6Qqf0nmEEf5puK7LaTj55b5c+PMULGSSsUnEJQjpVs+H9OAjz+O3VfkGE95U+1AIh3FDgzBaxr3MHV1OsqSGlX7ikQ7cme/BzXTEuWoQH5UemhN6ugBTUtBh5IS2IQf1/XIsfXJSOEIAA9HDFJS4S60HGosJ0ncEUmSWFbji0plpnIEkNORkaStmM4KNYm3XEHUR4o3YtPeN6KM9L7t3nxAk+UL6OXpHL32KihHZhe5oNPMtasTMk1RoW8nSNzSNDESNkDCnrJN6Qh4i07xiq7GuqO4aYei5ZELME89aR2BKaJarCBnD950FDl+/RDkMjEvlFI7Qgs1g8iI8QN2bpSo2Sb55+VAakfwgLoi5clZKHg+cj49/Txdwmh4jSNrI3offbac06YKep6pgyO/QYw6jHsysGoWcelCrLAj/EB0Qcb+7qhZiQ0r6bhGNP9kNQenyQ0r6QhQL/nuyI5ShLGKjmvUS+ywIyegFgq1ckSMl9+uR/iRSrGKjsgxJ7xgRS+F6uSInDto52t+RH4J9XJkbURfpUNLTlZIF8YKOnZQY6Y8/dogaREmtMwQSpDzo5nwRqt6jnCN6on0V/qR/4P8BUXYTHlN43m4njh2f0R8ZTQr5yghe+Loq5XIvkw5f7f83SDRZ/KWKxKHjVfVHPkP1Eqb6n9NjxIiHUI752lmqHHsRCDoyjlCE7mCoZ2vqcNE/LsS8YAtnoOuIsuVcoSsjtwwMaEhB8aH+YSuJm3suIxXDqTLPfJoRSKUKEct2Skh5gLv8riTVqlyyH8icsjhlRxyW4JO9xRFirOAdT/yLGAd6qooR8Yu8zliSRwhz0prR4zMsFFiaMyAC+S3sOuUdySCdvyPO1Zac5xkmh8be8REnlqdJKy6HPp3RFBaLQ/yjFXRxf4BUdQV2k9yRwoGR3nhd0TPLgRF2WVZos/KqRAxdscQfT+ZY/sRL2EIG5RSLJm9HoC2v1+9vBO5Q2bovmUWX5Ge2ZFSTrKOEMSEnqJ1t/CK9OyO09MWS7FpAG+LJU7MQquYszoiyqzQm6uwpjxyirTM6Ci7iOV0B30Q+82ScPnCLLM5yjvUjiFRXo4mXLOg6zKTo7d6Qb4pZyfJWtHKTTF1zBkcKWoTse/rmhd76+E70tdF3ChyvSOjTCN3hZCP2KGcfk30roBVwbWOlCywMZcTXCc8mpN1iP2qvNJRHlnxW0J+nfCIlVLOJtgqOFKysrm4VoFJj8opYl1CXUc8DK17hpeHCthxkvVXSsFcyZzOkaJpxZ4mMfTRFtH76m/vWkJeDtkOipEZpe9MOyn2DbAzSVS9Iu+wFq+g65AZhv57325wOqGIgvtnkf5WXZ5zlASLnvBxSf4gcx399Udw/3XAxJoCyZT8OsVrPkBjdwlqrUScvRXpKEjH++gDst44r7GbUUw2KIDBGUi0Y9KS24TwHUsgYjVPa19ypRBHv/CVd2KDOcKYgC3I0T/Y6Fh9KnLtI2OcIwtzBH4wgU1EWNIY6zuLdPTPvUBE6U5MJXNminX0LKUJ0hHnZxbt6E0lqDqtuCPKzOTvCC+thTRUgQ/Vx7ecy90RroXphb29hKhkrpUjfyPTAuDiLFHZnlr1Vf6G9uYHYR2TWGQRn8nYNXP0N5rihufQq3gWdegTrgzJG0yOQSpcdBads5uNoGkhPpKQMdZ2YHMkDjfhCJu1ZnKsX0TGaxoraVYfuQigTHyJVpyORPCAKEYZ9QXX2WwcdyeIEXtJrBtIzI5HUYo5PAks8lQa5+VYiGMScKbmquHIxBViZaYajvSi8JxV0Y40xgUAqIbjWdlEzlTBkcF8qlMBR+xPpynfEVk2kSulO9IObsWyHSnCwjqkBuSfB5ikuBNJ1nHfN++Tfz6HdYlEp46eobIppHK3gzjrZbLl5TTN0eOee3D8ImXFYYt53BfbV87JmrPmO+udTkR7Uoys9Cedwh5oxp7DZb9GoCbByU5UGP9BUV+FvoddFqXbEy2HD0lB95Sc3pbXuA5vbXb+E1dGhw4yEvv2xuJMrdoPh0qHfwOZ/+QcU/Kr8CXv7yuPo1taWlpaWlpaWlpaWlpaWlpaWlrKpPn/8/wCvJXdBOzswVPT87NwBf5nlN0IzBhzMBuU3QjMDGZgOyy7EZgZbsHrXdmNwMzdK3hXy24EZtR3QDa9rw5IQC6bPbAaS89x2yu7GVi53XqO4/uym4GV+7HnSC6a3FkNT9D70+jOOnwJHBs9e6jvgSM5b+5ybjAnD46/mjvqqI9HR3LV1FHHeCI/HR+bekUGYTw4kstmXpGDJfnl+B7xEOma03kPOZIvTZwjey9k2JHcN2/YMd7I747jMp+wjIfO+MSR/NG0sVX9QZ46ks/NSnrc/STPHcl5kzICwzmJciR/N0dy8ESiHZsjOfxNRjmS82Zck3dzMtqR/NmE0VV9JuMcyR/3dV8MGA9bMt6RHO/rvay7XYxPlc4cvbXrQ31DaTzMzoUQjuR4qdbT0lBXZ0GMcPQ2zU81tDTUt0ekDdrRs1zeD+t0wgyH90u0YbSj12NfhmqvHtE0eurwBdVLLzn6mtvlQL0bDoyqRhQag+GdOlhuowUvOfq8P25n86d9FUtcFvun+Wz7GOvn838eHMNT8M3VKQAAAABJRU5ErkJggg==',
            name: 'Photoshop',
        },
        {
            img: 'data:image/png;base64,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',
            name: 'Photoshop',
        },
        {
            img: 'https://img2.pngio.com/fileadobe-xd-cc-iconsvg-wikimedia-commons-xd-png-1050_1024.png',
            name: 'XD',
        },
        {
            img: 'data:image/png;base64,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',
            name: 'Photoshop',
        },
        {
            img: 'data:image/png;base64,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',
            name: 'Photoshop',
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div
            className="text-left py-24 overflow-hidden text-white"
            ref={AboutRef}>
            <div data-aos="fade-right" className="headings">
                <PortfolioHeading HEADING={'About Me'} />
            </div>
            <div className="flex flex-col md:flex-row my-10 md:my-16">
                <div data-aos="fade-up" className="w-full md:w-1/2">
                    <p className="Poppins-Regular text-base md:text-xl text-justify w-11/12">
                        {userData?.description
                            ? userData?.description
                            : 'In the mean time shall soon find out the cause of this What was the epicurus towards their children; each of these can have a chain of not to have been taken in the broad plain in what is the reason why'}
                    </p>
                    <div className="mt-10 Poppins-SemiBold text-aqua-normal  text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl w-11/12 leading-8  sm:leading-10">
                        "What was the epicurus towards their children; each of
                        these can have a chain.
                    </div>
                </div>
                <div
                    data-aos="fade-down"
                    className="w-full mt-16 md:mt-0 md:w-1/2 flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex justify-between -mt-10">
                            <div className="Poppins-Regular text-xl">
                                User Interface Design
                            </div>
                            <div className="Poppins-Regular  text-xl  text-aqua-normal">
                                60%
                            </div>
                        </div>
                        <div className="relative mt-5 w-full">
                            <div className="overflow-hidden h-1.5 text-xs flex rounded bg-white">
                                <div
                                    style={{
                                        width: '60%',
                                        backgroundColor: '#4DBCE9',
                                    }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="Poppins-Regular text-xl">
                                User Experience
                            </div>
                            <div className="Poppins-Regular  text-xl  text-aqua-normal">
                                89%
                            </div>
                        </div>
                        <div className="relative mt-5 w-full">
                            <div className="overflow-hidden h-1.5 text-xs flex rounded bg-white">
                                <div
                                    style={{
                                        width: '89%',
                                        backgroundColor: '#4DBCE9',
                                    }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <div className="Poppins-Regular text-xl">
                                Illustration
                            </div>
                            <div className="Poppins-Regular  text-xl  text-aqua-normal">
                                95%
                            </div>
                        </div>
                        <div className="relative mt-5 w-full">
                            <div className="overflow-hidden h-1.5 text-xs flex rounded bg-white">
                                <div
                                    style={{
                                        width: '95%',
                                        backgroundColor: '#4DBCE9',
                                    }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5" data-aos="fade-up">
                <Slider
                    {...settings}
                    className="w-full items-center py-10 text-white">
                    {softwareList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className=" h-40 flex items-center justify-center py-2">
                                <div className="w-8/12 mx-auto flex flex-col items-center justify-center  h-28 rounded-lg">
                                    <img
                                        src={item.img}
                                        className="mx-auto w-14 h-14 rounded-xl"
                                        alt=""
                                    />
                                    <div className="mx-auto text-center font-bold text-xl mt-2 text-white">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
