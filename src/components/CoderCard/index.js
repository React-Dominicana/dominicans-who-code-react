import React, { memo } from 'react'
import Col from 'reactstrap/lib/Col'
import Card from 'reactstrap/lib/Card'
import CardImg from 'reactstrap/lib/CardImg'
import CardTitle from 'reactstrap/lib/CardTitle'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'
import CardText from 'reactstrap/lib/CardText'
import CardBody from 'reactstrap/lib/CardBody'

const CoderCard = memo((props) => {
  return (
    <Col xs={12} md={4}>
      <Card className="m-3">
        <CardImg top  src={props.image} alt="A dominican coder" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.initials}</CardSubtitle>
          <CardText>{props.summary}</CardText>
        </CardBody>
      </Card>
    </Col>

  )
})

export default CoderCard