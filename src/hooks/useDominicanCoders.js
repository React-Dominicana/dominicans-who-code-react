import { useState, useEffect } from 'react'
import * as helper from '../utils/helper'

const buildUrl = criteria =>
    `${process.env.REACT_APP_API_URL}${criteria ? `/${criteria}` : ''}`

const isOk = response =>
    response.ok ?
        response.json() :
        Promise.reject(response.statusText) 

const appendRawGitUrl = coder => ({
    ...coder,
    image: `${process.env.REACT_APP_ROOT_URL}${coder.image}`
})

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
            .then(helper.shuffle)
            .then(setCoders)
            .finally(setLoading(false))

    }, [criteria])

    return { data, loading }
}

export default useDominicanCoders