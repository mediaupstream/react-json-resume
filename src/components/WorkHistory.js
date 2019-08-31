import React, { Fragment } from 'react'
import {
  Row,
} from './_styled'
import SectionTitle from './SectionTitle'
import Position from './Position'
import Description from './Description'

export default ({ data }) => (
  <Fragment>
    <SectionTitle title="Work History" />
    {data.work.filter(n => !n.hide).map((job, i) =>
      <Row key={i} wrap={false}>
        <Position job={job} />
        <Description job={job} />
      </Row>
    )}
  </Fragment>
)
