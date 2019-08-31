import React from 'react'
import { YEAR } from './_utils'
import {
  Col,
  Row,
  Text,
} from './_styled'

const Header = ({ data }) => (
  <Row fixed={true} top>
    <Col>
      <Text size='9px' light right>{data.basics.name} - {data.basics.label} - {YEAR}</Text>
    </Col>
  </Row>
)

export default Header
