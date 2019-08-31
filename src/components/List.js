import React from 'react'
import {
  Col,
  Row,
  Text,
} from './_styled'

const List = ({ list = [] }) => (
  <Row m="0px 8px">
    <Col>
      {list.map((n, i) => <Text size='8.5px' key={i}>- {n}</Text>)}
    </Col>
  </Row>
)

export default List
