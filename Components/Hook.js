import React from 'react'
import { Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootStrapCarousel from './BootStrapCarousel'

function Hook() {
  return (
    <Container style={{textAlign:'center'}}>
        <h2>WELCOME TO THE HOOK PAGE</h2>
        <BootStrapCarousel/>
    </Container>
  )
}

export default Hook
