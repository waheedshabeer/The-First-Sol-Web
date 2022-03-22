import {useEffect, useState} from 'react'
import {developersRef} from '../../firebase/firebase'

export const useDevelopersInfo = () => {
    const [teamData, setteamData] = useState([])
    useEffect(() => {
        developersRef
            .where('isDeleted', '==', false)
            .get()
            .then((response) => {
                let arr = []
                response.forEach(async (snapshot) => {
                    arr.push(snapshot.data())
                })
                setteamData(arr)
            })
        return () => {}
    }, [])
    return teamData
}
