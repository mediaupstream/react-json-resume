import React, { Fragment } from 'react'
import {
  Row,
  Col,
  Text,
} from './_styled'
import SectionTitle from './SectionTitle'

const Volunteer = ({ data }) => (
  <Row>
    <Col>
      {data.projects.filter(n => n.type === 'talk').map(({ name, entity, startDate }, i) => (
        <Text size='9px' style={{ paddingBottom: '3px' }} key={i}>"{name}" - {entity}, {new Date(startDate).getFullYear()}</Text>
      ))}
      {data.awards.map(({ title, awarder, date }, i) => (
        <Text size='9px' style={{ paddingBottom: '3px' }} key={i}>{title} - {awarder}, {new Date(date).getFullYear()}</Text>
      ))}
    </Col>
    <Col>
      {data.volunteer.map(({ position, organization, startDate }, i) => (
        <Text size='9px' style={{ paddingBottom: '3px' }} key={i}>{position} - {organization}, {new Date(startDate).getFullYear()}</Text>
      ))}
    </Col>
  </Row>
)

export default props => (
  <Fragment>
    <SectionTitle title="Speaking, Volunteer, awards, Teaching" />
    <Volunteer {...props} />
  </Fragment>
)
