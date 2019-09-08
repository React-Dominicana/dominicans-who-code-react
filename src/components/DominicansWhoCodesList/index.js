import React from 'react'
import useFetch from '../../hooks/useFetch'
import CoderCard from '../CoderCard'

const DominicansWhoCodesList = () => {
    const { data, loading } = useFetch()
    const renderCodersCards = (coder, index) => 
        <CoderCard  {...coder} key={index} />
        
    return loading ? 'Loading'
        : data.map(renderCodersCards)
}

export default DominicansWhoCodesList
