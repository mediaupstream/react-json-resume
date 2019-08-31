import React, { Fragment } from 'react'
import List from './List'
import {
  Col,
  Row,
  Text,
} from './_styled'
import SectionTitle from './SectionTitle'

const Skills = ({ data }) => (
  <Row>
    {data.skills.map((skill, i) => (
      <Col key={i}>
        <Text>{skill.name}</Text>
        <List list={skill.keywords} />
      </Col>
    ))}
  </Row>
)


export default props => (
  <Fragment>
    <SectionTitle title="Skills" />
    <Skills {...props} />
  </Fragment>
)
