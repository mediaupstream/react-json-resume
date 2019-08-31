import React from 'react'
import {
  Row,
  Col,
  Text,
  Heading,
} from './_styled'

const About = ({ data }) => (
  <Row>
    <Col>
      <Text size='15px'>{data.basics.name}</Text>
      <Text size='4.5px'>  </Text>
      <Text>{data.basics.email}</Text>
      <Text>{data.basics.phone}</Text>
    </Col>
    <Col s={2}>
      <Heading highlight>Introduction</Heading>
      <Text>
        {data.basics.summary}
      </Text>
    </Col>
  </Row>
)

export default About
