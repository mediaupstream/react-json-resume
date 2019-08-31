import React from 'react'
import { Font } from '@react-pdf/renderer'
import {
  Document,
  Page,
  Hr
} from './_styled'
import About from './About'
import Header from './Header'
import Links from './Links'
import References from './References'
import Skills from './Skills'
import Volunteer from './Volunteer'
import WorkHistory from './WorkHistory'

/**
 * Import JSON resume (follows https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json)
 */
import data from '../data/example.json'

/**
 * Register fonts to use with React-PDF
 */
Font.register({
  family: 'Roboto-Medium',
  src: 'fonts/Roboto-Medium.ttf'
})

const sections = [
  Header,
  About,
  Hr,
  Skills,
  WorkHistory,
  Links,
  Volunteer,
  References,
]

const Resume = () => (
  <Document>
    <Page size="A4">
      {
        sections.map((Section, i) =>
          <Section key={i} data={data} />
        )
      }
    </Page>
  </Document>
)

export default Resume
