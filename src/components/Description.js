import React from 'react'
import List from './List'
import {
  Col,
  Text,
} from './_styled'

const Description = ({ job }) => (
  <Col s={2}>
    <Text>{job.summary}</Text>
    <List list={job.highlights} />
  </Col>
)

export default Description
