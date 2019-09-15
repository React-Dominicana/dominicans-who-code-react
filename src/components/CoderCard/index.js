import React, { memo } from 'react'
import Col from 'reactstrap/lib/Col'
import Card from 'reactstrap/lib/Card'
import CardTitle from 'reactstrap/lib/CardTitle'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'
import CardText from 'reactstrap/lib/CardText'
import CardBody from 'reactstrap/lib/CardBody'
import Badge from 'reactstrap/lib/Badge'
import Row from 'reactstrap/lib/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CoderCard = memo((props) => {
  const skills = props.skills.split(',')

  const renderSkillsTag = (skill, index) =>
    <Badge color="primary" key={index} className="skill-tag">{skill}</Badge>

  const renderIconsAndLinks = (link, index) => {
    const isPlaceholderLink = () => link.url === '#' ? 'd-none' : ''
    return (
      <a className="link" href={link.url} key={index}>
        <FontAwesomeIcon className={`icon ${isPlaceholderLink()}`} icon={link.icon} />
      </a>
    );
  }

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className="dev-card m-3">
        <div
          className="image"
          style={{ backgroundImage: `url(${props.image})` }} />
        <CardBody>
          {skills.map(renderSkillsTag)}
          <CardTitle className="title">{props.name}</CardTitle>
          <CardSubtitle className="subtitle">
            <span>{props.initials}</span>
          </CardSubtitle>
          <CardText className="description">{props.summary}</CardText>
          <Row className="icons">
            {props.links.map(renderIconsAndLinks)}
          </Row>
        </CardBody>
      </Card>
    </Col>

  )
})

export default CoderCard