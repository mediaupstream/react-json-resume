import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { PDFViewer } from '@react-pdf/renderer'
import Resume from './components/Resume'

const App = () => (
  <div style={{ padding: 0, margin: 0, minHeight: '100%' }}>
    <PDFViewer width='100%' height='1150'>
      <Resume />
    </PDFViewer>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
