import {useEffect, useState} from 'react'
import {developersRef} from '../../firebase/firebase'

export const useDeveloperInfo = (name) => {
    const [userData, setuserData] = useState()
    useEffect(() => {
        developersRef
            .where('userName', '==', name)
            .get()
            .then((response) => {
                response.forEach(async (snapshot) => {
                    await setuserData(snapshot.data())
                })
            })
    }, [name])

    return userData
}
