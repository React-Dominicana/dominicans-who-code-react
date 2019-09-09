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
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const CoderCard = memo((props) => {
  const skills = props.skills.split(',')

  const renderSkillsTag = (skill, index) =>
    <Badge color="primary" key={index} className="skill-tag">{skill}</Badge>

  const renderIconsAndLinks = (icon, link) => {
    return (
      <a className="link" href={link}>
        <FontAwesomeIcon className="icon" icon={icon} />
      </a>
    );
  }

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
          <Row className="icons">
            {props.webpage === undefined ? <></> : renderIconsAndLinks(faGlobeAmericas, props.webpage)}
            {props.github === undefined ? <></> : renderIconsAndLinks(faGithub, props.github)}
            {props.linkedin === undefined ? <></> : renderIconsAndLinks(faLinkedin, props.linkedin)}
            {props.twitter === undefined ? <></> : renderIconsAndLinks(faTwitter, props.twitter)}
          </Row>
        </CardBody>
      </Card>
    </Col>

  )
})

export default CoderCard