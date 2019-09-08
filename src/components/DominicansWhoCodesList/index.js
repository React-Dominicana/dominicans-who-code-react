import React from 'react'

import Row from 'reactstrap/lib/Row'
import CoderCard from '../CoderCard'

import useFetch from '../../hooks/useFetch'

const DominicansWhoCodesList = () => {
    const { data, loading } = useFetch()

    const renderCodersCards = (coder, index) =>
        <CoderCard  {...coder} key={index} />

    return loading ? 'Loading'
        : (<Row>{data.map(renderCodersCards)}</Row>)
}

export default DominicansWhoCodesList
