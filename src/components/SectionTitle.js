import React from 'react'
import {
  Row,
  Heading,
} from './_styled'

const SectionTitle = ({ title }) => (
  <Row m='0px 54px'>
    <Heading highlight>{title}</Heading>
  </Row>
)

export default SectionTitle
