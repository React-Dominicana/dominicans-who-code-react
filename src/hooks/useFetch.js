import { useState, useEffect } from 'react'

const buildUrl = criteria =>
    `${process.env.REACT_APP_API_URL}${criteria ? `/${criteria}` : ''}`

const isOk = response =>
    response.ok ?
        response.json() :
        Promise.reject(response.statusText)

const useFetch = (criteria = '') => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const setCoders = coders => setData(coders)
    useEffect(() => {
        setLoading(true)
        fetch(buildUrl(criteria))
            .then(isOk)
            .then(setCoders)
            .finally(setLoading(false))

    }, [criteria])

    return { data, loading }
}

export default useFetch