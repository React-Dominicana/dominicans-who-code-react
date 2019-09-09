import React, { memo } from 'react'
import Col from 'reactstrap/lib/Col'
import Card from 'reactstrap/lib/Card'
import CardTitle from 'reactstrap/lib/CardTitle'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'
import CardText from 'reactstrap/lib/CardText'
import CardBody from 'reactstrap/lib/CardBody'
import Badge from 'reactstrap/lib/Badge'

const CoderCard = memo((props) => {
  const skills = props.skills.split(',')

  const renderSkillsTag = (skill, index) =>
    <Badge color="primary" key={index} className="skill-tag">{skill}</Badge>

  return (
    <Col xs={12} md={4}>
      <Card className="dev-card m-3">
        <div
          className="image"
          style={{ backgroundImage: `url(${props.image})` }} />
        <CardBody>
          {skills.map(renderSkillsTag)}
          <CardTitle className="title">{props.name}</CardTitle>
          <CardSubtitle className="subtitle">{props.initials}</CardSubtitle>
          <CardText className="description">{props.summary}</CardText>
        </CardBody>
      </Card>
    </Col>

  )
})

export default CoderCard