import { useState, useEffect } from 'react'
import { checkUrl, shuffle, pathOr } from '../utils'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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

const appendSocialLinks = coder => {
    const github = pathOr('#', 'github', coder)
    const linkedin = pathOr('#', 'linkedin', coder)
    const webpage = pathOr('#', 'webpage', coder)
    const twitter = pathOr('#', 'twitter', coder)

    return {
        ...coder,
        links: Array.from([
            { url: github, icon: faGithub }, 
            { url: linkedin, icon: faLinkedin }, 
            { url: webpage, icon: faGlobeAmericas }, 
            { url: twitter, icon: faTwitter }]
        )
    }
}

const updateLinks = data =>
    data.map(appendSocialLinks)

const updateImageUrl = data =>
    data.map(appendRawGitUrl)

export const useDominicanCoders = (criteria = '') => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const setCoders = coders => setData(coders)

    useEffect(() => {
        setLoading(true)
        fetch(buildUrl(criteria))
            .then(isOk)
            .then(updateImageUrl)
            .then(updateLinks)
            .then(shuffle)
            .then(setCoders)
            .finally(setLoading(false))

    }, [criteria])

    return { data, loading }
}

