import { useState, useEffect } from 'react'
import { checkUrl, shuffle, isSocialLinkAvailable } from '../utils'
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
    let links = []
    const githubStatus = isSocialLinkAvailable(coder.github)
    const linkedinStatus = isSocialLinkAvailable(coder.linkedin)
    const webpageStatus = isSocialLinkAvailable(coder.webpage)
    const twitterStatus = isSocialLinkAvailable(coder.twitter)

    if (githubStatus)
        links.push({ url: coder.github, icon: faGithub})

    if (linkedinStatus)
        links.push({ url: coder.linkedin, icon: faLinkedin})

    if (webpageStatus)
        links.push({ url: coder.webpage, icon: faGlobeAmericas})

    if (twitterStatus)
        links.push({ url: coder.twitter, icon: faTwitter})

    return {
        ...coder,
        links
    }
}

const updateLinks = data =>
    data.map(appendSocialLinks)

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
            .then(updateLinks)
            .then(shuffle)
            .then(setCoders)
            .finally(setLoading(false))

    }, [criteria])

    return { data, loading }
}

export default useDominicanCoders