import React from 'react'

import Row from 'reactstrap/lib/Row'
import CoderCard from '../CoderCard'

import useDominicanCoders from '../../hooks/useDominicanCoders'

const DominicansWhoCodesList = () => {
    const { data, loading } = useDominicanCoders()

    const renderCodersCards = (coder, index) =>
        <CoderCard  {...coder} key={index} />

    return loading ? 'Loading'
        : (<Row>{data.map(renderCodersCards)}</Row>)
}

export default DominicansWhoCodesList
