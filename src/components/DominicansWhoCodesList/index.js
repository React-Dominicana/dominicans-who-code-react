import React from 'react'

import Row from 'reactstrap/lib/Row'
import CoderCard from '../CoderCard'

import useDominicanCoders from '../../hooks/useDominicanCoders'

const DominicansWhoCodesList = () => {
    const { data, loading } = useDominicanCoders()

    const shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          temporaryValue = array[currentIndex]
          array[currentIndex] = array[randomIndex]
          array[randomIndex] = temporaryValue
        }
      
        return array
    }

    const renderCodersCards = (coder, index) =>
        <CoderCard  {...coder} key={index} />

    return loading ? 'Loading'
        : (<Row className="dev-list">{shuffle(data).map(renderCodersCards)}</Row>)
}

export default DominicansWhoCodesList
