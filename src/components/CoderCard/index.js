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
    <Badge color="primary" key={index} style={{ margin: '0 2px' }}>{skill}</Badge>

  return (
    <Col xs={12} md={4}>
      <Card className="m-3">
        <div
          style={{
            backgroundColor: '#212529',
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            height: '300px'
          }} />
        <CardBody>
          {skills.map(renderSkillsTag)}
          <CardTitle style={{ fontSize: '20px', fontWeight: '800' }}>{props.name}</CardTitle>
          <CardSubtitle>{props.initials}</CardSubtitle>
          <CardText>{props.summary}</CardText>
        </CardBody>
      </Card>
    </Col>

  )
})

export default CoderCard