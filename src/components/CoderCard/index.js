import React, {memo} from 'react'
import Card from 'reactstrap/lib/Card'
import CardImg from 'reactstrap/lib/CardImg'
import CardTitle from 'reactstrap/lib/CardTitle'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'
import CardText from 'reactstrap/lib/CardText'
import CardBody from 'reactstrap/lib/CardBody'

const CoderCard = memo((props) => {
    return (
        <Card>
        <CardImg top width="100%" src={props.image} alt="A dominican coder" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.initials}</CardSubtitle>
          <CardText>{props.summary}</CardText>
        </CardBody>
      </Card>
    )
})

export default CoderCard