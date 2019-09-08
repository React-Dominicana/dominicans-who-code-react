import React, { memo } from 'react'
import Col from 'reactstrap/lib/Col'
import Card from 'reactstrap/lib/Card'
import CardImg from 'reactstrap/lib/CardImg'
import CardTitle from 'reactstrap/lib/CardTitle'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'
import CardText from 'reactstrap/lib/CardText'
import CardBody from 'reactstrap/lib/CardBody'
import Badge from 'reactstrap/lib/Badge'

const CoderCard = memo((props) => {
  const skills = props.skills.split(',')

  const renderSkillsTag = (skill, index) => 
    <Badge color="primary" key={index}>{skill}</Badge>

  return (
    <Col xs={12} md={4}>
      <Card className="m-3">
        <CardImg top src={props.image} alt={`${props.name}. ${props.summary}. He knows ${props.skills}`} />
        <CardBody>
          {skills.map(renderSkillsTag)}
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.initials}</CardSubtitle>
          <CardText>{props.summary}</CardText>
        </CardBody>
      </Card>
    </Col>

  )
})

export default CoderCard