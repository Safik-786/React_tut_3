import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Col, Container, Row } from 'react-bootstrap'

function BootStrapGrid() {
  return (
    <div>
      {/* <Button variant='outline-danger'>Click me</Button> */}
      <Container fluid>
        <Row>
            <Col>
                <div className='bg-warning p-2'>Navbar</div>
            </Col>
        </Row>
        {/* <Row className='mt-5'>
            <Col sm={6} md={8} lg={3}>
                <div className='bg-primary p-2'>1st column</div>
            </Col>
            <Col>
                <div className='bg-success p-2'>2nd column</div>
            </Col>
            <Col sm={2}>
                <div className='bg-danger p-2'>3rd column</div>
            </Col>
        </Row> */}
        <Row className='mt-5'>
            <Col md={{span:6,offset:2}}>
                <div className='bg-primary p-2'>1st column</div>
            </Col>
            <Col>
                <div className='bg-success p-2'>2nd column</div>
            </Col>
            <Col sm={2}>
                <div className='bg-danger p-2'>3rd column</div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BootStrapGrid
