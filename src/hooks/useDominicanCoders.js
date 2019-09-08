import { useState, useEffect } from 'react'
import { checkUrl } from '../utils'

const buildUrl = criteria =>
    `${process.env.REACT_APP_API_URL}${criteria ? `/${criteria}` : ''}`

const isOk = response =>
    response.ok ?
        response.json() :
        Promise.reject(response.statusText)

const appendRawGitUrl = coder => {
    const imageStatus = checkUrl(coder.image)

    return {
        ...coder,
        image: (imageStatus === 1)
            ? coder.image
            : (imageStatus === 0)
                ? `${process.env.REACT_APP_ROOT_URL}${coder.image}`
                : 'https://picsum.photos/200'
    }
}

const updateImageUrl = data =>
    data.map(appendRawGitUrl)

const useDominicanCoders = (criteria = '') => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const setCoders = coders => setData(coders)

    useEffect(() => {
        setLoading(true)
        fetch(buildUrl(criteria))
            .then(isOk)
            .then(updateImageUrl)
            .then(setCoders)
            .finally(setLoading(false))

    }, [criteria])

    return { data, loading }
}

export default useDominicanCoders