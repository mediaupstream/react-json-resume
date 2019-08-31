import React, { Fragment } from 'react'
import { View } from '@react-pdf/renderer'
import {
  Row,
  Col,
  Text,
} from './_styled'
import SectionTitle from './SectionTitle'

const Links = ({ data }) => (
  <View style={{ marginBottom: '20px' }}>
    {data.basics.profiles.map(({ network, url }, i) => (
      <Row key={i} m='-5px 54px'>
        <Col><Text size='10px'>{network}</Text></Col>
        <Col s={4}><Text size='10px'>{url}</Text></Col>
      </Row>
    ))}
  </View>
)

export default props => (
  <Fragment>
    <SectionTitle title="Links" />
    <Links {...props} />
  </Fragment>
)
