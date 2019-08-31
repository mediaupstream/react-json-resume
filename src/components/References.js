import React, { Fragment } from 'react'
import {
  Row,
  Col,
  Text,
} from './_styled'
import SectionTitle from './SectionTitle'

const References = ({ data }) => (
  <Row>
    <Col>
      <Text>References available on request.</Text>
    </Col>
  </Row>
)

export default props => (
  <Fragment>
    <SectionTitle title="References" />
    <References {...props} />
  </Fragment>
)
