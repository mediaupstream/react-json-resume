import React from 'react'
import { jobDate } from './_utils'
import {
  Col,
  Text,
} from './_styled'

const Position = ({ job }) => (
  <Col>
    <Text>{job.name}</Text>
    <Text>{job.position}</Text>
    <Text size='9px'>{jobDate(job.startDate)} - {jobDate(job.endDate)}</Text>
  </Col>
)


export default Position
